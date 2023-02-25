import {Container} from "@/components/base/Container";
import {elements} from "@/types/nodes/elements/index";
import {ElementSidebarRow} from "@/components/base/SidebarRow/ElementSidebarRow";

export const ElementSidebar = () => {
    return <Container
        width="30%"
        height="100%"
        justifyContent="flex-start"
        style={{backgroundColor: "teal"}}
    >
        <div
            style={{
                width:"100%"
            }}
        >
            {elements.map((element, index) => {
                return <ElementSidebarRow
                    key={index}
                    title={element.title}
                    description={element.description}
                    styles={{width: "100%"}}
                />
            })}
        </div>
    </Container>
}