import {usePoster} from "@/hooks/usePoster";
import {BaseElement} from "@/components/elements/BaseElement";
import {TextNode} from "@/types/nodes/elements/TextNode";

export const TextElement = ({id}: { id: string }) => {
    const {getNodeById} = usePoster();
    const node = getNodeById(id) as TextNode;
    return (
        <BaseElement id={id}>
            <p style={{
                color: node.css.color || "black",
                fontSize: `${node.css.size || 16}px`,
                textDecoration: node.css.decoration?.join(" ") || "none",
                fontFamily: node.css.font || "sans-serif",
            }} >
                {node.text || "Hello world"}
            </p>
        </BaseElement>
    )
}