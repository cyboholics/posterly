import React from "react";
import {Node} from "@/types/nodes/Node";
import {usePoster} from "@/hooks/usePoster";

type ElementSidebarRowProps = {
    title: string,
    description: string,
    styles?: {},
    builder: () => Node<any>,
}
export const ElementSidebarRow = ({title, description, styles, builder}: ElementSidebarRowProps) => {
    const {insertElement} = usePoster();
    return <div
        onClick={()=>{
            insertElement(builder())
        }}
        style={{
            width: "100%",
            cursor: "pointer",
            ...styles
        }}>
        <h4 style={{
            textAlign: "start",
            margin: "0px 0px 5px 0px",
        }}>{title}</h4>
        <p style={{
            margin: "0px",
        }}>{description}</p>
    </div>
}