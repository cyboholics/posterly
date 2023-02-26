import {Poster} from "@/components/composite/Poster";
import {ElementSidebar} from "@/components/composite/ElementSidebar";
import {Container} from "@/components/base/Container";
import {CssSidebar} from "@/components/composite/CssSidebar";
import {SavePosterButton} from "@/components/base/SavePosterButton";
import React from "react";
import {usePoster} from "@/hooks/usePoster";

export const PosterBuilder = () => {
    const {deleteSelectedNode, unselectNode, updateNode, getSelectedNode, isOutOfRange} = usePoster();
    return <Container
        flexDirection="row"
        justifyContent="space-between"
        style={{
            backgroundImage: "linear-gradient(to right, grey 1px, transparent 1px),\n" +
                "linear-gradient(to bottom, grey 1px, transparent 1px)",
            backgroundSize: "20px 20px",
        }}
        onKeyDownCapture={(e) => {
            if (e.key === "Delete") {
                deleteSelectedNode();
            } else if(e.key === "Escape"){
                unselectNode();
            }
            const node = getSelectedNode();
            if(!node) return;
            let new_y_pos = (node.position.y_pos || 0);
            let new_x_pos = (node.position.x_pos || 0);
            if(e.key === "ArrowUp"){
                new_y_pos -= 1;
            }
            if(e.key === "ArrowDown"){
                new_y_pos += 1;
            }
            if(e.key === "ArrowLeft"){
                new_x_pos -= 1;
            }
            if(e.key === "ArrowRight"){
                new_x_pos += 1;
            }
            if(isOutOfRange(new_x_pos, new_y_pos, node)) return;
            updateNode(node.id, null, {x_pos: new_x_pos, y_pos: new_y_pos});
        }}
    >
        <ElementSidebar/>
        <Container
            flexDirection="column"
            width="40%"
        >
            <Poster/>
            <SavePosterButton/>
        </Container>
        <CssSidebar/>
    </Container>
}