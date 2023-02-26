import {usePoster} from "@/hooks/usePoster";
import {ReactElement} from "react";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const BaseElement = ({id, children}: { id: string, children: ReactElement }) => {
    const {getNodeById, isSelected, selectNode, updateNode, isOutOfRange} = usePoster();
    const node = getNodeById(id);
    const startPosition = {x: 0, y: 0}
    if(!node) return null;
    return <div
        className={"draggingIconContainer"}
        draggable={true}
        onClick={()=>selectNode(id)}
        style={{
            position: "absolute",
            translate: "-50% -50%",
            width: "max-content",
            height: "max-content",
            marginTop: `${node?.position.y_pos || 0}px`,
            marginLeft: `${node?.position.x_pos || 0}px`,
            border: isSelected(id) ? "2px solid red" : "none",
            zIndex: isSelected(id) ? 1 : 0
        }}
        onDragStart={(e) => {
            startPosition.x = e.clientX;
            startPosition.y = e.clientY;
        }}
        onDragEnd={(e) => {
            const x_pos = (node?.position.x_pos || 0) + (e.clientX - startPosition.x)
            const y_pos = (node?.position.y_pos || 0) + (e.clientY - startPosition.y)
            selectNode(id)
            if(isOutOfRange(x_pos, y_pos, node)) return;
            updateNode(id, node?.css || {}, {x_pos, y_pos})
        }}
    >
        {children}
    </div>
}