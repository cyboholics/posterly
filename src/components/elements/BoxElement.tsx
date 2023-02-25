import {usePoster} from "@/hooks/usePoster";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const BoxElement = ({id}: { id: string }) => {
    const {getNodeById} = usePoster();
    const node = getNodeById(id) as BoxNode;
    return (
        <div style={{
            position: "absolute",
            marginTop: `${node.position.y_pos || 0}px`,
            marginLeft: `${node.position.x_pos || 0}px`,
            translate: "-50% -50%",
            width: `${node.css.width || 100}px`,
            height: `${node.css.height || 100}px`,
            backgroundColor: "blue",
        }} />
    )
}