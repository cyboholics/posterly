import {Node} from "@/nodes/types/Node";
import {Position} from "@/nodes/types/Position";
import {TextElement} from "@/nodes/components/base/TextElement";
import {Color, Pixel, TextDecoration, TextFont} from "@/nodes/types/Properties";
import {TextCssSidebar} from "@/nodes/components/css/TextCssSidebar";

export type TextNodeCss = {
    color?: Color;
    decoration?: TextDecoration;
    font?: TextFont;
    size?: Pixel;
}

const defaultCss: TextNodeCss = {
    color: "black",
    decoration: [],
    font: "Helvetica",
    size: 12
}

export class TextNode extends Node<TextNodeCss> {
    text: string;
    hyperlink?: string;
    component = TextElement
    cssSideBar = TextCssSidebar

    constructor(position: Position = {
        x_pos: 0,
        y_pos: 0,
        rotation: 0
    }, css: TextNodeCss = defaultCss, text: string = "Hello World", hyperlink?: string) {
        super(position, {...defaultCss, ...css});
        this.text = text;
        this.hyperlink = hyperlink
        Object.setPrototypeOf(this, TextNode.prototype);
    }

    copy(newPosition?: Position): TextNode {
        return new TextNode(newPosition || this.position, this.css, this.text, this.hyperlink);
    }

    static build(): TextNode {
        return new TextNode();
    }
}