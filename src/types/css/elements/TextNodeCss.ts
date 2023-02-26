import {Color, Pixel, TextDecoration, TextFont} from "@/types/css/property/Properties";
export const fonts = ["Helvetica", "Arial", "Times New Roman", "Comic Sans", "Roboto"] as const
export const decorations = ["line-through", "underline", "overline"] as const

export type TextNodeCss = {
    color?: Color;
    decoration?:  TextDecoration;
    font?: TextFont;
    size?: Pixel;
}