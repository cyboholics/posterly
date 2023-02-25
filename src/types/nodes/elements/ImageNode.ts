import {Node} from "@/types/nodes/Node";
import {ImageNodeCss} from "@/types/css/elements/ImageNodeCss";
import {Position} from "@/types/css/Position";

const defaultCss: ImageNodeCss = {
    width: 100,
    height: 100,
    border_radius: 0
}

export class ImageNode extends Node<ImageNodeCss>{
    src: string;
    constructor(position: Position = {x_pos:0, y_pos:0}, src: string = "/next.svg", css: ImageNodeCss = defaultCss){
        super(position, {...defaultCss, ...css});
        this.src = src;

        Object.setPrototypeOf(this, ImageNode.prototype);
    }

    static build(): ImageNode {
        return new ImageNode();
    }
}