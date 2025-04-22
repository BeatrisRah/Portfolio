import { useState } from "react";

export default function Terminal({ onChangeCommand }) {
    const [input, setInputValue] = useState('')

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("User entered:", input);

            setInputValue("");
        }
    };

    return (
        <div className="bg-[#11121B]/80 w-1/2">
            <h1 className="p-4 text-center jersay text-xl">Powershell</h1>
            <div className="h-50">
                <div className="flex gap-2 p-2">
                    <p>{"C:\\Betty\\about>"}</p>
                    <input
                        type="text"
                        placeholder="Type something..."
                        className="outline-none border-none focus:ring-0 focus:border-transparent"
                        value={input}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></input>
                </div>

            </div>
        </div>
    );
}