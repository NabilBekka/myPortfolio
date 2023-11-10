import { LanguageContext } from "@/lib/contexts/languageContext"
import Image from "next/image"
import { useContext } from "react"

const Custom404 = () => {
    const {language} = useContext(LanguageContext);
  return (
    <div className="errorPage">
        <Image 
            src="/images/NB.png"
            height={440}
            width={383}
            alt="Logo NB"
          />
          <h1>{language==="fr" ? "404 - Page Introuvale!" : "404 - Page Not Found!"}</h1>
    </div>
  )
}

export default Custom404
