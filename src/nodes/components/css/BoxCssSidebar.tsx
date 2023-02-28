import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {BoxNode} from "@/nodes/types/elements/BoxNode";
import {Color} from "@/nodes/types/Properties";

export const BoxCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as BoxNode
    return (
        <>
            <CssSideBarInput value={node.css.height} type={"number"} label={"height"} onChange={(e) => {
                node.css.height = parseInt(e.target.value)
                reRenderState()
            }}/>
            <CssSideBarInput value={node.css.width} type={"number"} label={"width"} onChange={(e) => {
                    node.css.width = parseInt(e.target.value)
                    reRenderState()
                }}/>
            <CssSideBarInput value={node.css.backgroundColor} type={"color"} label={"background color"} onChange={(e) => {
                node.css.backgroundColor = e.target.value as Color
                reRenderState()
            }}/>
            <CssSideBarInput value={node.css.borderRadius} label={"border radius"} type={"number"} onChange={(e) => {
                node.css.borderRadius = parseInt(e.target.value)
                reRenderState()
            }}/>
        </>
    )
}