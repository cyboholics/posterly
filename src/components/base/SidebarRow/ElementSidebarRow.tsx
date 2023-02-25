export const ElementSidebarRow = ({title, description, styles}: { title: string, description: string, styles?: {} }) => {
    return <div style={{
        height: "50px",
        width: "100%",
        ...styles
    }}>{title+description}</div>
}