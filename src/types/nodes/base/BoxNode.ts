import {BaseNode} from "@/types/nodes/base/BaseNode";

export interface BoxNode extends BaseNode{
    height: number;
    width: number;
    background_color: string;
    border_radius: number;
    type: "box"
}