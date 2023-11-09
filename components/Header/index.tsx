import Link from "next/link";
import styles from "./Header.module.css";
import { ChangeEvent, FunctionComponent, PropsWithChildren, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LanguageContext } from "@/lib/contexts/languageContext";

type Props = PropsWithChildren<{}>

const Header: FunctionComponent<Props> = () => {
    const router = useRouter();
    const {language, toggleLanguage} = useContext(LanguageContext);

    const backToHomePage = (): void => {
        router.push('/');
    }

    const chooseLanguage = (e:ChangeEvent<HTMLSelectElement>):void => {
        toggleLanguage(e.currentTarget.value);
    }
    return (
        <header className={styles.header}>
            <Image 
                src="/images/NB.png"
                width={292}
                height={248}
                className={styles.logo}
                alt="Logo NB"
                onClick={backToHomePage}
            />
            <div className={styles.navDiv}>
                <nav className={styles.nav}>
                    <Link className={styles.link} href='/'>{language === "fr" ? "Accueil" : "Home"}</Link>
                    <Link className={styles.link} href='/about'>{language === "fr" ? "À propos" : "About"}</Link>
                    <Link className={styles.link} href='/myProjects'>{language === "fr" ? "Mes projets" : "My projects"}</Link>
                    <Link className={styles.link} href='/contactMe'>{language === "fr" ? "Me contacter" : "Contact"}</Link>
                </nav>
                <select value={language} className={styles.select} onChange={e => chooseLanguage(e)}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
        </header>
    )
}

export default Header;
