import React from "react";

type CssSideBarInputProps = {
    defaultValue: any,
    label: string,
    onBlur: ((event: React.FocusEvent<HTMLInputElement>) => void),
    type: string
}
export const CssSideBarInput = (props: CssSideBarInputProps) => {
    return <>
        <label>{props.label}</label>
        <input
            type={props.type}
            defaultValue={props.defaultValue}
            onBlur={props.onBlur}
            style={{width: "60%"}}
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    event.preventDefault()
                    event.currentTarget.blur()
                }
            }}
        /></>
}