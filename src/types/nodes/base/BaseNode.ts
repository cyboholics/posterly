import { Node } from "@/types/nodes/Node";

export class BaseNode extends Node{
    constructor(type: "text" | "image" | "box") {
        super(type);
    }
}