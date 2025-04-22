import { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { personalCommandList, SystemCommnadList } from "../commandListJson";

export default function CommandList({tabType = 'personal'}) {
    const [isOpen, setIsOpen] = useState(false);
    const [tab, setTab] = useState(tabType);

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
                    <p className="mt-4">personal/system</p>
                    <ul className="mt-3 space-y-2">
                        {tab === 'personal' && personalCommandList.map(formatCommentInLine)}
                        {tab === 'system' && SystemCommnadList.map(formatCommentInLine)}
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