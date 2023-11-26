import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { useContext } from "react";

export default function ProjectsPage () {
    const {language} = useContext(LanguageContext);
    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "Mes projets" : "My projects"}`}</title>
            <meta name="description" content= "Nabil Bekka , projets" />
        </Head>
        <main>
            Projects
        </main>
    </>}