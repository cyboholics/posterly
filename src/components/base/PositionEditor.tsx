import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {Node} from "@/nodes/types/Node";

export const PositionEditor = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as Node<any>
    return <>
        <CssSideBarInput value={node.position.x_pos} label={"X position"} type={"number"} onChange={(e) => {
            node.position.x_pos = parseInt(e.target.value)
            reRenderState()
        }}/>
        <CssSideBarInput value={node.position.y_pos} label={"Y position"} type={"number"} onChange={(e) => {
            node.position.y_pos = parseInt(e.target.value)
            reRenderState()
        }}/>
        <CssSideBarInput value={node.position.rotation} label={"Rotation"} type={"number"} onChange={(e) => {
            node.position.rotation = parseInt(e.target.value)
            reRenderState()
        }}/>
    </>
}