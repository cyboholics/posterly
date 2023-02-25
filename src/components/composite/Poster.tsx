import {usePoster} from "@/hooks/usePoster";
import React from "react";
import {BoxElement} from "@/components/elements/BoxElement";
import {BoxNode} from "@/types/nodes/elements/BoxNode";
import html2canvas from "html2canvas";

export const Poster = () => {
    const {getAllNodes} = usePoster();
    const nodes = getAllNodes();
    return <><div id="poster" style={{
        width: "400px",
        height: "400px",
        backgroundColor: "cyan"
    }} >
        {
            nodes.map(node => {
                if (node instanceof BoxNode) {
                    return <BoxElement key={node.id} id={node.id} />
                }
            })
        }
    </div>
        <button onClick={()=>{
            const poster = document.getElementById("poster");
            if(!poster) return;
            // div to image
            html2canvas(poster).then(canvas => {
                const img = canvas.toDataURL("image/png");
                const link = document.createElement("a");
                link.download = "my-poster.png";
                link.href = img;
                link.click();
            });
        }}>
            Save
        </button>
    </>
}