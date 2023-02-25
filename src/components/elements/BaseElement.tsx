import {usePoster} from "@/hooks/usePoster";
import {ReactElement} from "react";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const BaseElement = ({id, children}: { id: string, children: ReactElement }) => {
    const {getNodeById, isSelected, selectNode, updateNode} = usePoster();
    const node = getNodeById(id) as BoxNode;
    const startPosition = {x: 0, y: 0}
    return <div
        className={"draggingIconContainer"}
        draggable={true}
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
        onClick={() => {
            selectNode(id)
        }}
        onDragStart={(e) => {
            startPosition.x = e.clientX;
            startPosition.y = e.clientY;
        }}
        onDragEnd={(e) => {
            const x_pos = (node?.position.x_pos || 0) + (e.clientX - startPosition.x)
            const y_pos = (node?.position.y_pos || 0) + (e.clientY - startPosition.y)
            selectNode(id)
            let x_limit_extend = (node?.css.width || 100);
            let y_limit_extend = (node?.css.height || 100) ;
            x_limit_extend = x_limit_extend >> 1;
            y_limit_extend = y_limit_extend >> 1;

            if(x_pos < - x_limit_extend) return
            if(y_pos < - y_limit_extend) return
            if(x_pos > 400 + x_limit_extend) return
            if(y_pos > 400 + y_limit_extend) return
            updateNode(id, node?.css || {}, {x_pos, y_pos})
        }}
    >
        {children}
    </div>
}