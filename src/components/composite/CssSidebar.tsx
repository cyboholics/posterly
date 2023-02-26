import {usePoster} from "@/hooks/usePoster";
import {Node} from "@/types/nodes/Node";
import {Container} from "@/components/base/Container";
import React from "react";

export const CssSidebar = () => {
    const {getSelectedNode, reRenderState} = usePoster();
    const selectedNode = getSelectedNode();

    const NodeStylingRow = ({property, propertyType}: { property: any, propertyType: any}) => {
        return <div>
            <h5>{property}</h5>
            <label>Value</label>
            <input
                type={"text"}
                defaultValue={propertyType[property]}
                onBlur={(event) => {
                    propertyType[property] = (event.target.value)
                    console.log(propertyType)
                    reRenderState()
                }}
                onKeyDownCapture={(event) => {
                    if (event.key === 'Enter') {
                        event.currentTarget.blur()
                    }
                }}
            />
        </div>
    }

    const NodeStyling = ({node}: { node: Node<any> }) => {
        return <div>
            Hi
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