import { useState } from "react";
import { Element } from "react-scroll";
import Content from "./content/Content";
import CommandList from "./command-list/CommandList";
import Terminal from "./terminal/Terminal";

export default function About() {
    const [currentCommand, setCurrentCommand] = useState('')
   return (
       <Element name="about" className="min-h-screen p-8 w-11/12 mx-auto">
        <div>
            <Content command={currentCommand} />
        </div>
        <div className="flex items-start">
            <CommandList />
            <Terminal onChangeCommand={setCurrentCommand} />
        </div>

       </Element>
   );
}