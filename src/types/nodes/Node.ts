import crypto from "crypto";
import {Position} from "@/types/css/Position";

export class Node<T> {
    id: string = crypto.randomBytes(32).toString("hex");
    position: Position;
    css: T;
    constructor(position: Position, css: T) {
        this.position = position;
        this.css = css;
    }
}