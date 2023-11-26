import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { useContext } from "react";

export default function AboutPage () {
    const {language} = useContext(LanguageContext);
    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "À propos" : "About"}`}</title>
            <meta name="description" content= "Nabil Bekka , à propos" />
        </Head>
        <main>
            A propos
        </main>
    </>
}