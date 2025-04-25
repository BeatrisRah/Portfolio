import { useEffect, useState } from "react";

export default function Terminal({ onChangeCommand, command }) {
    const [input, setInputValue] = useState('')
    const [history, setHistory] = useState([])

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            onChangeCommand(input)
            setHistory(prev => [...prev, input])

            setInputValue("");
        }
    };
    useEffect(() => {
        if(command === 'clear') setHistory([])
    }, [command])

    return (
        <div className="bg-[#11121B]/80 w-full lg:w-1/2 h-70 flex flex-col">
            <h1 className="p-4 text-center jersay text-xl">Powershell</h1>

            <div className="flex-1 overflow-y-auto p-2">
                <ul>
                    {history.map((el, idx) => (
                        <li key={idx} className="flex gap-2">
                            <p className="text-gray-300">{"C:\\Betty\\about>"}</p>
                            <span>{el}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-2 p-2 border-t border-white/10">
                <p>{"C:\\Betty\\about>"}</p>
                <input
                    type="text"
                    placeholder="Type something..."
                    className="flex-1 bg-transparent text-pink-400 outline-none border-none focus:ring-0 focus:border-transparent"
                    value={input}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
}