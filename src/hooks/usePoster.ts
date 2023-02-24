import {useContext} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import {Node} from "@/types/nodes/Node";
import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {VStackNode} from "@/types/nodes/containers/VStackNode";

export const usePoster = () => {
    const {poster, setPoster} = useContext(PosterContext);
    const getNodeById = (id: string) => {
        if (!id) return undefined;
        // BFS
        const queue: Node[] = [poster];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node?.id === id) return node;
            if (!(node instanceof ContainerNode)) continue;
            queue.push(...node.child_nodes);
        }
        throwError("No Node found with id: " + id, "warning")
        return undefined;
    }
    const insertChildNode = (id: string, node: Node, index?: number) => {
        const parent = getNodeById(id);
        if (!parent || !(parent instanceof ContainerNode)) return throwError("Cannot Insert Child: Parent is Node a Container Node");
        if (!index) parent.child_nodes.push(node);
        else parent.child_nodes.splice(index, 0, node);
        setPoster({...poster});
    }
    const deleteNode = (id: string) => {
        if (poster.id === id) {
            setPoster(new VStackNode());
            return;
        }
        const queue: Node[] = [poster];
        let found = false;
        while (queue.length > 0) {
            const node = queue.shift();
            if (!(node instanceof ContainerNode)) continue;
            node.child_nodes.forEach((child_node, index) => {
                if (child_node.id === id) {
                    node.child_nodes.splice(index, 1);
                    found = true;
                    return;
                }
            })
            queue.push(...node.child_nodes)
            if (found) break;
        }
        if (!found) throwError("No Node found to delete", "warning");
    }
    const updateNode = (id: string, node: Node) => {
        //TODO: Implement updateNode
    }
    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        //TODO: Implement error handling
        console.log(message);
        return;
    }
    return {getNodeById, insertChildNode};
}