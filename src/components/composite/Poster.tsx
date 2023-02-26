import React from "react";
import {usePoster} from "@/hooks/usePoster";
import {posterSizeFromName} from "@/providers/PosterProvider";

export const Poster = () => {
    const {getAllNodes, getPosterSize} = usePoster();
    const {width, height} = posterSizeFromName[getPosterSize()];
    const nodes = getAllNodes();
    return <>
        <div
            id="poster"
            style={{
                width: `${width}px`,
                height: `${height}px`,
                backgroundColor: "cyan"
            }}
        >
            {
                nodes.map(node => {
                    return <node.component id={node.id} key={node.id} />
                })
            }
        </div>
    </>
}