import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useContext } from 'react';
import { LanguageContext } from '@/lib/contexts/languageContext';
import Image from 'next/image';
import { useRouter } from 'next/router';
import type { Technology } from '@/components/Technologies';
import Technologies from '@/components/Technologies';
import type { ProjectType } from '@/components/Projects';
import Projects from '@/components/Projects';

type Props = {
  frContent: {
    title: string;
    description: {
      greeting: string;
      occupation: string;
    }
  };
  enContent: {
    title: string;
    description: {
      greeting: string;
      occupation: string;
    }
  };
  technologies: Technology[],
  projects: ProjectType[]
}

export default function Home({frContent, enContent, technologies, projects}: Props) {
  const {language} = useContext(LanguageContext);
  const content = language === "fr" ? frContent : enContent;
  const router = useRouter();

  const moreInfo = ():void => {
    router.push('/aboutPage');
  }

  return (
    <>
      <Head>
        <title>Nabil Bekka</title>
        <meta name="description" content="Nabil Bekka portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/NB.png" />
      </Head>
      <main>
        <section className={styles.homePage}>
          <div className={styles.presentation}>
            <p className={styles.p}>{content.description.greeting}</p>
            <h1 className={styles.h1}>Nabil Bekka</h1>
            <h2 className={styles.h2}>{content.description.occupation}</h2>
            <div className={styles.contact}>
              <button 
                onClick={moreInfo}
                className={styles.button}>
                  {language === 'fr' ? "Me contacter" : "Contact me"}
              </button>
              <div>
                <a href="https://github.com/NabilBekka" target="_blanc"><Image 
                    src="/images/github.svg"
                    width={50}
                    height={50}
                    alt="Github logo"
                    className={styles.social}
                /></a>
                <a href="https://www.linkedin.com/in/nabilbekka/" target="_blanc"><Image 
                    src="/images/linkedin.svg"
                    width={50}
                    height={50}
                    alt="Github logo"
                    className={styles.social}
                /></a>
              </div>
            </div>
          </div>
          <Image 
            src="/images/NB.png"
            height={440}
            width={383}
            alt={language==='fr' ? 'Photo de profil' : 'Profil picture'}
            className={styles.img}
          />
        </section>
        <aside className={styles.aside}>
            <Technologies technologies={technologies}/>
            <Projects projects={projects} />
        </aside>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const content = await import('@/lib/datas/siteContent.json');
  const frContent = content.french;
  const enContent = content.english;

  const datas = await import("@/lib/datas/datas.json");
  const technologies: Technology[] = datas.technologies;
  const projects: ProjectType[] = datas.myProjects;
  return {
    props: {
      frContent,
      enContent,
      technologies,
      projects
    }
  }
}