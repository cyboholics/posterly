import {Node} from "@/types/nodes/Node"
import {ContainerNodeCssType} from "@/types/css/container/ContainerNodeCSS";

export const flexbox_aligns = ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly"] as const;
export type FlexboxAlignsType = typeof flexbox_aligns[number];

export class ContainerNode extends Node{
    child_nodes: Node[] = [];
    css: ContainerNodeCssType;
    constructor(type: "h_stack" | "v_stack", justify_content: FlexboxAlignsType, align_items: FlexboxAlignsType, flex_direction: "row" | "column") {
        super(type);
        this.css = {justify_content, align_items, flex_direction}
    }
}