import { Element } from "react-scroll";
import { projects } from "./projects";
import ProjectItem from "./ProjectItem";




export default function Projects() {
   return (
        <Element name="projects" className="min-h-screen flex gap-2 flex-wrap">
            {projects.map(p => <ProjectItem project={p} />)}
        </Element>
   );
}