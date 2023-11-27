import Project from "@/components/Project";
import type { ProjectType } from "@/components/Projects";
import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { useContext } from "react";
import styles from "@/styles/ProjectPage.module.css";

type Props = {
    projects: ProjectType[];
}

export default function ProjectsPage ({projects}: Props) {
    const {language} = useContext(LanguageContext);
    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "Mes projets" : "My projects"}`}</title>
            <meta name="description" content= "Nabil Bekka , projets" />
        </Head>
        <main className={styles.main}>
            <h2 className={styles.h2}>{language === "fr" ? "MES PROJETS" : "MY PROJECTS"}</h2>
            <div className={styles.container}>
                {projects.map((project:ProjectType) => <Project project={project} key={project.id}/>)}
            </div>
        </main>
    </>}

export const getStaticProps = async () => {
  
    const datas = await import("@/lib/datas/datas.json");
    const projects: ProjectType[] = datas.myProjects;
    return {
      props: {
        projects
      }
    }
  }