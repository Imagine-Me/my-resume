import { jsPDF } from "jspdf";
import type { IContent, ITemplate } from "src/templates/template.interface";

// Default export is a4 paper, portrait, using millimeters for units

export const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont('', 'normal', "bold")
    doc.setFontSize(32)
    doc.text('Prince Thomas', 10, 15, { maxWidth: 150 });
    doc.setFont('', 'normal', "normal")
    doc.setFontSize(10)
    doc.text('Team player | Problem solver | Eager to learn | React Developer | Vue Developer', 10, 25, { maxWidth: 150 });
    doc.text("Church Road, Manjapra, Angamali, Ernakulam 683581", 150, 10, { maxWidth: 50 })
    doc.setFont('', 'normal', "bold")
    doc.text('+91 8589852718', 150, 20, { maxWidth: 50 })
    doc.setFont('', 'underline', "bold")
    doc.setTextColor('#3ad8b6')
    const aa = 'princekizhthara@gmail.com Github | Linkedin  | DEV | aa'
    const a = doc.text(aa, 150, 25, { maxWidth: 50 })

    const textWidth = doc.getTextWidth(aa)
    console.log(doc.splitTextToSize(aa, 50))
    doc.text('EXPERIENCE', 10, 30)
    // doc.save("a4.pdf");

}

const FONT_SIZES = {
    h1: 32,
    body2: 10,
    normal: 14
}

const FONT_COLOR = '#00000'
const FONT_WEIGHT = 'normal'
const FONT_STYLE = 'normal'
const FONT_FAMILY = 'Roboto'
export class GenerateResume {
    xPos = 20;
    yPos = 20;
    layoutX = this.xPos
    layoutY = this.yPos
    template: ITemplate[];
    _doc;
    constructor(template: ITemplate[]) {
        this._doc = new jsPDF({
            orientation: 'p',
            unit: 'px',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16,
        })
        this.template = template
    }

    renderText(value: any | any[], maxWidth: number) {
        const doc = this._doc.text(value, this.layoutX, this.layoutY, { maxWidth })
        const splittedText = this._doc.splitTextToSize(value, maxWidth)
        if (splittedText.length > 1) {
            const blockHeight = (splittedText.length - 1) * doc.getFontSize()
            this.layoutY += blockHeight
        }
        this.layoutY += 5
        if (this.layoutY > this.yPos) {
            this.yPos = this.layoutY
        }
    }

    setTextType(content: IContent, maxWidth: number) {
        this.setFontStyle(content.fontFamily, content.style, content.fontWeight)
        switch (content.type) {
            case 'h1': {
                this._doc.setFont(FONT_FAMILY, FONT_STYLE, 'bold')
                this._doc.setFontSize(FONT_SIZES.h1)
                this.layoutY += FONT_SIZES.h1 / 2
                break;
            }
            case 'body2': {
                this._doc.setFontSize(FONT_SIZES.body2)
                this.layoutY += FONT_SIZES.body2 / 2
                break;
            }
        }
        this.renderText(content.content, maxWidth)
        if (content.marginBottom) {
            this.layoutY += content.marginBottom
        }
    }

    setFontStyle(family = FONT_FAMILY, style = FONT_STYLE, weight = FONT_WEIGHT) {
        this._doc.setFont(family, style, weight)
        this._doc.setFontSize(FONT_SIZES.normal)
    }

    render(contents: IContent[], maxWidth: number, x: number, y: number) {
        this.layoutX = x
        this.layoutY = y

        contents.forEach(content => {
            this.setTextType(content, maxWidth)
        })
    }


    layout({ layout, contents }: ITemplate) {
        const currentX = this.xPos
        const currentY = this.yPos
        switch (layout) {
            case '2/1': {
                this.render(contents[0], 320, 10, currentY)
                this.render(contents[1], 110, 320, currentY)
            }
            case 'full': {
                this.render(contents[0], 430, 10, currentY)

            }
        }

    }

    generate() {
        this.template.forEach(content => {
            this.layout(content)
        })
    }

    downloadResume() {
        this.generate()
        this._doc.save('a4.pdf')
    }
}