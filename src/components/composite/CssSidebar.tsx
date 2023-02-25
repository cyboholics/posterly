import {Container} from "@/components/base/Container";
import {elements} from "@/types/nodes/elements";
import {ElementSidebarRow} from "@/components/base/SidebarRow/ElementSidebarRow";

export const CssSidebar = () => {
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
        }}
    >
        <div style={{
            width:"eval(100% - 30px)",
            height: "60px",
        }}>
            <h1 style={{margin: "15px", textAlign: "center"}}>Style</h1>
        </div>
        <div style={{width: "100%"}}>
            {elements.map((element, index) => {
                return <ElementSidebarRow
                    key={index}
                    title={element.title}
                    description={element.description}
                    styles={{
                        width: "calc(100% - 40px)",
                        borderRadius: "10px",
                        margin: "10px",
                        padding: "10px",
                        backgroundColor: "#FFC8DD",
                    }}
                />
            })}
        </div>
    </Container>
}