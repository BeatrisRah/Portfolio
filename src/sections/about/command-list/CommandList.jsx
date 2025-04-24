import { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { personalCommandList, systemCommnadList } from "../commandListJson";

const tabTypes = ['personal', 'system']

export default function CommandList({tabType}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="w-1/2 bg-[#11121B]/70">
            <div
                onClick={toggle}
                className="flex items-center justify-between cursor-pointer p-4 select-none bg-[#D845A8]"
            >
                <h2 className="text-xl jersay text-[#13131D]">List of Commands</h2>
                {isOpen ? <IoMdArrowDropup className="w-5 h-5 text-black" /> : <IoMdArrowDropdown className="w-5 h-5 text-black" />}
            </div>

            {isOpen && (
                <>
                    <div className="flex mt-2 px-2">
                        {tabTypes.map((el, i) => <>
                            <p 
                                key={i}
                                className={`text-pink-500 ${tabType === el ? 'border-b-1 border-pink-500' :''}`}
                            >{el}</p>


                            {i < tabTypes.length - 1 && (
                                <span className="mx-3 text-pink-500/50 select-none">/</span>
                            )}
                        </>)}
                    </div>
                    <ul className="mt-3 space-y-2">
                        {tabType === 'personal' && personalCommandList.map(formatCommentInLine)}
                        {tabType === 'system' && systemCommnadList.map(formatCommentInLine)}
                    </ul>
                </>
            )}
        </div>
    );
}


function formatCommentInLine(el) {
    const maxWidth = 60;
    const command = el.name;
    const comment = el.description;

    const firstLine = `${command} // ${comment}`;
    const words = firstLine.split(" ");
    const lines = [];
    let currentLine = "";

    for (let word of words) {
        if ((currentLine + word).length > maxWidth) {
            lines.push(currentLine.trim());
            currentLine = "// " + word + " ";
        } else {
            currentLine += word + " ";
        }
    }
    if (currentLine) lines.push(currentLine.trim());

    return (
        <li key={el.name} className="p-2 font-mono text-sm whitespace-pre">
            {lines.map((line, idx) => {
                if (idx === 0) {
                    const [beforeComment, ...after] = line.split("//");
                    return (
                        <div key={idx}>
                            <span className="text-gray-100">{beforeComment.trim()}</span>
                            {" "}
                            <span className="text-gray-500">//{after.join("//").trim()}</span>
                        </div>
                    );
                } else {
                    return (
                        <div key={idx} className="text-gray-500">
                            {" ".repeat(command.length + 1)}// {line.replace(/^\/\/\s*/, "").trim()}
                        </div>
                    );
                }
            })}
        </li>
    );
}