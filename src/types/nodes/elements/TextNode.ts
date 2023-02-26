import {Node} from "@/types/nodes/Node";
import {TextNodeCss} from "@/types/css/elements/TextNodeCss";
import {Position} from "@/types/css/Position";
import {TextElement} from "@/components/elements/TextElement";

const defaultCss: TextNodeCss = {
    color: "black",
    decoration: [],
    font: "Helvetica",
    size: 12
}

export class TextNode extends Node<TextNodeCss> {
    text: string;
    hyperlink?: string;
    constructor(position: Position = {x_pos:0, y_pos:0, rotation: 0}, css: TextNodeCss = defaultCss, text: string = "Hello World", hyperlink?: string){
    component = TextElement
        super(position, {...defaultCss, ...css});
        this.text = text;
        this.hyperlink = hyperlink
        Object.setPrototypeOf(this, TextNode.prototype);
    }

    copy(newPosition: Position): TextNode {
        return new TextNode(newPosition || this.position, this.css, this.text, this.hyperlink);
    }

    static build(): TextNode {
        return new TextNode();
    }
}