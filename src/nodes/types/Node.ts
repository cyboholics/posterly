import crypto from "crypto";
import {Position} from "@/nodes/types/Position";

export abstract class Node<T> {
    id: string = crypto.randomBytes(32).toString("hex");
    position: Position;
    css: T;
    abstract component: ({id}: { id: string }) => JSX.Element
    abstract cssSideBar: ({id}: { id: string }) => JSX.Element

    protected constructor(position: Position, css: T) {
        this.position = position;
        this.css = css;
        Object.setPrototypeOf(this, Node.prototype);
    }

    abstract copy(newPosition?: Position): Node<T>

    static build(): any {
        return null;
    }
}