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
            position: "fixed",
        }}
        onClick={() => {
            unselectNode();
        }}
    >
        <ElementSidebar/>
        <Container
            flexDirection="column"
            width="40%"
            style={{
                border: "none",
                outline: "none",
            }}
            onKeyDownCapture={(e) => {
                e.preventDefault()
                if (e.key === "Delete") {
                    deleteSelectedNode();
                } else if (e.key === "Escape") {
                    unselectNode();
                }
                const node = getSelectedNode();
                if (!node) return;
                let new_y_pos = (node.position.y_pos || 0);
                let new_x_pos = (node.position.x_pos || 0);
                if (e.key === "ArrowUp") {
                    if (e.ctrlKey) {
                        new_y_pos -= node.css.height || node.css.radius || 50;
                    } else if (e.shiftKey) {
                        new_y_pos -= 5;
                    } else {
                        new_y_pos -= 1;
                    }
                } else if (e.key === "ArrowDown") {
                    if (e.ctrlKey) {
                        new_y_pos += node.css.height || node.css.radius || 50;
                    } else if (e.shiftKey) {
                        new_y_pos += 5;
                    } else {
                        new_y_pos += 1;
                    }
                } else if (e.key === "ArrowLeft") {
                    if (e.ctrlKey) {
                        new_x_pos -= node.css.width || node.css.radius || 50;
                    } else if (e.shiftKey) {
                        new_x_pos -= 5;
                    } else {
                        new_x_pos -= 1;
                    }
                } else if (e.key === "ArrowRight") {
                    if (e.ctrlKey) {
                        new_x_pos += node.css.width || node.css.radius || 50;
                    } else if (e.shiftKey) {
                        new_x_pos += 5;
                    } else {
                        new_x_pos += 1;
                    }
                } else if (e.key === "Tab") {
                    e.preventDefault()
                    let node_rotation = (node.position.rotation || 0);
                    if (e.shiftKey) {
                        node_rotation -= 1;
                    } else {
                        node_rotation += 1;
                    }
                    node_rotation %= 360;
                    updateNode(node.id, null, {rotation: node_rotation});
                } else {
                    return;
                }
                if (isOutOfRange(new_x_pos, new_y_pos, node)) return;
                updateNode(node.id, null, {x_pos: new_x_pos, y_pos: new_y_pos});
            }}
        >
                <Poster/>
            <SavePosterButton/>
        </Container>
        <CssSidebar/>
    </Container>
}