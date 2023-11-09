import { FunctionComponent, PropsWithChildren, createContext, useEffect, useState } from "react";

type Props = PropsWithChildren<{}>
interface contextType {
    language: string;
    toggleLanguage: (value: string) => void;
}

export const LanguageContext = createContext<contextType>({
    language: "fr",
    toggleLanguage: () => {}
});


const LanguageContextProvider: FunctionComponent<Props> = ({children}) => {
    const [language, setLanguage] = useState('fr');

    useEffect(() => {
        const lng = localStorage.getItem("language");
        setLanguage(lng! ? lng : "fr");
    }, []);

    const toggleLanguage = (value:string) : void => {
        setLanguage(value);
        /* We save the language in localStorage */
        localStorage.setItem("language", value);
    }
    return (
        <LanguageContext.Provider value={{language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContextProvider;
