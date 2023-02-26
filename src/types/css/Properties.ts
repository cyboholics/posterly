export const fonts = ["Helvetica", "Arial", "Times New Roman", "Comic Sans", "Roboto"] as const
export const decorations = ["line-through", "underline", "overline", " "] as const

type singleDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type singleHex = singleDigit | "a" | "b" | "c" | "d" | "e" | "f";
type colorText =
    "black"
    | "white"
    | "red"
    | "green"
    | "blue"
    | "yellow"
    | "orange"
    | "purple"
    | "pink"
    | "brown"
    | "grey"
    | "gray";

export type Color = `#${singleHex}${singleHex}${singleHex}` | colorText;
export type Pixel = number;
export type TextFont = typeof fonts[number]
export type TextDecoration = (typeof decorations[number])[]