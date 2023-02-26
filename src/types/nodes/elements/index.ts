import {BoxNode} from "@/types/nodes/elements/BoxNode";
import {ImageNode} from "@/types/nodes/elements/ImageNode";
import {TextNode} from "@/types/nodes/elements/TextNode";
import {CircleNode} from "@/types/nodes/elements/CircleNode";

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