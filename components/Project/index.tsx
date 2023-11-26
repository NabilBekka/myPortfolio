import { FunctionComponent, useContext } from "react";
import type { ProjectType } from "../Projects";
import Image from "next/image";
import { LanguageContext } from "@/lib/contexts/languageContext";
import styles from "./Project.module.css";

type Props = {
    project: ProjectType;
    projectDisplay?: number;
    number?: number;
}

const Project: FunctionComponent<Props> = ({project, projectDisplay = 0, number = 0}) => {
    const {name, abstract, imgUrl} = project;
    const {language} = useContext(LanguageContext);

    const condition = projectDisplay === 0 ? false : (projectDisplay!==number )

    return (
      <div className={`${styles.project} ${condition && styles.display}`}>
          <h3 className={styles.h3}>{name}</h3>
          <Image 
            src={imgUrl}
            alt= {name}
            width={180}
            height={180}
            className={styles.img}
          />
          <p className={styles.p}>{language === "fr" ? abstract.fr : abstract.en}</p>
      </div>
    )
}

export default  Project;