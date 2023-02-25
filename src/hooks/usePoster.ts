import {useContext} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import {Node} from "@/types/nodes/Node";
import {useSnackbar} from "@/hooks/useSnackbar";
import {Position} from "@/types/css/Position";

export const usePoster = () => {
    const {poster, setPoster} = useContext(PosterContext);
    const {showErrorMessage} = useSnackbar();
    const getAllNodes = () => {
        return poster;
    }
    const getNodeById = (id: string) => {
        return poster.find(node => node.id === id);
    }
    const insertElement = (element: Node<any>, index?: number) => {
        if (index) {
            poster.splice(index, 0, element);
        } else {
            poster.push(element);
        }
        setPoster([...poster]);
    }
    const deleteNode = (id: string) => {
        const index = poster.findIndex(node => node.id === id);
        if (index === -1) {
            throwError("Node not found");
            return;
        }
        poster.splice(index, 1);
        setPoster([...poster]);
    }
    const updateNode = (id: string, cssProps: any = null, position: Position = {} ) => {
        if (!cssProps && !position) {
            throwError("No properties to update");
            return;
        }
        const index = poster.findIndex(node => node.id === id);
        if (index === -1) {
            throwError("Node not found");
            return;
        }
        const node = poster[index];
        if (cssProps) {
            if ((typeof node.css) !== (typeof cssProps)) {
                throwError("CSS properties must be of the same type");
                return;
            }
            node.css = {...node.css, ...cssProps};
        }
        if (position) {
            node.position = {...node.position, ...position};
        }
        setPoster([...poster]);
    }
    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        showErrorMessage(message);
    }
    return {getAllNodes,getNodeById, insertElement, updateNode, deleteNode}
}