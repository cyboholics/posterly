import {BaseNode} from "@/types/nodes/base/BaseNode";
import {BoxNodeCssType} from "@/types/css/base/BoxNodeCss";

export class BoxNode extends BaseNode{

    css: BoxNodeCssType
    constructor(height: number | "match_parent", width: number | "match_parent", background_color: string, border_radius: number) {
        super("box");
        this.css = {height, width, background_color, border_radius}
    }
}