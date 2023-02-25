import {createContext, useState, ReactElement} from "react";
import {Node} from "@/types/nodes/Node";
import {BoxNode} from "@/types/nodes/elements/BoxNode";

export const PosterContext = createContext<{
    poster: Node<any>[],
    setPoster: ((poster: Node<any>[]) => void)
}>({
    poster: [], setPoster: () => {
    }
})

const PosterProvider = ({children}: { children: ReactElement }) => {
    const [poster, setPoster] = useState<Node<any>[]>([
        new BoxNode({x_pos: 10, y_pos:10}),
        new BoxNode({x_pos: 90, y_pos:10}),
        new BoxNode({x_pos: 10, y_pos:90}),
        new BoxNode({x_pos: 90, y_pos:90})
    ])
    return (
        <PosterContext.Provider value={{poster, setPoster}}>
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider