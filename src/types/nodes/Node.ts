import {randomUUID} from "crypto";
import {Position} from "@/types/css/elements/Position";

export class Node<T> {
    id: string = randomUUID();
    position: Position;
    css: T;
    constructor(position: Position, css: T) {
        this.position = position;
        this.css = css;
    }
}