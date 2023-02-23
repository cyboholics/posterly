import {BaseNode} from "@/types/nodes/base/BaseNode";
import {DecorationType, FontType, TextNodeCssType} from "@/types/css/base/TextNodeCss";

export class TextNode extends BaseNode{
    css: TextNodeCssType;
    text: string;
    constructor(text: string, color: string, decoration: DecorationType[], font: FontType, size: number, hyperlink: string | undefined) {
        super("text");
        this.text = text
        this.css = {color, decoration, font, size, hyperlink};
    }
}