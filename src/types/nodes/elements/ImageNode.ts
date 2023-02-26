import {Node} from "@/types/nodes/Node";
import {Position} from "@/types/css/Position";
import {ImageElement} from "@/types/nodes/elements/ImageElement";
import {Pixel} from "@/types/css/Properties";

export type ImageNodeCss = {
    height?: Pixel;
    width?: Pixel;
    borderRadius?: Pixel;
}

const defaultCss: ImageNodeCss = {
    width: 100,
    height: 100,
    borderRadius: 0
}

export class ImageNode extends Node<ImageNodeCss> {
    src: string;
    component = ImageElement

    constructor(position: Position = {
        x_pos: 0,
        y_pos: 0,
        rotation: 0
    }, css: ImageNodeCss = defaultCss, src: string = "/image_placeholder.png") {
        super(position, {...defaultCss, ...css});
        this.src = src;
        Object.setPrototypeOf(this, ImageNode.prototype);
    }

    copy(newPosition?: Position): ImageNode {
        return new ImageNode(newPosition || this.position, this.css, this.src);
    }

    static build(): ImageNode {
        return new ImageNode();
    }
}