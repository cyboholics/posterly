import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import PosterProvider from "@/providers/PosterProvider";
import {SnackbarProvider} from "@/providers/SnackbarProvider";
import React from "react";

export default function App({Component, pageProps}: AppProps) {
    return <PosterProvider>
        <SnackbarProvider>
            <Component {...pageProps} />
        </SnackbarProvider>
    </PosterProvider>
}