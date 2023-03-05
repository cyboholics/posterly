import {Node} from "@/nodes/types/Node";
import {Position} from "@/nodes/types/Position";
import {ImageElement} from "@/nodes/components/base/ImageElement";
import {Pixel} from "@/nodes/types/Properties";
import {ImageCssSidebar} from "@/nodes/components/css/ImageCssSidebar";

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
    cssSideBar = ImageCssSidebar

    toJSON(): Object {
        return {
            id: this.id,
            position: this.position,
            css: this.css,
            type: "ImageNode",
            src: this.src
        }
    }

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

    equals(other: Node<any>): boolean {
        if(!(other instanceof ImageNode)) return false;
        return this.id === other.id &&
            this.position.x_pos === other.position.x_pos &&
            this.position.y_pos === other.position.y_pos &&
            this.position.rotation === other.position.rotation &&
            this.css.height === other.css.height &&
            this.css.width === other.css.width &&
            this.css.borderRadius === other.css.borderRadius &&
            this.src === other.src
    }
}