import {Node} from "@/types/nodes/Node";
import {ImageNodeCssType} from "@/types/css/elements/ImageNodeCss";
import {Position} from "@/types/css/elements/Position";

export class ImageNode extends Node{
    css: ImageNodeCssType
    src: string;
    constructor(position: Position = {x_pos:0, y_pos:0}, src: string, height: number | "match_parent", width: number | "match_parent", border_radius: number) {
        super(position);
        this.src = src;
        this.css = {height, width, border_radius}
    }
}