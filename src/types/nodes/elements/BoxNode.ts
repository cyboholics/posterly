import {Node} from "@/types/nodes/Node";
import {BoxNodeCss} from "@/types/css/elements/BoxNodeCss";
import {Position} from "@/types/css/Position";
import {BoxElement} from "@/components/elements/BoxElement";
import {ReactElement} from "react";

const defaultCss: BoxNodeCss = {
    width: 100,
    height: 100,
    background_color: "blue",
    border_radius: 0
}

export class BoxNode extends Node<BoxNodeCss>{
    constructor(position: Position = {x_pos:0, y_pos:0}, css: BoxNodeCss = defaultCss) {
        super(position, {...defaultCss, ...css});
        Object.setPrototypeOf(this, BoxNode.prototype);
    }
    static build(): BoxNode {
        return new BoxNode();
    }
    generateComponent(): ReactElement {
        return BoxElement({
            id: this.id
        })
    }
}