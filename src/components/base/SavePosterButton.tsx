import {usePoster} from "@/hooks/usePoster";
import html2canvas from "html2canvas";
import React from "react";

export const SavePosterButton = () => {
    const {unselectNode} = usePoster();
    return <button
        onClick={() => {
            unselectNode();
            setTimeout(() => {
                const poster = document.getElementById("poster");
                if (!poster) return;
                // div to image
                html2canvas(poster).then(canvas => {
                    const img = canvas.toDataURL("image/png");
                    const link = document.createElement("a");
                    link.download = "my-poster.png";
                    link.href = img;
                    link.click();
                });
            }, 100)
        }}
        style={{
            width: "400px",
            height: "50px",
            marginTop: "20px",
            textAlign: "center",
            fontSize: "20px",
            border: "none",
            borderRadius: "10px",
            backgroundColor: "blue",
            color: "white",
            cursor: "pointer"
        }}
    >
        Save
    </button>
}