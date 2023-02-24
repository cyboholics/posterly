import {Node} from "@/types/nodes/Node";
import {BoxNodeCssType} from "@/types/css/elements/BoxNodeCss";
import {Position} from "@/types/css/elements/Position";

export class BoxNode extends Node{
    css: BoxNodeCssType;
    constructor(position: Position = {x_pos:0, y_pos:0}, height: number | "match_parent", width: number | "match_parent", background_color: string, border_radius: number) {
        super(position);
        this.position = position;
        this.css = {height, width, background_color, border_radius}
    }
}