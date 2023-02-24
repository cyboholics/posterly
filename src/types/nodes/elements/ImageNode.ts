import {Node} from "@/types/nodes/Node";
import {ImageNodeCss} from "@/types/css/elements/ImageNodeCss";
import {Position} from "@/types/css/elements/Position";

export class ImageNode extends Node<ImageNodeCss>{
    src: string;
    constructor(position: Position = {x_pos:0, y_pos:0}, src: string, css: ImageNodeCss){
        super(position, css);
        this.src = src;
    }
}