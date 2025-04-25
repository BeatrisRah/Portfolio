import { Element } from "react-scroll";
import { projects } from "./projects";
import ProjectItem from "./ProjectItem";




export default function Projects() {
   return (
        <Element name="projects" className="flex gap-2 p-5 mb-20 flex-wrap ml-10 xl:ml-40">
            {projects.map(p => <ProjectItem project={p} />)}
        </Element>
   );
}