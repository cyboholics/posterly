import {usePoster} from "@/hooks/usePoster";
import {ReactElement} from "react"

export const BaseElement = ({id, children}: { id: string, children: ReactElement }) => {
    const {getNodeById, isSelected, selectNode, updateNode, isOutOfRange, insertElement} = usePoster();
    const node = getNodeById(id);
    const startPosition = {x: 0, y: 0}
    if (!node) return null;
    let isDragWithCtrl = false;
    return <div
        draggable={true}
        onClick={(e) =>{
            e.stopPropagation();
            selectNode(id)
        }}
        style={{
            position: "absolute",
            translate: "-50% -50%",
            width: node?.css.width ? `${node.css.width}px` : "max-content",
            height: node?.css.height ? `${node.css.height}px` : "max-content",
            marginTop: `${node?.position.y_pos || 0}px`,
            marginLeft: `${node?.position.x_pos || 0}px`,
            border: isSelected(id) ? "2px solid red" : "none",
            zIndex: isSelected(id) ? 1 : 0,
            transform: `rotate(${node.position.rotation || 0}deg)`,
            cursor: "move",
        }}
        onDragStart={(e) => {
            isDragWithCtrl = e.ctrlKey
            startPosition.x = e.clientX;
            startPosition.y = e.clientY;
        }}
        onDragEnd={(e) => {
            const x_pos = (node?.position.x_pos || 0) + (e.clientX - startPosition.x)
            const y_pos = (node?.position.y_pos || 0) + (e.clientY - startPosition.y)
            if (isOutOfRange(x_pos, y_pos, node)) return;
            if (isDragWithCtrl) {
                const newNode = node.copy({x_pos, y_pos})
                insertElement(newNode)
                selectNode(newNode.id)
                return;
            }
            selectNode(id)
            updateNode(id, node?.css || {}, {x_pos, y_pos})
        }}
    >
        {children}
    </div>
}