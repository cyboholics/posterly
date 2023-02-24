import {FlexboxAlignsType} from "@/types/nodes/containers/ContainerNode";

export type ContainerNodeCssType = {
    justify_content: FlexboxAlignsType;
    align_items: FlexboxAlignsType;
    flex_direction: "row" | "column";

}