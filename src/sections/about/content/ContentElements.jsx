import { useMemo } from "react";


const funFacts = [
    "Coffee is my compiler.",
    "JavaScript is my love language.",
    "I treat 'npm run dev' like a morning ritual.",
    "I like bunnies. Wait no I adore them."
];
export default function ContentElements({ command }) {
    const randomFact = useMemo(() => {
        return funFacts[Math.floor(Math.random() * funFacts.length)];
    }, []);


    switch (command) {
        case "curl currently-learning":
            return (
                <div className=" text-white p-6 rounded-b-md font-mono space-y-4">
                    <p className="text-green-400">
                        ➤ Here’s what I’m learning right now:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>
                            <span className="text-pink-400">React Performance</span> –
                            optimizing re-renders, memoization & lazy loading
                        </li>
                        <li>
                            <span className="text-yellow-300">Framer Motion</span> – building
                            fluid animations for UI & transitions
                        </li>
                        <li>
                            <span className="text-blue-400">Three.js</span> – learning 3D
                            rendering and scene creation
                        </li>
                        <li>
                            <span className="text-teal-300">Tailwind + ShadCN</span> –
                            crafting clean & responsive UI components
                        </li>
                    </ul>
                </div>
            );
        case "npm i hobbies":
            return (
                <div className="text-white p-6  font-mono border-t border-green-400 space-y-1">
                    <p className="text-green-400">➤ Installing hobbies@latest...</p>
                    <p className="text-green-400">➤ Fetching metadata...</p>
                    <p className="text-green-400">➤ Resolving packages...</p>

                    <ul className="pl-4 space-y-1">
                        <li>
                            <span className="text-yellow-300">+ music-jams@1.2.0</span> 🎧 –
                            playlists for every coding mood
                        </li>
                        <li>
                            <span className="text-pink-400">+ pixel-art@0.8.7</span> 🎨 –
                            drawing tiny worlds, one pixel at a time
                        </li>
                        <li>
                            <span className="text-blue-300">+ night-coding@3.5.1</span> 🌙 –
                            boosted by lo-fi & caffeine
                        </li>
                        <li>
                            <span className="text-rose-400">+ cozy-crocheting@2.3.0</span> 🧶
                            – creating more than code
                        </li>
                    </ul>

                    <p className="text-green-400">➤ Installed 4 packages in 2.7s</p>
                    <p className="text-green-400">
                        ➤ You’re now ready to relax and vibe ✨
                    </p>
                </div>
            );
        case "npm run fun-fact.js":
            return (
                <div className="text-white p-6 font-mono space-y-2">
                    <p className="text-green-400">&gt; fun-fact@1.0.0 start</p>
                    <p className="text-green-400">&gt; node scripts/fun-fact.js</p>

                    <p className="text-gray-400 mt-2">// pulling from brain.js...</p>
                    <p>
                        <span className="text-blue-400">const</span> fact{" "}
                        <span className="text-pink-500">=</span>{" "}
                        <span className="text-yellow-300">"{randomFact}"</span>
                    </p>
                    <p>
                        <span className="text-pink-500">console</span>.log(
                        <span className="text-blue-400">fact</span>)
                    </p>
                    <p className="text-yellow-300 mt-2">💡 {randomFact}</p>

                </div>
            );
    }

    return <p>Invalid command</p>;
}
