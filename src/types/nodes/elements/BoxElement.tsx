import {usePoster} from "@/hooks/usePoster";
import {BoxNode} from "@/types/nodes/elements/BoxNode";
import {BaseElement} from "@/components/base/BaseElement";

export const BoxElement = ({id}: { id: string }) => {
    const {getNodeById} = usePoster();
    const node = getNodeById(id) as BoxNode;
    return (
        <BaseElement id={id}>
            <div style={{
                width: `${node.css.width || 100}px`,
                height: `${node.css.height || 100}px`,
                backgroundColor: node.css.background_color || "blue",
                borderRadius: `${node.css.borderRadius || 0}px`,
            }}/>
        </BaseElement>
    )
}