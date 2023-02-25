export const ElementSidebarRow = ({title, description, styles, onClick}: { title: string, description: string, styles?: {}, onClick: ()=>{}}) => {
    return <div
        onClick={onClick}
        style={{
        width: "100%",
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