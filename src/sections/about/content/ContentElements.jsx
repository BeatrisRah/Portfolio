
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
            return(
                <p>Command list changed!</p>
            )
        case 'help':
            return <HelpCommandContent />
    }

    return <InvalidCommandTerminal command={command} />
}
