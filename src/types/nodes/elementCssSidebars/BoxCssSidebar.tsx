import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {BoxNode} from "@/types/nodes/elementNodes/BoxNode";
import {Color} from "@/types/css/Properties";

export const BoxCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as BoxNode
    return (
        <>
            <CssSideBarInput defaultValue={node.css.height} type={"number"} label={"height"} onBlur={(e) => {
                node.css.height = parseInt(e.target.value)
                reRenderState()
            }}/>
            <CssSideBarInput defaultValue={node.css.width} type={"number"} label={"width"} onBlur={(e) => {
                    node.css.width = parseInt(e.target.value)
                    reRenderState()
                }}/>
            <CssSideBarInput defaultValue={node.css.backgroundColor} type={"color"} label={"background color"} onBlur={(e) => {
                node.css.backgroundColor = e.target.value as Color
                reRenderState()
            }}/>
            <CssSideBarInput defaultValue={node.css.borderRadius} label={"border radius"} type={"number"} onBlur={(e) => {
                node.css.borderRadius = parseInt(e.target.value)
                reRenderState()
            }}/>
        </>
    )
}