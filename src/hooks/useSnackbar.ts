import {useContext} from "react";
import {SnackbarContext} from "@/providers/SnackbarProvider";

export const useSnackbar = () => {
    const {openSnackbar} = useContext(SnackbarContext);

    const showErrorMessage = (message: string) => {
        openSnackbar(message, "error");
    }

    const showWarningMessage = (message: string) => {
        openSnackbar(message, "warning");
    }

    const showInfoMessage = (message: string) => {
        openSnackbar(message, "info");
    }

    const showSuccessMessage = (message: string) => {
        openSnackbar(message, "success");
    }

    return {showErrorMessage, showWarningMessage, showInfoMessage, showSuccessMessage}

}