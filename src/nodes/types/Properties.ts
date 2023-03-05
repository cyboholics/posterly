export const fonts = ["Helvetica", "Arial", "Times New Roman", "Comic Sans", "Roboto"]
export const decorations = ["line-through", "underline", "overline", " "]

export type Color = string;
export type Pixel = number;
export type TextFont = typeof fonts[number]
export type TextDecoration = (typeof decorations[number])[]