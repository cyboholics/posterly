import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {Color} from "@/nodes/types/Properties";
import {CircleNode} from "@/nodes/types/elements/CircleNode";

export const CircleCssSidebar = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as CircleNode
    return (
        <>
            <CssSideBarInput value={node.css.radius} type={"number"} label={"radius"} onChange={(e) => {
                node.css.radius = parseInt(e.target.value)
                reRenderState()
            }}/>

            <CssSideBarInput value={node.css.backgroundColor} type={"color"} label={"background color"} onChange={(e) => {
                node.css.backgroundColor = e.target.value as Color
                reRenderState()
            }}/>
        </>
    )
}