import {usePoster} from "@/hooks/usePoster";
import {Container} from "@/components/base/Container";
import React from "react";
import {PositionEditor} from "@/components/base/PositionEditor";

export const CssSidebar = () => {
    const {getSelectedNode} = usePoster();
    const selectedNode = getSelectedNode();

    {/*TODO: Not re-rendering on state change using keys or drag/drop*/}
    {/*TODO: Styling is left, to be done in respective css base elements*/}

    return <Container
        width="calc(30% + 20px)"
        height="calc(100vh - 24px - 70px)"
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
            cursor: "default",
            overflow: "auto"
        }}
        onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
        }}
    >
        {selectedNode && <selectedNode.cssSideBar id={selectedNode.id}/>}
        {selectedNode && <PositionEditor id={selectedNode.id}/>}
    </Container>
}