import {Node} from "@/types/nodes/Node";
import {ImageNodeCss} from "@/types/css/elements/ImageNodeCss";
import {Position} from "@/types/css/Position";
import {ImageElement} from "@/components/elements/ImageElement";

const defaultCss: ImageNodeCss = {
    width: 100,
    height: 100,
    border_radius: 0
}

export class ImageNode extends Node<ImageNodeCss> {
    src: string;
    component = ImageElement
    constructor(position: Position = {x_pos:0, y_pos:0, rotation: 0}, css: ImageNodeCss = defaultCss, src: string = "/image_placeholder.png") {
        super(position, {...defaultCss, ...css});
        this.src = src;
        Object.setPrototypeOf(this, ImageNode.prototype);
    }

    copy(newPosition?:Position): ImageNode {
        return new ImageNode(newPosition || this.position, this.css, this.src);
    }

    static build(): ImageNode {
        return new ImageNode();
    }
}