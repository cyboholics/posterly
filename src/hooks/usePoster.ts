import {useContext} from "react";
import {PosterContext, posterSizeFromName} from "@/providers/PosterProvider";
import {Node} from "@/nodes/types/Node";
import {useSnackbar} from "@/hooks/useSnackbar";
import {Position} from "@/nodes/types/Position";

export const usePoster = () => {
    const {poster, setPoster, selectedNodeId, setSelectedNodeId, posterSize, setPosterSize} = useContext(PosterContext);
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

    const deleteSelectedNode = () => {
        if (selectedNodeId) {
            deleteNode(selectedNodeId);
        }
    }
    const updateNode = (id: string, cssProps: any = null, position: Position = {}) => {
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
    const reRenderState = () => {
        setPoster([...poster])
    }

    const isSelected = (id: string) => {
        return selectedNodeId === id;
    }
    const selectNode = (id: string) => {
        setSelectedNodeId(id);
    }
    const getSelectedNode = () => {
        if (!selectedNodeId) return null
        return getNodeById(selectedNodeId);
    }
    const getSelectedNodeId = () => {
        return selectedNodeId
    }
    const unselectNode = () => {
        setSelectedNodeId(null);
    }

    const getPosterSize = () => {
        return posterSize;
    }

    const isOutOfRange = (x: number, y: number, node: Node<any>): boolean => {
        let x_limit_extend = (node?.css.width || node?.css.radius || 100);
        let y_limit_extend = (node?.css.height || node?.css.radius || 100);
        x_limit_extend = x_limit_extend >> 1;
        y_limit_extend = y_limit_extend >> 1;

        if (x < -x_limit_extend) return true
        if (y < -y_limit_extend) return true

        const {width, height} = posterSizeFromName[posterSize];

        if (x > width + x_limit_extend) return true
        if (y > height + y_limit_extend) return true

        return false
    }

    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        showErrorMessage(message);
    }
    return {
        getAllNodes,
        getNodeById,
        insertElement,
        updateNode,
        deleteNode,
        deleteSelectedNode,
        isSelected,
        getPosterSize,
        setPosterSize,
        selectNode,
        unselectNode,
        getSelectedNode,
        getSelectedNodeId,
        reRenderState,
        isOutOfRange
    }
}