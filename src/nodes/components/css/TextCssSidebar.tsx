import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {Color, decorations, fonts} from "@/nodes/types/Properties";
import {TextNode} from "@/nodes/types/elements/TextNode";
import {CssSideBarSelect} from "@/components/base/CssSideBarSelect";

export const TextCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as TextNode
    return (
        <>
            <CssSideBarInput defaultValue={node.css.size} label={"size"} type={"number"} onBlur={(e) => {
                node.css.size = parseInt(e.target.value)
                reRenderState()
            }}/>
            <CssSideBarInput defaultValue={node.css.color} label={"color"} type={"color"} onBlur={(e) => {
                node.css.color = e.target.value as Color
                reRenderState()
            }}/>
            <CssSideBarInput defaultValue={node.text} label={"text"} type={"text"} onBlur={(e) => {
                node.text = e.target.value
                reRenderState()
            }}/>
            <CssSideBarSelect defaultValue={node.css.font || ""} multiple={false} options={fonts} label={"font"} onChange={(e)=>{
                node.css.font = e.target.value as string
                reRenderState()
            }} />
            <CssSideBarSelect defaultValue={node.css.decoration || []}  multiple={true} options={decorations} label={"text decorations"} onChange={(e)=>{
                if (node.css.decoration?.includes(e.target.value as string)) {
                    node.css.decoration = node.css.decoration.filter((decoration) => decoration !== e.target.value)
                } else {
                    node.css.decoration?.push(e.target.value as string)
                }
                reRenderState()
            }} />
        </>
    )
}