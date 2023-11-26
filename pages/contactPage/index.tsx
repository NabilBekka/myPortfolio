import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { useContext } from "react";

export default function ContactPage () {
    const {language} = useContext(LanguageContext);
    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "Me contacter" : "Contact"}`}</title>
            <meta name="description" content= "Nabil Bekka , contact" />
        </Head>
        <main>
            Contact
        </main>
    </>
}