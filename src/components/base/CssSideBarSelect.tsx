import React from "react";

type CssSideBarInputProps = {
    value: string[] | string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
    multiple: boolean,
    options: string[],
    label: string
}
export const CssSideBarSelect = (props: CssSideBarInputProps) => {
    return <div style={{
        padding: "10px 5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "calc(100% - 10px)"
    }}>
        <label>{props.label}</label>
        <select
            value={props.value}
            onChange={props.onChange}
            multiple={props.multiple}
        >
            {props.options.map((option, index) => {
                return <option key={index} value={option}>{option}</option>
            })}
        </select>
    </div>
}