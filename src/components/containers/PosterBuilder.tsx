import {Poster} from "@/components/composite/Poster";
import {ElementSidebar} from "@/components/composite/ElementSidebar";
import {Container} from "@/components/base/Container";
import {CssSidebar} from "@/components/composite/CssSidebar";

export const PosterBuilder = () => {
    return <Container
        flexDirection="row"
        justifyContent="space-between"
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