import { LanguageContext } from "@/lib/contexts/languageContext";
import { FunctionComponent, useContext, useState } from "react";
import Project from "../Project";
import styles from "./Projects.module.css";
import stylesTechnologies from "../Technologies/Technologies.module.css";
import Link from "next/link";
import Image from "next/image";

export type ProjectType = {
    id: string;
    name: string;
    decription: {
        fr: string;
        en: string;
    };
    abstract: {
        fr: string;
        en: string;
    };
    imgUrl: string;
    url: string;
    technologies: string;
}

type Props = {
    projects: ProjectType[];
}

 const Projects: FunctionComponent<Props> = ({projects}) => {
    const {language} = useContext(LanguageContext);
    const [projectDisplay, setProjectDisplay] = useState(1);

    const previousProject = () :void => {
        setProjectDisplay(n => n-1);
    }

    const nextProject = () :void => {
        setProjectDisplay(n => n+1);
    }

    return (
        <div className={styles.container}>
            <h2 className={stylesTechnologies.h2}>{language === "fr" ? "Mes projets" : "My projects"}</h2>
            <div className={styles.projects}>
                {(projectDisplay !== 1) ? <Image 
                    src="./images/swipeLeft.svg"
                    alt="Swipe to the left"
                    height={100}
                    width={50}
                    className={styles.scrollLeft}
                    onClick={previousProject}
                /> : <div className={styles.whiteDiv}></div>}
                <Project project={projects[0]} projectDisplay={projectDisplay} number={1}/>
                <Project project={projects[1]} projectDisplay={projectDisplay} number={2}/>
                <Project project={projects[2]} projectDisplay={projectDisplay} number={3}/>
                {(projectDisplay !== 3) ? <Image 
                    src="./images/swipeRight.svg"
                    alt="Swipe to the left"
                    height={100}
                    width={50}
                    className={styles.scrollRight}
                    onClick={nextProject}
                /> : <div className={styles.whiteDiv}></div>}
            </div>
            <Link href="./projectsPage">Voir plus...</Link>
        </div>
    )
}

export default Projects;
