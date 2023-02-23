import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import PosterProvider from "@/providers/PosterProvider";

export default function App({Component, pageProps}: AppProps) {
    return <PosterProvider>
                <Component {...pageProps} />
            </PosterProvider>
}