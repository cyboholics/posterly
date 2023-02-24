import {Poster} from "@/components/composite/Poster";
import {Sidebar} from "@/components/composite/Sidebar";

export const PosterBuilder = () => {
    return <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        minWidth: "70vw"
    }}>
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "70%",
        }}>
            <Poster />
        </div>
        <Sidebar />
    </div>
}