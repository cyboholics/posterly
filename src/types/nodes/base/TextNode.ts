import {BaseNode} from "@/types/nodes/base/BaseNode";

export const fonts = ["Helvetica", "Arial", "Times New Roman", "Comic Sans", "Roboto"] as const
export const decorations = ["line-through", "underline", "overline"] as const

type FontType = typeof fonts[number]
type DecorationType = typeof decorations[number]

export interface TextNode extends BaseNode{
    color: string;
    decoration:  DecorationType[];
    font: FontType;
    size: number;
    hyperlink: string | undefined;
    type: "text";
}