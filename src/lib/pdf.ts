import { jsPDF, type TextOptionsLight } from "jspdf";
import type {
  IContent,
  ITemplate,
  TemplateOptions,
} from "src/templates/template.interface";

const FONT_SIZES = {
  h1: 32,
  body2: 10,
  body1: 12,
  normal: 14,
  small: 8,
};

const FONT_COLOR = "#1e1d1e";
const FONT_WEIGHT = "normal";
const FONT_STYLE = "normal";
const FONT_FAMILY = "Roboto";

interface Docs {
  xPos: number;
  yPos: number;
  layoutX: number;
  layoutY: number;
}

export class GenerateResume {
  _currentPage = 0;
  template: ITemplate[];
  // _doc;
  _doc: jsPDF;
  _docsInfo: Docs[];
  marginX: number;
  marginY: number;
  cursorX = 0;
  cursorY = 0;
  constructor(
    template: ITemplate[],
    {
      marginX,
      marginY,
      orientation = "p",
      unit = "px",
      format = "a4",
      floatPrecision = 16,
      ...options
    }: TemplateOptions,
  ) {
    const doc = new jsPDF({
      orientation,
      unit,
      format,
      floatPrecision,
      ...options,
    });
    this._doc = doc;
    this.template = template;
    this.marginX = marginX;
    this.marginY = marginY;
    this._docsInfo = [this.initialDocInfo];
  }

  get doc() {
    return this._doc;
  }
  get fullWidth() {
    return this.doc.internal.pageSize.width - this.marginX * 2;
  }
  get fullHeight() {
    return this.doc.internal.pageSize.height - this.marginY * 2;
  }

  get xPos() {
    return this._docsInfo[this._currentPage].xPos;
  }
  get yPos() {
    return this._docsInfo[this._currentPage].yPos;
  }
  get totalPages() {
    return this._docsInfo.length;
  }

  get layoutX() {
    return this._docsInfo[this._currentPage].layoutX + this.marginX;
  }

  get layoutY() {
    return this._docsInfo[this._currentPage].layoutY;
  }

  get initialDocInfo() {
    return { xPos: 0, yPos: this.marginY, layoutX: 0, layoutY: this.marginY };
  }

  set layoutX(position: number) {
    this._docsInfo[this._currentPage].layoutX = position;
  }

  set layoutY(position: number) {
    this._docsInfo[this._currentPage].layoutY = position;
  }

  set xPos(position: number) {
    this._docsInfo[this._currentPage].xPos = position;
  }

  set yPos(position: number) {
    this._docsInfo[this._currentPage].yPos = position;
  }

  set docsInfo(info: Docs) {
    this._docsInfo = [...this._docsInfo, info];
  }

  checkAndAddPage() {
    if (
      this.cursorY > this.fullHeight + this.doc.getFontSize() &&
      this._currentPage === this.totalPages - 1
    ) {
      this.doc.addPage();
      this.docsInfo = this.initialDocInfo;
      this._currentPage += 1;
      this.doc.setPage(this._currentPage + 1);
      this.cursorY = this.marginY;
    } else if (this.cursorY > this.fullHeight + this.doc.getFontSize()) {
      const layoutX = this.layoutX;
      this._currentPage += 1;
      this.cursorY = this.marginY;
      this.layoutX = layoutX - this.marginX;
      this.cursorX = layoutX;
      this.doc.setPage(this._currentPage + 1);
    }
  }

