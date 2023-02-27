import {Container} from "@/components/base/Container";
import {elements} from "@/types/nodes/elementNodes";
import {ElementSidebarRow} from "@/components/base/ElementSidebarRow";
import {PosterSizeChooser} from "@/components/composite/PosterSizeChooser";

export const ElementSidebar = () => {
    return <Container
        width="calc(30% + 20px)"
        height="calc(100vh - 24px)"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        style={{
            backgroundColor: "white",
            borderRadius: "10px",
            border: "2px solid #A2D2FF",
            margin: "10px",
            maxWidth: "350px",
            zIndex: 2,
        }}
    >
        <div style={{
            width: "eval(100% - 30px)",
            height: "60px",
        }}>
            <h1 style={{margin: "15px", textAlign: "center"}}>Element</h1>
        </div>
        <div style={{width: "100%"}}>
            {elements.map((element, index) => {
                // @ts-ignore
                return <ElementSidebarRow
                    key={index}
                    title={element.title}
                    description={element.description}
                    builder={element.type.build}
                    styles={{
                        width: "calc(100% - 40px)",
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "10px",
                        backgroundColor: "#BDE0FE",
                    }}
                />
            })}
        </div>
        <PosterSizeChooser/>
    </Container>
}