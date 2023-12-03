/* eslint-disable @next/next/no-img-element */
import styles from "./Header.module.css";
import { ChangeEvent, FunctionComponent, PropsWithChildren, SyntheticEvent, useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { LanguageContext } from "@/lib/contexts/languageContext";
import Navigation from "../Navigation";

type Props = PropsWithChildren<{}>

const Header: FunctionComponent<Props> = () => {
    const router = useRouter();
    const {language, toggleLanguage} = useContext(LanguageContext);
    const [displayNavSmallScreen, setDisplayNavSmallScreen] = useState(false);

    const backToHomePage = (): void => {
        router.push('/');
    }

    const chooseLanguage = (e:ChangeEvent<HTMLSelectElement>):void => {
        toggleLanguage(e.currentTarget.value);
    }

    const toggleDisplayNav = (): void => {
        setDisplayNavSmallScreen(!displayNavSmallScreen);
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
                <div className={styles.navBigScreen}>
                    <Navigation />
                </div>
                <select value={language} className={styles.select} onChange={e => chooseLanguage(e)}>
                    <option value="fr">FR</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <img src="/images/navigation.svg" 
                alt="Navigation Logo" 
                className={styles.navLogo}
                onClick={toggleDisplayNav}
            />
            {displayNavSmallScreen && <div className={styles.navSmallScreenContainer} onClick={toggleDisplayNav}>
                <div onClick={(e:SyntheticEvent<HTMLDivElement>) => {e.stopPropagation()}} className={styles.navSmallScreen}>
                    <Navigation toggleDisplayNav={toggleDisplayNav}/>
                </div>
            </div>}
        </header>
    )
}

export default Header;
