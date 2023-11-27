import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { SyntheticEvent, useContext, useRef, useState } from "react";
import styles from "./contactPage.module.css";

type FormContact = {
    name: string;
    email: string;
    message: string
}

export default function ContactPage () {
    const {language} = useContext(LanguageContext);
    const [formData, setFormData] = useState<FormContact>();
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if (nameRef.current?.value && emailRef.current?.value && messageRef.current?.value){
            setFormData({
                name: nameRef.current.value,
                email: emailRef.current.value,
                message: messageRef.current.value,
            });
            nameRef.current.value = "";
            emailRef.current.value = "";
            messageRef.current.value = "";
        }
    }

    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "Me contacter" : "Contact"}`}</title>
            <meta name="description" content= "Nabil Bekka , contact" />
        </Head>
        <main className={styles.main}>
            <div className={styles.div}>
                <h2 className={styles.h2}>{language === "fr" ? "Me contacter" : "Contact me"}</h2>
                <p className={styles.p}>{language === "fr" ? 
                    <>Vous pouvez m&apos;écrire sur <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc">
                    linkedin</a>, par email à nabilbekka@outlook.fr ou juste ici:</> : 
                    <>You can write to me on <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc">
                    linkedin</a>, by email at nabilbekka@outlook.fr or right here:</>
                }</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.inputs}>
                        <input ref={nameRef} className={styles.input} type="text" placeholder={language==="fr" ? "NOM" : "NAME"} required/>
                        <input ref={emailRef} className={styles.input} type="email" placeholder="EMAIL" required/>
                    </div>
                    <textarea ref={messageRef} className={styles.textarea} name="Message" placeholder="MESSAGE" required></textarea>
                    <button  className={styles.button}>{language==="fr" ? "SOUMETTRE" : "SUBMIT"}</button>
                </form>
            </div>
        </main>
    </>
}