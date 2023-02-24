export const fonts = ["Helvetica", "Arial", "Times New Roman", "Comic Sans", "Roboto"] as const
export const decorations = ["line-through", "underline", "overline"] as const

export type FontType = typeof fonts[number]
export type DecorationType = typeof decorations[number]

export type TextNodeCss = {
    color?: string;
    decoration?:  DecorationType[];
    font?: FontType;
    size?: number;
}