import {ContainerNode} from "@/types/nodes/containers/ContainerNode";

export interface VStackNode extends ContainerNode{
    type: "v_stack";
    flex_direction: "column";
}