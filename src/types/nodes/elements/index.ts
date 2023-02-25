import {BoxNode} from "@/types/nodes/elements/BoxNode";
import {ImageNode} from "@/types/nodes/elements/ImageNode";
import {TextNode} from "@/types/nodes/elements/TextNode";
import {Node} from "@/types/nodes/Node";

export const elements = [{
        title: "Box or Filler",
        description: "A simple box to represent colors.",
        type: BoxNode
    },
    {
        title: "Image",
        description: "Place Images in all shapes and sizes",
        type: ImageNode
    },
    {
        title: "TextBox",
        description: "Place you text here.",
        type: TextNode
    }]