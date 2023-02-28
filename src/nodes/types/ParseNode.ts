import {BoxNode} from "@/nodes/types/elements/BoxNode";
import {CircleNode} from "@/nodes/types/elements/CircleNode";
import {TextNode} from "@/nodes/types/elements/TextNode";
import {ImageNode} from "@/nodes/types/elements/ImageNode";
import {Node} from "@/nodes/types/Node";

export const parseNode = (json: any): Node<any> | null => {
    if (json.type === "BoxNode") {
        return new BoxNode(json.position, json.css)
    } else if (json.type === "CircleNode") {
        return new CircleNode(json.position, json.css)
    } else if (json.type === "TextNode") {
        return new TextNode(json.position, json.css, json.text, json.hyperlink)
    } else if (json.type === "ImageNode") {
        return new ImageNode(json.position, json.css, json.src)
    }
    return null;
}

export const parseNodeList = (json: any[]): Node<any>[] => {
    return json.map(parseNode).filter((node): node is Node<any> => node !== null)
}