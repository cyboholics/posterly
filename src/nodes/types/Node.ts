import crypto from "crypto";
import {Position} from "@/nodes/types/Position";

export abstract class Node<T> {
    id: string;
    position: Position;
    css: T;
    abstract component: ({id}: { id: string }) => JSX.Element
    abstract cssSideBar: ({id}: { id: string }) => JSX.Element
    abstract toJSON(): Object

    abstract equals(other: Node<T>): boolean

    protected constructor(position: Position, css: T) {
        this.position = position;
        this.css = css;
        this.id = crypto.randomBytes(16).toString("hex");
        Object.setPrototypeOf(this, Node.prototype);
    }

    abstract copy(newPosition?: Position): Node<T>

    static build(): any {
        return null;
    }

    static fromJson(json: any): Node<any> | null {
        return null;
    }
}
