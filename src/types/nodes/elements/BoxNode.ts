import {Node} from "@/types/nodes/Node";
import {BoxNodeCss} from "@/types/css/elements/BoxNodeCss";
import {Position} from "@/types/css/Position";
import {BoxElement} from "@/components/elements/BoxElement";

const defaultCss: BoxNodeCss = {
    width: 100,
    height: 100,
    background_color: "blue",
    border_radius: 0
}

export class BoxNode extends Node<BoxNodeCss>{
    constructor(position: Position = {x_pos:0, y_pos:0, rotation: 0}, css: BoxNodeCss = defaultCss) {
    component = BoxElement
        super(position, {...defaultCss, ...css});
        Object.setPrototypeOf(this, BoxNode.prototype);
    }

    copy(newPosition:Position): BoxNode {
        return new BoxNode(newPosition || this.position, this.css);
    }

    static build(): BoxNode {
        return new BoxNode();
    }
}