import {Node} from "@/types/nodes/Node";
import {Position} from "@/types/css/Position";
import {CircleElement} from "@/types/nodes/elements/CircleElement";
import {Color, Pixel} from "@/types/css/Properties";

export type CircleNodeCss = {
    radius?: Pixel;
    backgroundColor?: Color;
}

const defaultCss: CircleNodeCss = {
    backgroundColor: "blue",
    radius: 100
}

export class CircleNode extends Node<CircleNodeCss> {
    component = CircleElement

    constructor(position: Position = {x_pos: 0, y_pos: 0}, css: CircleNodeCss = defaultCss) {
        super(position, {...defaultCss, ...css});
        Object.setPrototypeOf(this, CircleNode.prototype);
    }

    copy(newPosition?: Position): CircleNode {
        return new CircleNode(newPosition || this.position, this.css);
    }

    static build(): CircleNode {
        return new CircleNode()
    }
}