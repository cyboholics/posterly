import {BoxNode} from "@/nodes/types/elements/BoxNode";
import {ImageNode} from "@/nodes/types/elements/ImageNode";
import {TextNode} from "@/nodes/types/elements/TextNode";
import {CircleNode} from "@/nodes/types/elements/CircleNode";

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
    },
    {
        title: "Circle",
        description: "Round and round we go.",
        type: CircleNode
    }
]