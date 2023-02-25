export const ElementSidebarRow = ({title, description, styles}: { title: string, description: string, styles?: {} }) => {
    return <div style={{
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