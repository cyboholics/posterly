import {createContext, useState} from "react";
import {VStackNode} from "@/types/nodes/containers/VStackNode";

export const PosterContext = createContext<{
    poster: VStackNode,
    setPoster: ((poster: VStackNode) => void)
}>({poster: new VStackNode(), setPoster: ()=>{}})

const PosterProvider = ({children}: any) => {
    const [poster, setPoster] = useState<VStackNode>(new VStackNode("flex-start", "flex-start"))
    return (
        <PosterContext.Provider value={{poster, setPoster}}>
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider