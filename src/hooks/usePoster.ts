import {useContext} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import {Node} from "@/types/nodes/Node";
import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {ContainerNodeCssType} from "@/types/css/container/ContainerNodeCSS";
import {useSnackbar} from "@/hooks/useSnackbar";

export const usePoster = () => {
    const {poster, setPoster} = useContext(PosterContext);
    const {showErrorMessage} = useSnackbar();
    const getNodeById = (id: string) => {
        if (!id) return undefined;
        // BFS
        const queue: Node[] = [poster];
        while (queue.length > 0) {
            const node = queue.shift();
            if (node?.id === id) return node;
            if (!(node instanceof ContainerNode)) continue;
            if (node?.child_nodes) queue.push(...node.child_nodes);
        }
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
        if (!id) return undefined;
        // BFS
        const queue: Node[] = [poster];
        while (queue.length > 0) {
            const node = queue.shift();
            if (!(node instanceof ContainerNode)) continue;
            node.child_nodes = node.child_nodes.filter(child => child.id !== id);
            if (node?.child_nodes) queue.push(...node.child_nodes);
        }
        setPoster({...poster});
    }
    const updateNode = (id: string, props:any) => {
        const node = getNodeById(id);
        if (!node) return throwError("Cannot Update Node: Node Not Found");
        if (node instanceof ContainerNode) {
            props = props as ContainerNodeCssType;
            node.css = {...node.css, ...props};
        }
        setPoster({...poster});
    }
    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        showErrorMessage(message);
    }
    return {getNodeById, insertChildNode, updateNode, deleteNode}
}