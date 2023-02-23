import {randomUUID} from "crypto";

export class Node {
    id: string = randomUUID();
    type: "h_stack" | "v_stack" | "text" | "image" | "box";
    constructor(type: "h_stack" | "v_stack" | "text" | "image" | "box") {
        this.type = type;
    }
}