
import InvalidCommandTerminal from "./element/InvalidCommand";
import CurrentlyLearning from "./element/CurrenlyLearning";
import Hobbies from "./element/Hobbies";
import FunFact from "./element/FunFact";
import HelpCommandContent from "./element/HelpCommand";
import ListContent from "./element/ListWebsiteContent";
import ThreadScanner from "./element/ThreadScanner";



export default function ContentElements({ command }) {


    if(command.startsWith('sudo')){
        return(
            <div className="text-red-400 p-6 rounded-b-md min-h-[180px] border-t border-red-500">
                <p>🛑 Hold up!</p>
                <p>You have attempted to invoke <code>sudo</code>.</p>
                <p>Unfortunately, you are not in the <code>sudoers</code> file.</p>
                <p>This incident will be reported... 😈</p>
                <p className="mt-4 text-yellow-300 italic">
                Tip: You don’t need root access to discover the secrets here. Just look closely. 👁
                </p>
            </div>
        )
    }

    switch (command) {
        case "curl currently-learning":
            return <CurrentlyLearning />
        case "npm i hobbies":
            return <Hobbies />
        case "npm run fun-fact.js":
            return <FunFact />
        case 'cd system':
        case 'cd personal':
            return (
              <div className="text-white p-5  border-t border-blue-500 space-y-2">
                <p className="text-green-400">Directory changed!</p>
                <p className="text-yellow-300">📂 Command list updated!</p>
                
              </div>

            )
        case 'help':
            return <HelpCommandContent />
        case 'clear':
            return(
                <p className="text-green-400">Terminal Cleared!</p>
            )
        case 'ls':
            return <ListContent />
        case 'scan':
            return <ThreadScanner />
    }

    return <InvalidCommandTerminal command={command} />
}
