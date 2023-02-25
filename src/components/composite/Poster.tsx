import React from "react";
import {usePoster} from "@/hooks/usePoster";
import {BoxElement} from "@/components/elements/BoxElement";
import {BoxNode} from "@/types/nodes/elements/BoxNode";
import {SavePosterButton} from "@/components/base/SavePosterButton";

export const Poster = () => {
    const {getAllNodes} = usePoster();
    const nodes = getAllNodes();
    return <>
        <div id="poster" style={{
            width: "400px",
            height: "400px",
            backgroundColor: "cyan"
        }}>
            {
                nodes.map(node => {
                    if (node instanceof BoxNode) {
                        return <BoxElement key={node.id} id={node.id}/>
                    }
                })
            }
        </div>
        <SavePosterButton/>
    </>
}