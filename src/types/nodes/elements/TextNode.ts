import {Node} from "@/types/nodes/Node";
import {TextNodeCss} from "@/types/css/elements/TextNodeCss";
import {Position} from "@/types/css/Position";

export class TextNode extends Node<TextNodeCss>{
    text: string;
    hyperlink?: string;
    constructor(position: Position = {x_pos:0, y_pos:0}, text: string, hyperlink?: string, css: TextNodeCss = {}){
        super(position, css);
        this.text = text;
        this.hyperlink = hyperlink
    }
}