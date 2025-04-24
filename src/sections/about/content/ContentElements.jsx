
import InvalidCommandTerminal from "./InvalidCommand";
import CurrentlyLearning from "./CurrenlyLearning";
import Hobbies from "./Hobbies";
import FunFact from "./FunFact";
import HelpCommandContent from "./HelpCommand";



export default function ContentElements({ command }) {

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
    }

    return <InvalidCommandTerminal command={command} />
}
