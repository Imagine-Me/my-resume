import { jsPDF, type TextOptionsLight } from "jspdf";
import type { IContent, ITemplate } from "src/templates/template.interface";

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

export class GenerateResume {
  xPos = 0;
  yPos = 0;
  fullWidth: number;
  layoutX = this.xPos;
  layoutY = this.yPos;
  template: ITemplate[];
  _doc;
  marginX: number;
  cursor = 0;
  constructor(template: ITemplate[], marginX = 10, marginY = 10) {
    this._doc = new jsPDF({
      orientation: "p",
      unit: "px",
      format: "a4",
      putOnlyUsedFonts: true,
      floatPrecision: 16,
    });
    this.template = template;
    console.log("---", this._doc.internal.pageSize.width);
    this.fullWidth = this._doc.internal.pageSize.width - marginX * 2;
    this.marginX = marginX;
  }

  renderText(
    value: string,
    options: TextOptionsLight,
    color = FONT_COLOR,
    link?: string,
    isList = false,
  ) {
    // if it is not a new line add a space
    if (this.cursor != this.layoutX) {
      this.cursor += 4;
    }
    this._doc.setTextColor(color);
    let maxWidth =
      (options.maxWidth ?? this.fullWidth) - (this.cursor - this.layoutX);
    if (isList) {
      maxWidth -= 25;
    }
    const splittedText = this._doc.splitTextToSize(value, maxWidth ?? 0, {
      align: options.align,
    });
    if (link) {
      this._doc.textWithLink(splittedText[0], this.cursor, this.layoutY, {
        ...options,
        maxWidth,
        url: link,
      });
    } else {
      this._doc.text(splittedText[0], this.cursor, this.layoutY, {
        ...options,
        maxWidth,
      });
    }
    if (splittedText.length > 1) {
      this.cursor = this.layoutX;
      if (isList) {
        this.cursor += 20;
      }
      const newArray = splittedText.slice(1);
      const joinedText = newArray.join(" ");
      this.layoutY += this._doc.getFontSize();
      this.renderText(joinedText, options, undefined, link, isList);
      return;
    }
    if (this.layoutY > this.yPos) {
      this.yPos = this.layoutY;
    }
    this.cursor += this._doc.getTextWidth(splittedText[0]);
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
        this._doc.setFont(FONT_FAMILY, FONT_STYLE, "bold");
        this._doc.setFontSize(FONT_SIZES.h1);
        if (newLine) {
          this.layoutY += FONT_SIZES.h1 / 2;
          this.cursor = this.layoutX;
        }
        break;
      }
      case "normal": {
        this._doc.setFontSize(FONT_SIZES.normal);
        if (newLine) {
          this.layoutY += FONT_SIZES.normal / 2;
          this.cursor = this.layoutX;
        }
        break;
      }
      case "body1": {
        this._doc.setFontSize(FONT_SIZES.body1);
        if (newLine) {
          this.layoutY += FONT_SIZES.body1 / 2;
          this.cursor = this.layoutX;
        }
        break;
      }
      case "body2": {
        this._doc.setFontSize(FONT_SIZES.body2);
        if (newLine) {
          this.layoutY += FONT_SIZES.body2 / 2;
          this.cursor = this.layoutX;
        }
        break;
      }
      case "small": {
        this._doc.setFontSize(FONT_SIZES.small);
        if (newLine) {
          this.layoutY += FONT_SIZES.small / 2;
          this.cursor = this.layoutX;
        }
        break;
      }
      case "list": {
        this._doc.setFontSize(FONT_SIZES.body2);
        if (newLine) {
          this.layoutY += FONT_SIZES.body2 / 2;
          this.cursor = this.layoutX + 10;
          this.renderText("\u2022 ", { maxWidth });
          this.cursor = this.layoutX + 20;
          // maxWidth -= 20
        }
      }
    }

    if (content.marginTop) {
      this.layoutY += content.marginTop;
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
      this.layoutY += content.marginBottom;
    }
  }

  setFontStyle(family = FONT_FAMILY, style = FONT_STYLE, weight = FONT_WEIGHT) {
    this._doc.setFont(family, style, weight);
    this._doc.setFontSize(FONT_SIZES.normal);
    this._doc.setTextColor(FONT_COLOR);
  }

  render(contents: IContent[], maxWidth: number, x: number, y: number) {
    this.layoutX = x;
    this.layoutY = y;
    this.cursor = x;
    contents.forEach((content) => {
      this.setTextType(content, maxWidth);
    });
  }

  layout({ layout, contents }: ITemplate) {
    const currentX = this.xPos;
    const currentY = this.yPos + 10;
    switch (layout) {
      case "4/2": {
        this.render(
          contents[0],
          ((this.fullWidth - 5) * 4) / 6,
          this.marginX,
          currentY,
        );
        this.render(
          contents[1],
          ((this.fullWidth - 5) * 2) / 6,
          ((this.fullWidth - 5) * 4) / 6 + 10,
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
      this.layout(content);
    });
  }

  downloadResume() {
    this.generate();
    this._doc.save("a4.pdf");
  }
}
