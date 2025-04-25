import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import Content from "./content/Content";
import CommandList from "./command-list/CommandList";
import Terminal from "./terminal/Terminal";

export default function About() {
    const [currentCommand, setCurrentCommand] = useState('')
    const [tab, setTab] = useState('personal');

    useEffect(() => {
        if (currentCommand === 'cd system' || currentCommand === 'cd personal')
            setTab(currentCommand.replace('cd ', ''))
    }, [currentCommand])

    return (
        <Element name="about" className="min-h-screen p-8 lg:w-11/12 mt-20 mx-auto">
            <div className="flex gap-2">
                <Content command={currentCommand} />

                <div className="w-2/5 h-98 overflow-scroll lg:h-auto text-white p-6 font-mono border-2 border-pink-400 space-y-4">
                    <p className="text-pink-400 hover:text-red-200">➤ Welcome to the Terminal!</p>
                    <p className="text-sm lg:text-md text-gray-400">
                        Hello! I'm here to guide you through the terminal. Follow the instructions below to get started:
                    </p>

                    <p className="text-gray-200 mt-2">
                        1. Use the <span className="text-yellow-300">npm</span> command to install new packages.
                    </p>
                    <p className="text-gray-200">
                        2. Type <span className="text-yellow-300">help</span> to see a list of available commands. <span className="text-gray-400 italic">(or simply click on the list)</span>
                    </p>
                    <p className="text-gray-200">
                        3. You can also use <span className="text-yellow-300">clear</span> to clean the terminal screen.
                    </p>

                    <p className="text-gray-400 mt-4 text-sm lg:text-md">
                        Ready to start? Just type a command in the powershell and press Enter!
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap-reverse lg:flex-nowrap items-start gap-4 mt-6">
                <CommandList tabType={tab} />
                <Terminal onChangeCommand={setCurrentCommand} command={currentCommand} />
            </div>

        </Element>
    );
}