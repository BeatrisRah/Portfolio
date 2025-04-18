import { Element } from "react-scroll";
import { projects } from "./projects";
import ProjectItem from "./ProjectItem";




export default function Projects() {
   return (
        <Element name="projects" className="min-h-screen flex flex-col flex-wrap">
            {projects.map(p => <ProjectItem project={p} />)}
        </Element>
   );
}