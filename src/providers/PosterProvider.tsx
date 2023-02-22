import {createContext, useState} from "react";

export const PosterContext = createContext<any>(null)

const PosterProvider = ({children}: any) => {
    const [poster, setPoster] = useState(null)
    return (
        <PosterContext.Provider value={{poster, setPoster}}>
            {children}
        </PosterContext.Provider>
    )
}

export default PosterProvider