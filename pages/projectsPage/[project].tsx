import type { ProjectType } from "@/components/Projects";
import { LanguageContext } from "@/lib/contexts/languageContext";
import { GetStaticPropsContext } from "next";
import Image from "next/image";
import { useContext } from "react";
import styles from "@/styles/ProjectPage.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { settings } from "@/lib/slider";

type Props = {
    project: ProjectType;
}

export default function ProjectDetails({project}:Props) {
    const {language} = useContext(LanguageContext);
    
    if (project){
        const {name, desription, imgUrl, url, urlGithub, technologies} = project;
        return (
            <main className={styles.project}>
                <h2>{name}</h2>
                <Slider {...settings}>
                    {imgUrl.map((url: string, index) => <Image 
                        key={index}
                        src={url}
                        alt={`Image ${index}`}
                        width={300}
                        height={300}
                        className={styles.imgProject}
                    />)}
                </Slider>
                <div className={styles.descriptionDiv}>
                    <h3>Description</h3>
                    <p>{language === "fr" ? desription.fr : desription.en}</p>
                </div>
                <div className={styles.technologiesDiv}>
                    <h3>Technologies</h3>
                    <p>{technologies}</p>
                </div>
                <div className={styles.viewContent}>
                    {url && <a href={url} target="_blanc">WEBSITE</a>}
                    <a href={urlGithub} target="_blanc">{language === "fr" ? "CODE SOURCE" : "SOURCE CODE"}</a>
                </div>
            </main>
        )
    } else {
        return <main className={styles.project}>
            <h2 style={{color: "red"}}>Project not found!</h2>
        </main>
    }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const datas = await import("@/lib/datas/datas.json");

    if (context.params?.project){
        const projectSelected = context.params?.project as string;
        const project = datas.myProjects.find((project: ProjectType) => project.id === projectSelected) as ProjectType;
        if(project){
            return {
                props: {
                    project
                }
            }
        } else {
            return {
                redirect: {
                    destination: '/projectsPage'
                }
            }
        }
    } 
}

export const getStaticPaths = async () => {
    const datas = await import("@/lib/datas/datas.json");
    const paths = datas.myProjects.map(item => ({
       params: {project: item.id}
    }))
    
    return {
       paths,
       fallback: true
    }
}
    
