import {CssSideBarInput} from "@/components/base/CssSideBarInput";
import {usePoster} from "@/hooks/usePoster";
import {Node} from "@/nodes/types/Node";

export const PositionEditor = ({id}: { id: string }) => {
    const {getNodeById, reRenderState} = usePoster()
    const node = getNodeById(id) as Node<any>
    return <>
        <CssSideBarInput defaultValue={node.position.x_pos} label={"X position"} type={"number"} onBlur={(e) => {
            node.position.x_pos = parseInt(e.target.value)
            reRenderState()
        }}/>
        <CssSideBarInput defaultValue={node.position.y_pos} label={"Y position"} type={"number"} onBlur={(e) => {
            node.position.y_pos = parseInt(e.target.value)
            reRenderState()
        }}/>
        <CssSideBarInput defaultValue={node.position.rotation} label={"Rotation"} type={"number"} onBlur={(e) => {
            node.position.rotation = parseInt(e.target.value)
            reRenderState()
        }}/>
    </>
}