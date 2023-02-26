import {usePoster} from "@/hooks/usePoster";
import {BaseElement} from "@/components/elements/BaseElement";
import {TextNode} from "@/types/nodes/elements/TextNode";
import {useRef} from "react";

export const TextElement = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster();
    const node = getNodeById(id) as TextNode;
    const paragraphElement = useRef<HTMLParagraphElement>(null);
    return (
        <BaseElement id={id}>
            <p ref={paragraphElement} style={{
                color: node.css.color || "black",
                fontSize: `${node.css.size || 16}px`,
                textDecoration: node.css.decoration?.join(" ") || "none",
                fontFamily: node.css.font || "sans-serif"
            }}
               onDoubleClick={() => {
                   if (!paragraphElement?.current) return;
                   paragraphElement.current.contentEditable = "true";
                   paragraphElement.current.focus();
               }}
               onBlur={() => {
                   if (!paragraphElement?.current) return;
                   paragraphElement.current.contentEditable = "false";
                   node.text = paragraphElement.current.innerText;
                   reRenderState();
               }}
            >
                {node.text || "Hello world"}
            </p>
        </BaseElement>
    )
}