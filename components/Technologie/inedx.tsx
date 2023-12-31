import Image from "next/image";
import styles from "./Tachnologie.module.css";
import { FunctionComponent } from "react";
import type { Technology } from "../Technologies";

const Technologie: FunctionComponent<Technology> = ({name, urlLogo}) => {
  return (
    <div className={styles.technologie}>
        <Image 
            src={urlLogo}
            alt={`${name} logo`}
            width={20}
            height={20}
            className={styles.img}
        />
        <h2 className={styles.title}>{name}</h2>
    </div>
  )
}

export default Technologie;