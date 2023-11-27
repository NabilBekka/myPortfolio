import Link from "next/link";
import styles from "../Header/Header.module.css";
import { FunctionComponent, useContext } from "react";
import { LanguageContext } from "@/lib/contexts/languageContext";

type Props = {
    toggleDisplayNav?: () => void;
}

const Navigation:FunctionComponent<Props> = ({toggleDisplayNav}) => {
    const {language} = useContext(LanguageContext);

    return (
        <nav className={styles.nav}>
            <Link onClick={toggleDisplayNav} className={styles.link} href='/'>{language === "fr" ? "Accueil" : "Home"}</Link>
            <Link onClick={toggleDisplayNav} className={styles.link} href='/projectsPage'>{language === "fr" ? "Mes projets" : "My projects"}</Link>
            <Link onClick={toggleDisplayNav} className={styles.link} href='/contactPage'>{language === "fr" ? "Me contacter" : "Contact"}</Link>
        </nav>
    )
}

export default  Navigation;
