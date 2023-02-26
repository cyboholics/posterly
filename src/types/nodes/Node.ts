import crypto from "crypto";
import {Position} from "@/types/css/Position";

export abstract class Node<T> {
    id: string = crypto.randomBytes(32).toString("hex");
    position: Position;
    css: T;
    static build(): any {
        return null;
    }
    protected constructor(position: Position, css: T) {
        this.position = position;
        this.css = css;
        Object.setPrototypeOf(this, Node.prototype);
    }
}