import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {FlexboxAlignsType} from "@/types/nodes/containers/ContainerNode";

export class HStackNode extends ContainerNode{
    constructor(justify_content: FlexboxAlignsType = "space-between", align_items: FlexboxAlignsType = "center") {
        super("h_stack", justify_content, align_items, "row");
    }
}