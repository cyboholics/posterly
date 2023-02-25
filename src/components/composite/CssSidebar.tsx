import {Container} from "@/components/base/Container";

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
        </div>
    </Container>
}