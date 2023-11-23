import { LanguageContext } from "@/lib/contexts/languageContext";
import Image from "next/image";
import styles from "./Footer.module.css";
import { FunctionComponent, useContext } from "react";

const Footer: FunctionComponent = () => {
    const {language} = useContext(LanguageContext);
    return (
        <footer>
            <h3 className={styles.h3}>{language==='fr' ? 'Me contacter' : 'Contact'}</h3>
            <p><span className={styles.email}>Email:</span> nabilbekka@outlook.fr</p>
            <div className={styles.socialNetworks}>
                <a href="https://github.com/NabilBekka" target="_blanc"><Image 
                    src="/images/github.svg"
                    width={40}
                    height={40}
                    alt="Github logo"
                /></a>
                <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc"><Image 
                    src="/images/linkedin.svg"
                    width={40}
                    height={40}
                    alt="Github logo"
                /></a>
            </div>
            <p>&copy;NabilBekka</p>
        </footer>
    )
}

export default Footer;
