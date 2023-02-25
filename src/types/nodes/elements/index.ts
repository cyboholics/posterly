import {BoxNode} from "@/types/nodes/elements/BoxNode";
import {ImageNode} from "@/types/nodes/elements/ImageNode";
import {TextNode} from "@/types/nodes/elements/TextNode";

export const elements = [{
        type: BoxNode,
        title: "Box or Filler",
        description: "A simple box to represent colors."
    },
    {
        type: ImageNode,
        title: "Image",
        description: "Place Images in all shapes and sizes"
    },
    {
        type: TextNode,
        title: "TextBox",
        description: "Place you text here."
    }]