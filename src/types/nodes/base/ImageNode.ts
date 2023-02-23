import {BaseNode} from "@/types/nodes/base/BaseNode";
import {ImageNodeCssType} from "@/types/css/base/ImageNodeCss";

export class ImageNode extends BaseNode{
    css: ImageNodeCssType
    src: string;
    constructor(src: string, height: number | "match_parent", width: number | "match_parent", border_radius: number) {
        super("image");
        this.src = src;
        this.css = {height, width, border_radius}
    }
}