import React, {ReactNode} from 'react'

export type ContainerProps = {
    children?: ReactNode,
    display?: "flex" | "block" | "inline" | "inline-block" | "inline-flex" | "grid" | "inline-grid" | "contents" | "none",
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right",
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self-end",
    height?: string,
    width?: string,
    style?: any,
    onClick?: (() => void) | ((e:React.MouseEvent) => void),
    onKeyDown?: (e: React.KeyboardEvent) => void,
}

export const Container = (props: ContainerProps) => {
    return <div
        tabIndex={props.onKeyDown ? 0 : undefined}
        style={{
            display: props.display || "flex",
            flexDirection: props.flexDirection || "row",
            justifyContent: props.justifyContent || "center",
            alignItems: props.alignItems || "center",
            height: props.height || "100%",
            width: props.width || "100%",
            cursor: props.onClick ? "pointer" : "default",
            ...props.style
        }}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown || undefined}
    >
        {props.children}
    </div>
}