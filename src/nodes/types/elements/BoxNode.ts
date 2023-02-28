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
}