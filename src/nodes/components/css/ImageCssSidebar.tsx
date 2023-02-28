import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {ImageNode} from "@/nodes/types/elements/ImageNode";

export const ImageCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as ImageNode
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
            <CssSideBarInput value={node.css.borderRadius} label={"border radius"} type={"number"} onChange={(e) => {
                node.css.borderRadius = parseInt(e.target.value)
            }}/>
        </>
    )
}