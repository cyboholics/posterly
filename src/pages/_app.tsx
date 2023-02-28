import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import PosterProvider from "@/providers/PosterProvider";
import {SnackbarProvider} from "@/providers/SnackbarProvider";
import {SessionProvider} from "next-auth/react"
import React from "react";
import {Navbar} from "@/components/composite/Navbar";

export default function App({Component, pageProps}: AppProps) {
    return <SessionProvider
        session={pageProps.session}
    >
        <PosterProvider>
            <SnackbarProvider>
                <Navbar/>
                <Component {...pageProps} />
            </SnackbarProvider>
        </PosterProvider>
    </SessionProvider>
}