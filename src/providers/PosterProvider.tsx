import {createContext, useState, ReactElement} from "react";
import {Node} from "@/types/nodes/Node";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const PosterContext = createContext<{
    poster: Node<any>[],
    selectedNodeId: string | null,
    setPoster: ((poster: Node<any>[]) => void)
    setSelectedNodeId: ((selectedNodeId: string | null) => void)
}>({
    poster: [], setPoster: () => {}, selectedNodeId: null, setSelectedNodeId: () => {}
})

const PosterProvider = ({children}: { children: ReactElement }) => {
    const [poster, setPoster] = useState<Node<any>[]>([
        new BoxNode({x_pos: 10, y_pos:10}, {background_color: "red"}),
        new BoxNode({x_pos: 90, y_pos:10}, {background_color: "green"}),
        new BoxNode({x_pos: 10, y_pos:90}, {background_color: "blue"}),
        new BoxNode({x_pos: 90, y_pos:90}, {background_color: "yellow"})
    ])
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
    return (
        <PosterContext.Provider value={{poster, selectedNodeId, setPoster, setSelectedNodeId}}>
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider