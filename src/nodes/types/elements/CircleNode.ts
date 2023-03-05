import {Node} from "@/nodes/types/Node";
import {Position} from "@/nodes/types/Position";
import {CircleElement} from "@/nodes/components/base/CircleElement";
import {Color, Pixel} from "@/nodes/types/Properties";
import {CircleCssSidebar} from "@/nodes/components/css/CircleCssSidebar";

export type CircleNodeCss = {
    radius?: Pixel;
    backgroundColor?: Color;
}

const defaultCss: CircleNodeCss = {
    backgroundColor: "#0000ff",
    radius: 100
}

export class CircleNode extends Node<CircleNodeCss> {
    component = CircleElement
    cssSideBar = CircleCssSidebar

    toJSON(): Object {
        return {
            id: this.id,
            position: this.position,
            css: this.css,
            type: "CircleNode"
        }
    }

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

    equals(other: Node<any>): boolean {
        if(!(other instanceof CircleNode)) return false;
        return this.id === other.id &&
            this.position.x_pos === other.position.x_pos &&
            this.position.y_pos === other.position.y_pos &&
            this.css.radius === other.css.radius &&
            this.css.backgroundColor === other.css.backgroundColor
    }
}