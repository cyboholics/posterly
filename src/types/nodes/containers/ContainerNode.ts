import {Node} from "@/types/nodes/Node"

export const flexbox_aligns = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] as const;
export type FlexboxAlignsType = typeof flexbox_aligns[number];

export class ContainerNode extends Node{
    child_nodes: Node[] = [];
    justify_content: FlexboxAlignsType;
    align_items: FlexboxAlignsType;
    flex_direction: "row" | "column";
    constructor(type: "h_stack" | "v_stack", justify_content: FlexboxAlignsType, align_items: FlexboxAlignsType, flex_direction: "row" | "column") {
        super(type);
        this.justify_content = justify_content;
        this.align_items = align_items;
        this.flex_direction = flex_direction;
    }
}