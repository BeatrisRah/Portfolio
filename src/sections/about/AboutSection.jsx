import { useState } from "react";
import { Element } from "react-scroll";
import Content from "./content/Content";

export default function About() {
    const [currentCommand, setCurrentCommand] = useState('')
   return (
       <Element name="about" className="min-h-screen p-8">
        <div>
            <Content command={currentCommand} />
        </div>
        <div>

        </div>

       </Element>
   );
}