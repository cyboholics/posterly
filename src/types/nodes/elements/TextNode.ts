import {Node} from "@/types/nodes/Node";
import {DecorationType, FontType, TextNodeCssType} from "@/types/css/elements/TextNodeCss";
import {Position} from "@/types/css/elements/Position";

export class TextNode extends Node{
    css: TextNodeCssType;
    text: string;
    constructor(position: Position = {x_pos:0, y_pos:0}, text: string, color: string, decoration: DecorationType[], font: FontType, size: number, hyperlink: string | undefined) {
        super(position);
        this.text = text;
        this.css = {color, decoration, font, size, hyperlink};
    }
}