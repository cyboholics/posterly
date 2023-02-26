import {usePoster} from "@/hooks/usePoster";
import {CircleNode} from "@/types/nodes/elements/CircleNode";
import {BaseElement} from "@/components/elements/BaseElement";

export const CircleElement = ({id}: { id: string }) => {
    const {getNodeById} = usePoster();
    const node = getNodeById(id) as CircleNode;
    return (
        <BaseElement id={id}>
            <div style={{
                width: `${node.css.radius || 100}px`,
                height: `${node.css.radius || 100}px`,
                backgroundColor: node.css.background_color || "blue",
                borderRadius: `50%`,
            }} />
        </BaseElement>
    )
}