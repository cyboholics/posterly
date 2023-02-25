import {usePoster} from "@/hooks/usePoster";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const BoxElement = ({id}: { id: string }) => {
    const {getNodeById, isSelected, selectNode, updateNode} = usePoster();
    const node = getNodeById(id) as BoxNode;
    const startPosition = {x: 0, y: 0}
    return (
        <div
            draggable={true}
            style={{
            position: "absolute",
            marginTop: `${node.position.y_pos || 0}px`,
            marginLeft: `${node.position.x_pos || 0}px`,
            translate: "-50% -50%",
            width: `${node.css.width || 100}px`,
            height: `${node.css.height || 100}px`,
            backgroundColor: node.css.background_color || "blue",
            border: isSelected(id) ? "2px solid red" : "none",
            cursor: "pointer",
            zIndex: isSelected(id) ? 1 : 0
        }} onClick={() => {
            selectNode(id)
        }}
            onDragStart={(e) => {
                startPosition.x = e.clientX
                startPosition.y = e.clientY
            }}
            onDragEnd={(e) => {
                const x_pos = (node.position.x_pos || 0) + (e.clientX - startPosition.x)
                const y_pos = (node.position.y_pos || 0) + (e.clientY - startPosition.y)
                updateNode(id,node.css , {x_pos, y_pos})
                selectNode(id)
            }}
        />
    )
}