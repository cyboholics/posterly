import {useContext} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import {Node} from "@/types/nodes/Node";
import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {BaseNode} from "@/types/nodes/base/BaseNode";

export const usePoster = () => {
    const {poster, setPoster} = useContext(PosterContext);
    const getNodeById = (id: string) => {
        if(!id) return undefined;
        // BFS
        const queue: Node[] = [poster];
        while(queue.length > 0){
            const node = queue.shift();
            if(node?.id === id) return node;
            if(!(node instanceof ContainerNode)) continue;
            if(node?.child_nodes) queue.push(...node.child_nodes);
        }
        return undefined;
    }
    const insertChildNode = (id: string, node: Node, index?: number) => {
        const parent = getNodeById(id);
        if(!parent || !(parent instanceof ContainerNode)) return throwError("Cannot Insert Child: Parent is Node a Container Node");
        if(!index) parent.child_nodes.push(node);
        else parent.child_nodes.splice(index, 0, node);
        setPoster({...poster});
    }
    const deleteNode = (id: string) => {

    }
    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        //TODO: Implement error handling
        console.log(message);
        return;
    }
    return {getNodeById, insertChildNode};
}