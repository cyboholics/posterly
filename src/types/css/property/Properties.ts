import {decorations, fonts} from "@/types/css/elements/TextNodeCss";

type singleDigit = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type singleHex = singleDigit | "a" | "b" | "c" | "d" | "e" | "f";

export type Color = `#${singleHex}${singleHex}${singleHex}`
export type Pixel = number;
export type TextFont = typeof fonts[number]
export type TextDecoration = typeof decorations[number]

const color: Color = "#000";