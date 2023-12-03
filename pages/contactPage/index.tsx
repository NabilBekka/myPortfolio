import { LanguageContext } from "@/lib/contexts/languageContext";
import Head from "next/head";
import { useContext } from "react";
import styles from "./contactPage.module.css";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactPage () {
    const {language} = useContext(LanguageContext);
    const [state, handleSubmit] = useForm("xyyqqaka");

    return <>
        <Head>
            <title>{`Nabil Bekka | ${language === "fr" ? "Me contacter" : "Contact"}`}</title>
            <meta name="description" content= "Nabil Bekka , contact" />
        </Head>
        <main className={styles.main}>
            <div className={styles.div}>
            {
                state.succeeded ? <p className={styles.messageSent}>{language==="fr" ? "Votre message a bien été envoyer. Merci" : "Your message has been sent. THANKS"}</p> :
                <>
                    <h2 className={styles.h2}>{language === "fr" ? "Me contacter" : "Contact me"}</h2>
                    <p className={styles.p}>{language === "fr" ? 
                        <>Vous pouvez m&apos;écrire sur <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc">
                        linkedin</a>, par email à nabilbekka@outlook.fr ou juste ici:</> : 
                        <>You can write to me on <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc">
                        linkedin</a>, by email at nabilbekka@outlook.fr or right here:</>
                    }</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.inputs}>
                            <input className={styles.input} type="text" name="name" placeholder={language==="fr" ? "NOM" : "NAME"} required/>
                            <ValidationError prefix="Name" field="name" errors={state.errors}/>
                            <input className={styles.input} type="email" name="email" placeholder="EMAIL" required/>
                            <ValidationError prefix="Email" field="email" errors={state.errors}/>
                        </div>
                        <textarea className={styles.textarea} name="message" placeholder="MESSAGE" required></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors}/>
                        <button  className={styles.button} type="submit" disabled={state.submitting}>{language==="fr" ? "SOUMETTRE" : "SUBMIT"}</button>
                    </form>
                </>
            }
            </div>
        </main>
    </>
}