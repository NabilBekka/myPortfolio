import { FunctionComponent } from "react";
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
    <div className={styles.technologies}>
        {technologies.map((tech: Technology) => <Technologie name={tech.name} urlLogo={tech.urlLogo} key={tech.name}/> )}
    </div>
  )
}

export default Technologies;
