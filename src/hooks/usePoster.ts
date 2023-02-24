import {useContext} from "react";
import {PosterContext} from "@/providers/PosterProvider";
import {Node} from "@/types/nodes/Node";
import {ContainerNode} from "@/types/nodes/containers/ContainerNode";
import {VStackNode} from "@/types/nodes/containers/VStackNode";
import {ContainerNodeCssType} from "@/types/css/container/ContainerNodeCSS";
import {useSnackbar} from "@/hooks/useSnackbar";

export const usePoster = () => {
    const {poster, setPoster} = useContext(PosterContext);
    const {showErrorMessage} = useSnackbar();
    const getNodeById = (id: string) => {

    }
    const insertChildNode = (id: string, node: Node, index?: number) => {

    }
    const deleteNode = (id: string) => {

    }
    const updateNode = (id: string, props:any) => {

    }
    const throwError = (message: string, severity: "error" | "warning" | "info" = "error") => {
        showErrorMessage(message);
    }
    return {getNodeById, insertChildNode, updateNode, deleteNode}
}