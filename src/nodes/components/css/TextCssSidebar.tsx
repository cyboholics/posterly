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
            <CssSideBarInput value={node.css.size} label={"size"} type={"number"} onChange={(e) => {
                node.css.size = parseInt(e.target.value)
                reRenderState()
            }}/>
            <CssSideBarInput value={node.css.color} label={"color"} type={"color"} onChange={(e) => {
                node.css.color = e.target.value as Color
                reRenderState()
            }}/>
            <CssSideBarInput value={node.text} label={"text"} type={"text"} onChange={(e) => {
                node.text = e.target.value
                reRenderState()
            }}/>
            <CssSideBarSelect value={node.css.font || ""} multiple={false} options={fonts} label={"font"} onChange={(e)=>{
                node.css.font = e.target.value as string
                reRenderState()
            }} />
            <CssSideBarSelect value={node.css.decoration || []}  multiple={true} options={decorations} label={"text decorations"} onChange={(e)=>{
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