import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {FlexboxAlignsType} from "@/types/nodes/containers/ContainerNode";

export class VStackNode extends ContainerNode{
    constructor(justify_content: FlexboxAlignsType = "flex-start", align_items: FlexboxAlignsType = "flex-start") {
        super("v_stack", justify_content, align_items, "column");
    }
}