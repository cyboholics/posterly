import {createContext, useState} from "react";

export const SnackbarContext = createContext({
    openSnackbar: (message: string, severity: "error" | "success" | "info" | "warning") => {
    },
});

export function SnackbarProvider({children}: any) {
    const [message, setMessage] = useState<string>("");

    const openSnackbar = (message: string, severity: "error" | "success" | "info" | "warning") => {
        alert(severity.toUpperCase() + ": " + message);
    }
    return (
        <SnackbarContext.Provider value={{openSnackbar}}>
            {children}
        </SnackbarContext.Provider>
    );
}