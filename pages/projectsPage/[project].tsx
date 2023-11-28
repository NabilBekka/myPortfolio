import type { ProjectType } from "@/components/Projects";
import { GetStaticPropsContext } from "next";

type Props = {
    project: ProjectType;
}

export default function ProjectDetails({project}:Props) {
  return (
    <main>
      {JSON.stringify(project)}
    </main>
  )
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
    const datas = await import("@/lib/datas/datas.json");

    if (context.params?.project){
        const projectSelected = context.params?.project as string;
        const project = datas.myProjects.find((project: ProjectType) => project.id === projectSelected) as ProjectType;

        if(project){
            return {
                props: {
                    project
                }
            }
        } else {
            return {
                redirect: {
                    destination: '/projectsPage'
                }
            }
        }
    } 
}

export const getStaticPaths = async () => {
    const datas = await import("@/lib/datas/datas.json");
    const paths = datas.myProjects.map(item => ({
       params: {project: item.id}
    }))
    
    return {
       paths,
       fallback: true
    }
}
    
