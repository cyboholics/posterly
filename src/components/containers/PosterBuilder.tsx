import {Poster} from "@/components/composite/Poster";
import {ElementSidebar} from "@/components/composite/ElementSidebar";
import {Container} from "@/components/base/Container";
import {CssSidebar} from "@/components/composite/CssSidebar";

export const PosterBuilder = () => {
    return <Container
        height="100vh"
        width="100vw"
    >
        <ElementSidebar/>
        <Container
            flexDirection="column"
            width="40%"
        >
            <Poster/>
        </Container>
        <CssSidebar/>
    </Container>
}