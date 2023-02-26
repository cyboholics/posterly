import {BoxNode} from "@/types/nodes/elementNodes/BoxNode";
import {ImageNode} from "@/types/nodes/elementNodes/ImageNode";
import {TextNode} from "@/types/nodes/elementNodes/TextNode";
import {CircleNode} from "@/types/nodes/elementNodes/CircleNode";

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