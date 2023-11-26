import { FunctionComponent, useState } from "react";
import Technologie from "../Technologie/inedx";
import styles from "./Technologies.module.css";

export type Technology = {
    name: string;
    urlLogo: string;
  };

type Props = {
    technologies: Technology[];
}

const Technologies: FunctionComponent<Props> = ({technologies}) => {
  return (
    <div>
      <h2 className={styles.h2}>Technologies</h2>
      <div className={styles.technologies}>
        {technologies.map((tech: Technology) => <Technologie name={tech.name} urlLogo={tech.urlLogo} key={tech.name}/> )}
      </div>
    </div>
  )
}

export default Technologies;
