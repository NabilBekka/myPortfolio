import { FunctionComponent, useState } from "react";
import Technologie from "../Technologie/inedx";
import styles from "./Technologies.module.css";
import Image from "next/image";

export type Technology = {
    name: string;
    urlLogo: string;
  };

type Props = {
    technologies: Technology[];
}

const Technologies: FunctionComponent<Props> = ({technologies}) => {
  const [n, setN] = useState(0);

  const increment = ():void => {
    if (n < (technologies.length - 3)){
      setN(n => n+1);
    }
  }

  const decrement = ():void => {
    if (n > 0){
      setN(n => n-1);
    }
  }
  return (
    <div className={styles.technologies}>
        {/* {technologies.map((tech: Technology) => <Technologie name={tech.name} urlLogo={tech.urlLogo} key={tech.name}/> )} */}
        {
          n > 0 ? <Image 
            src="/images/swipeLeft.svg"
            alt="Swipe left"
            width={50}
            height={50}
            className={styles.swipe}
            onClick={decrement}
          /> : <div className={styles.div}></div>
        }
        <Technologie name={technologies[0+n].name} urlLogo={technologies[0+n].urlLogo}/>
        <Technologie name={technologies[1+n].name} urlLogo={technologies[1+n].urlLogo}/>
        <Technologie name={technologies[2+n].name} urlLogo={technologies[2+n].urlLogo}/>
        {
          (n < (technologies.length - 3)) ? <Image 
            src="/images/swipeRight.svg"
            alt="Swipe right"
            width={50}
            height={50}
            className={styles.swipe}
            onClick={increment}
          /> : <div className={styles.div}></div>
        }
    </div>
  )
}

export default Technologies;
