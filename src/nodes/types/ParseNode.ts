import {BoxNode} from "@/nodes/types/elements/BoxNode";
import {CircleNode} from "@/nodes/types/elements/CircleNode";
import {TextNode} from "@/nodes/types/elements/TextNode";
import {ImageNode} from "@/nodes/types/elements/ImageNode";
import {Node} from "@/nodes/types/Node";

export const parseNode = (json: any): Node<any> | null => {
    let node = null;
    if (json.type === "BoxNode") {
        node = new BoxNode(json.position, json.css)
    } else if (json.type === "CircleNode") {
        node = new CircleNode(json.position, json.css)
    } else if (json.type === "TextNode") {
        node = new TextNode(json.position, json.css, json.text, json.hyperlink)
    } else if (json.type === "ImageNode") {
        node = new ImageNode(json.position, json.css, json.src)
    }
    if(node !== null) {
        node.id = json.id;
    }
    return node;
}

export const parseNodeList = (json: any[]): Node<any>[] => {
    return json.map(parseNode).filter((node): node is Node<any> => node !== null)
}