import {usePoster} from "@/hooks/usePoster";
import {Container} from "@/components/base/Container";
import React from "react";
import {PositionEditor} from "@/components/base/PositionEditor";

export const CssSidebar = () => {
    const {getSelectedNode} = usePoster();
    const selectedNode = getSelectedNode();

    return <Container
        width="calc(30% + 20px)"
        height="calc(100vh - 24px)"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #FFAFCC",
            margin: "10px",
            maxWidth: "350px",
            zIndex: 2,
            cursor: "default"
        }}
        onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
        }}
    >
        {selectedNode && <selectedNode.cssSideBar id={selectedNode.id}/>}
        {selectedNode && <PositionEditor id={selectedNode.id}/>}
    </Container>
}