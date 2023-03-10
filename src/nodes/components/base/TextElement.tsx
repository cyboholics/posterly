import {useRef} from "react";
import {usePoster} from "@/hooks/usePoster";
import {TextNode} from "@/nodes/types/elements/TextNode";
import {BaseElement} from "@/components/base/BaseElement";

export const TextElement = ({id}: { id: string }) => {
    const {getNodeById, reRenderState, unselectNode} = usePoster();
    const node = getNodeById(id) as TextNode;
    const paragraphElement = useRef<HTMLParagraphElement>(null);
    return (
        <BaseElement id={id}>
            <span contentEditable={false}>
            <p ref={paragraphElement} style={{
                color: node.css.color || "black",
                fontSize: `${node.css.size || 16}px`,
                textDecoration: node.css.decoration?.join(" ") || "none",
                fontFamily: node.css.font || "sans-serif",
                whiteSpace: "pre-line",
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
               onKeyDown={(event) => {
                   event.stopPropagation();
                   if (event.key === "Enter") {
                       event.preventDefault();
                       paragraphElement.current?.blur();
                   }
               }}
            >
                {node.text || "Hello world"}
            </p>
                </span>
        </BaseElement>
    )
}