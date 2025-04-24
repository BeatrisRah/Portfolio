
import InvalidCommandTerminal from "./InvalidCommand";
import CurrentlyLearning from "./CurrenlyLearning";
import FunFact from "./FunFact";




    switch (command) {
        case "curl currently-learning":
            return <CurrentlyLearning />
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
            return <FunFact />
        case 'cd system':
        case 'cd personal':
            return(
                <p>Command list changed!</p>
            )
    }

    return <InvalidCommandTerminal command={command} />
}
