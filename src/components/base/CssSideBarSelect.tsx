import React from "react";

type CssSideBarInputProps = {
    defaultValue: string[] | string,
    onChange: React.ChangeEventHandler<HTMLSelectElement>,
    multiple: boolean,
    options: string[],
    label: string
}
export const CssSideBarSelect = (props: CssSideBarInputProps) => {
    return <>
        <label>{props.label}</label>
        <select
        value={props.defaultValue}
        onChange={props.onChange}
        multiple={props.multiple}
        style={{width: "60%"}}
    >
        {props.options.map((option, index) => {
            return <option key={index} value={option}>{option}</option>
        })}
    </select>
        </>
}