export interface Node {
    id: string;
    type: "h_stack" | "v_stack" | "text" | "image" | "box";
}