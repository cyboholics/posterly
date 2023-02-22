import {BaseNode} from "@/types/nodes/base/BaseNode";

export interface ImageNode extends BaseNode{
    src: string;
    height: number | "match_parent";
    width: number | "match_parent";
    border_radius: number;
    type: "image"
}