import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {ImageNode} from "@/types/nodes/elementNodes/ImageNode";

export const ImageCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as ImageNode
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
            <CssSideBarInput defaultValue={node.css.borderRadius} label={"border radius"} type={"number"} onBlur={(e) => {
                node.css.borderRadius = parseInt(e.target.value)
            }}/>
        </>
    )
}