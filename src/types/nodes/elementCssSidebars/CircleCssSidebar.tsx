import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {Color} from "@/types/css/Properties";
import {CircleNode} from "@/types/nodes/elementNodes/CircleNode";

export const BoxCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as CircleNode
    return (
        <>
            <CssSideBarInput defaultValue={node.css.radius} type={"number"} label={"radius"} onBlur={(e) => {
                node.css.radius = parseInt(e.target.value)
                reRenderState()
            }}/>

            <CssSideBarInput defaultValue={node.css.backgroundColor} type={"color"} label={"background color"} onBlur={(e) => {
                node.css.backgroundColor = e.target.value as Color
                reRenderState()
            }}/>
        </>
    )
}