import {Poster} from "@/components/composite/Poster";
import {ElementSidebar} from "@/components/composite/ElementSidebar";
import {Container} from "@/components/base/Container";
import {CssSidebar} from "@/components/composite/CssSidebar";
import {SavePosterButton} from "@/components/base/SavePosterButton";
import React from "react";

export const PosterBuilder = () => {
    return <Container
        flexDirection="row"
        justifyContent="space-between"
        style={{
            backgroundImage: "linear-gradient(to right, grey 1px, transparent 1px),\n" +
                "linear-gradient(to bottom, grey 1px, transparent 1px);",
            backgroundSize: "20px 20px",
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