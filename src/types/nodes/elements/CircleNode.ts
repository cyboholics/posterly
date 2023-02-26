import {Node} from "@/types/nodes/Node";
import {Position} from "@/types/css/Position";
import {CircleNodeCss} from "@/types/css/elements/CIrcleCss";
import {CircleElement} from "@/components/elements/CircleElement";
import {ReactElement} from "react";

const defaultCss: CircleNodeCss = {
    background_color: "blue",
    radius: 100
}

export class CircleNode extends Node<CircleNodeCss>{
    constructor(position: Position = {x_pos:0, y_pos:0}, css: CircleNodeCss = defaultCss) {
        super(position, {...defaultCss, ...css});
        Object.setPrototypeOf(this, CircleNode.prototype);
    }
    static build(): CircleNode {
        return new CircleNode()
    }

    generateComponent(): ReactElement {
        return CircleElement({
            id: this.id
        })
    }
}