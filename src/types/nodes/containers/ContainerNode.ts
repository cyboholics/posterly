import {Node} from "@/types/nodes/Node"

type flexbox_aligns = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"

export interface ContainerNode extends Node{
    child_nodes: Node[];
    type: "h_stack" | "v_stack";
    justify_content: flexbox_aligns;
    align_items: flexbox_aligns;
    flex_direction: "row" | "column"
}