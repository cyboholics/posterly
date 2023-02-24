import {randomUUID} from "crypto";
import {Position} from "@/types/css/elements/Position";

export class Node {
    id: string = randomUUID();
    position: Position;
    constructor(position: Position) {
        this.position = position;
    }
}