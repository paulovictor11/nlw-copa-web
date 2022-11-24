import { Roboto } from "@next/font/google";
import "../styles/global.css";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${roboto.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
