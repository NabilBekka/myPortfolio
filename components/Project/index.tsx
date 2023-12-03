import { FunctionComponent, useContext } from "react";
import type { ProjectType } from "../Projects";
import Image from "next/image";
import { LanguageContext } from "@/lib/contexts/languageContext";
import styles from "./Project.module.css";
import { useRouter } from "next/router";

type Props = {
    project: ProjectType;
    projectDisplay?: number;
    number?: number;
}

const Project: FunctionComponent<Props> = ({project, projectDisplay = 0, number = 0}) => {
    const {id, name, abstract, imgUrl} = project;
    const {language} = useContext(LanguageContext);
    const router = useRouter();

    const condition = projectDisplay === 0 ? false : (projectDisplay!==number );

    const redirect = (): void => {
      router.push(`/projectsPage/${id}`);
    }

    return (
      <div className={`${styles.project} ${condition && styles.display}`}>
          <h3 className={styles.h3}>{name}</h3>
          <Image 
            src={imgUrl[0]}
            alt= {name}
            width={180}
            height={180}
            className={styles.img}
          />
          <p className={styles.p}>{language === "fr" ? abstract.fr : abstract.en}</p>
          <button className={styles.btn} onClick={redirect}>{language==="fr" ? "Plus d'infos":"More info"}</button>
      </div>
    )
}

export default  Project;