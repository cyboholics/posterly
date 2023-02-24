import {Node} from "@/types/nodes/Node";
import {BoxNodeCss} from "@/types/css/elements/BoxNodeCss";
import {Position} from "@/types/css/elements/Position";

export class BoxNode extends Node<BoxNodeCss>{
    constructor(position: Position = {x_pos:0, y_pos:0}, css: BoxNodeCss =  new BoxNodeCss()) {
        super(position, css);
    }
}