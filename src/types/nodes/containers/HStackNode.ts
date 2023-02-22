import {ContainerNode} from "@/types/nodes/containers/ContainerNode";

export interface HStackNode extends ContainerNode{
    type: "h_stack";
    flex_direction: "row";
}