  renderText(
    value: string,
    options: TextOptionsLight,
    color = FONT_COLOR,
    link?: string,
    isList = false,
  ) {
    const notNewLine = this.cursorX != this.layoutX;
    // if it is not a new line add a space
    if (notNewLine) {
      this.cursorX += 4;
    }
    this.checkAndAddPage();
    this.doc.setTextColor(color);
    let maxWidth =
      (options.maxWidth ?? this.fullWidth) - (this.cursorX - this.layoutX);
    if (isList) {
      maxWidth -= 25;
    }
    const splittedText = this.doc.splitTextToSize(value, maxWidth ?? 0, {
      align: options.align,
    });
    if (link) {
      this.doc.textWithLink(splittedText[0], this.cursorX, this.cursorY, {
        ...options,
        maxWidth,
        url: link,
      });
    } else {
      this.doc.text(splittedText[0], this.cursorX, this.cursorY, {
        ...options,
        maxWidth,
      });
    }
    if (splittedText.length > 1) {
      this.cursorX = this.layoutX;
      if (isList) {
        this.cursorX += 20;
      }
      const newArray = splittedText.slice(1);
      const joinedText = newArray.join(" ");
      this.cursorY += this.doc.getFontSize();
      this.renderText(joinedText, options, undefined, link, isList);
      return;
    }
    if (this.cursorY > this.yPos) {
      this.yPos = this.cursorY;
    }
    const textWidth = this.doc.getTextWidth(splittedText[0]);
    this.cursorX += textWidth;
  }
  setTextType(
    content: IContent,
    maxWidth: number,
    newLine = true,
    isList = false,
  ) {
    this.setFontStyle(content.fontFamily, content.style, content.fontWeight);
    switch (content.type) {
      case "h1": {
        this.doc.setFont(FONT_FAMILY, FONT_STYLE, "bold");
        this.doc.setFontSize(FONT_SIZES.h1);
        if (newLine) {
          this.cursorY += FONT_SIZES.h1 / 2;
          this.cursorX = this.layoutX;
        }
        break;
      }
      case "normal": {
        this.doc.setFontSize(FONT_SIZES.normal);
        if (newLine) {
          this.cursorY += FONT_SIZES.normal / 2;
          this.cursorX = this.layoutX;
        }
        break;
      }
      case "body1": {
        this.doc.setFontSize(FONT_SIZES.body1);
        if (newLine) {
          this.cursorY += FONT_SIZES.body1 / 2;
          this.cursorX = this.layoutX;
        }
        break;
      }
      case "body2": {
        this.doc.setFontSize(FONT_SIZES.body2);
        if (newLine) {
          this.cursorY += FONT_SIZES.body2 / 2;
          this.cursorX = this.layoutX;
        }
        break;
      }
      case "small": {
        this.doc.setFontSize(FONT_SIZES.small);
        if (newLine) {
          this.cursorY += FONT_SIZES.small / 2;
          this.cursorX = this.layoutX;
        }
        break;
      }
      case "list": {
        this.doc.setFontSize(FONT_SIZES.body2);
        if (newLine) {
          this.cursorY += FONT_SIZES.body2 / 2;
          this.cursorX = this.layoutX + 10;
          this.renderText("\u2022 ", { maxWidth });
          this.cursorX = this.layoutX + 20;
        }
      }
    }

    if (content.marginTop) {
      this.cursorY += content.marginTop;
    }
    const text = content.content;
    if (Array.isArray(text)) {
      text.forEach((t) => {
        this.setTextType(t, maxWidth, false, content.type === "list");
      });
    } else {
      const options: TextOptionsLight = { maxWidth, align: content.align };
      this.renderText(
        text,
        options,
        content.color,
        content.link,
        content.type === "list" || isList,
      );
    }
    if (content.marginBottom) {
      this.cursorY += content.marginBottom;
    }
  }

  setFontStyle(family = FONT_FAMILY, style = FONT_STYLE, weight = FONT_WEIGHT) {
    this.doc.setFont(family, style, weight);
    this.doc.setFontSize(FONT_SIZES.normal);
    this.doc.setTextColor(FONT_COLOR);
  }

  render(contents: IContent[], maxWidth: number, x: number, y: number) {
    this.layoutX = x;
    this.layoutY = y;
    this.cursorY = y;
    this.cursorX = x;
    contents.forEach((content) => {
      this.setTextType(content, maxWidth);
    });
  }

  layout({ layout, contents }: ITemplate) {
    const currentY = this.yPos + 10;
    const currentPage = this._currentPage + 1;
    switch (layout) {
      case "4/2": {
        this.render(contents[0], ((this.fullWidth - 5) * 4) / 6, 0, currentY);
        this._currentPage = currentPage - 1;
        this.doc.setPage(currentPage);
        this.render(
          contents[1],
          ((this.fullWidth - 5) * 2) / 6,
          ((this.fullWidth - 5) * 4) / 6,
          currentY,
        );
        return;
      }
      case "full": {
        this.render(contents[0], 445, 0, currentY);
        return;
      }
    }
  }

  generate() {
    this.template.forEach((content) => {
      this._currentPage = this.totalPages - 1;
      this.doc.setPage(this.totalPages);
      this.layout(content);
    });
  }

  downloadResume() {
    this.generate();
    this.doc.save("a4.pdf");
  }
}
