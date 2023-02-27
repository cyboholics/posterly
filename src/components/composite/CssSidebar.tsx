import {usePoster} from "@/hooks/usePoster";
import {Node} from "@/types/nodes/Node";
import {Container} from "@/components/base/Container";
import React from "react";
import {number} from "prop-types";
import {decorations} from "@/types/css/Properties";

const CssInput =(props: {defaultValue: any, onBlur: any, type: string}) => {
    const {reRenderState} = usePoster();
    return <input
        type={props.type}
        defaultValue={props.defaultValue}
        onBlur={props.onBlur}
        style={{width: "60%"}}
        onKeyDown={(event) => {
            if (event.key === 'Enter') {
                event.preventDefault()
                event.currentTarget.blur()
                reRenderState()
            }
        }}
    />
}

export const CssSidebar = () => {
    const {getSelectedNode, reRenderState} = usePoster();
    const selectedNode = getSelectedNode();

    const NodeStylingRow = ({property, propertyType}: { property: any, propertyType: any }) => {
        //TODO: Add a way to change the type of the input
        const pTypeName = typeof (propertyType[property])
        const inputType = propertyType[property] instanceof number ? "number" : "text"
        return <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "30px",
        }}>
            <label>{property}</label>
            {/*TODO: Styling based on number*/}
            {
                property === "decoration" && <select
                    style={{width: "60%"}}
                    value={propertyType[property]}
                    multiple={true}
                    onChange={(event) => {
                        event.preventDefault()
                        // if event.target.value is in propertyType[property], remove it, else add it
                        if (propertyType[property].includes(event.target.value)) {
                            propertyType[property] = propertyType[property].filter((decoration: string) => decoration !== event.target.value)
                        } else {
                            propertyType[property].push(event.target.value)
                        }
                        reRenderState()
                    }}
                >
                    { decorations.map((decoration, index) => {
                        return <option key={index} value={decoration}>{decoration}</option>
                    })}
                </select>
            }
            {
                property !== "decoration" && <CssInput
                    type={inputType}
                    defaultValue={propertyType[property]}
                    onBlur={(event:  React.FocusEvent<HTMLInputElement>) => {
                        propertyType[property] = event.target.value
                        reRenderState()
                    }}
                />
            }
        </div>
    }

    const NodeStyling = ({node}: { node: Node<any> }) => {
        return <div>

            {(Object.keys(node.position)).map((positionProperty) => {
                return <NodeStylingRow key={positionProperty} property={positionProperty} propertyType={node.position}/>
            })}
            {(Object.keys(node.css)).map((cssProperty) => {
                return <NodeStylingRow key={cssProperty} property={cssProperty} propertyType={node.css}/>
            })}
        </div>
    }

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
            zIndex: 2,
            cursor: "default"
        }}
        onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
        }}
    >
        <div style={{width: "eval(100% - 30px)", height: "60px"}}>
            <h1 style={{margin: "15px", textAlign: "center"}}>Style</h1>
        </div>
        <div style={{width: "100%"}}>
            {selectedNode ? <NodeStyling node={selectedNode}/> : "Click On a Node to get Started"}
        </div>
    </Container>
}