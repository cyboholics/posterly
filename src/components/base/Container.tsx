import React, {ReactNode} from 'react'

export type ContainerProps = {
    children?: ReactNode,
    display?: "flex" | "block" | "inline" | "inline-block" | "inline-flex" | "grid" | "inline-grid" | "contents" | "none",
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right",
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self-end",
    height?: string,
    width?: string,
    style?: any
}

export const Container = (props: ContainerProps) => {
    console.log(props.alignItems)
    return <div style={{
            display: props.display || "flex",
            flexDirection: props.flexDirection || "row",
            justifyContent: props.justifyContent || "center",
            alignItems: props.alignItems || "center",
            height: props.height || "100%",
            width: props.width || "100%",
            ...props.style
        }}>
            {props.children}
        </div>
}