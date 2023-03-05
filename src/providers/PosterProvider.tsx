import {createContext, ReactElement, useEffect, useState} from "react";
import {Node} from "@/nodes/types/Node";
import {parseNodeList} from "@/nodes/types/ParseNode";
export const size_names = ["small", "medium", "large"]
export type SizeName = typeof size_names[number]

export type PosterSize = {
    width: number,
    height: number
}

export const posterSizeFromName: {
    [key: SizeName]: PosterSize
} = {
    small: {width: 400, height: 400},
    medium: {width: 500, height: 375},
    large: {width: 640, height: 360}
}

export const PosterContext = createContext<{
    poster: Node<any>[],
    selectedNodeId: string | null,
    posterSize: SizeName,
    setPoster: ((poster: Node<any>[]) => void),
    setSelectedNodeId: ((selectedNodeId: string | null) => void)
    setPosterSize: ((posterSize: SizeName) => void)
}>({
    poster: [], setPoster: () => {
    },
    selectedNodeId: null, setSelectedNodeId: () => {
    },
    posterSize: "small", setPosterSize: () => {
    }
})

const PosterProvider = ({children}: { children: ReactElement }) => {
    const [poster, setPoster] = useState<Node<any>[]>([])
    const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
    const [posterSize, setPosterSize] = useState<SizeName>("small")
    // const [isReady, setIsReady] = useState(false)

    // useEffect(() => {
    //     if (!isReady) return;
    //     localStorage.setItem("poster", JSON.stringify(poster))
    //     localStorage.setItem("posterSize", posterSize)
    // }, [isReady, poster, posterSize])
    //
    // useEffect(() => {
    //     const savedPoster = localStorage.getItem("poster")
    //     const savedPosterSize = localStorage.getItem("posterSize") as SizeName
    //     if (savedPoster) {
    //         setPoster(parseNodeList(JSON.parse(savedPoster)))
    //         setPosterSize(savedPosterSize || "small")
    //     }
    //     setIsReady(true)
    // }, [])

    return (
        <PosterContext.Provider value={{
            poster, selectedNodeId,
            setPoster, setSelectedNodeId,
            posterSize, setPosterSize
        }}>
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider