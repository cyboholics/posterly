import crypto from "crypto";

export class Node {
    id: string;
    type: "h_stack" | "v_stack" | "text" | "image" | "box";
    constructor(type: "h_stack" | "v_stack" | "text" | "image" | "box") {
        this.id = crypto.randomBytes(16).toString("hex");
        this.type = type;
    }
}