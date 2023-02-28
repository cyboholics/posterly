import {Node} from "@/nodes/types/Node";
import {Position} from "@/nodes/types/Position";
import {BoxElement} from "@/nodes/components/base/BoxElement";
import {Color, Pixel} from "@/nodes/types/Properties";
import {BoxCssSidebar} from "@/nodes/components/css/BoxCssSidebar";

export type BoxNodeCss = {
    height?: Pixel;
    width?: Pixel;
    backgroundColor?: Color;
    borderRadius?: Pixel;
}

const defaultCss: BoxNodeCss = {
    width: 100,
    height: 100,
    backgroundColor: "#0000ff",
    borderRadius: 0
}

export class BoxNode extends Node<BoxNodeCss>{
    component = BoxElement
    cssSideBar = BoxCssSidebar

    toJSON(): Object {
        return {
            id: this.id,
            position: this.position,
            css: this.css,
            type: "BoxNode"
        }
    }
    constructor(position: Position = {x_pos:0, y_pos:0, rotation: 0}, css: BoxNodeCss = defaultCss) {
        super(position, {...defaultCss, ...css});
        Object.setPrototypeOf(this, BoxNode.prototype);
    }

    copy(newPosition?:Position): BoxNode {
        return new BoxNode(newPosition || this.position, this.css);
    }

    static build(): BoxNode {
        return new BoxNode();
    }

    equals(other: Node<any>): boolean {
        if(!(other instanceof BoxNode)) return false;
        return this.id === other.id &&
            this.position.x_pos === other.position.x_pos &&
            this.position.y_pos === other.position.y_pos &&
            this.position.rotation === other.position.rotation &&
            this.css.height === other.css.height &&
            this.css.width === other.css.width &&
            this.css.backgroundColor === other.css.backgroundColor &&
            this.css.borderRadius === other.css.borderRadius
    }
}