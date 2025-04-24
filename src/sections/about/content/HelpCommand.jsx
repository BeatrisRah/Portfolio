import { personalCommandList, systemCommnadList } from "../commandListJson";

export default function HelpCommandContent() {
    const commands = [...personalCommandList, ...systemCommnadList]
   return (
    
    <div className="text-white p-6 border-t border-green-400">
      <p className="text-green-400 mb-4">Available Commands:</p>
      <ul className="space-y-2">
        {commands.map(cmd => (
          <li key={cmd.name}>
            <span className="text-yellow-300">{cmd.name}</span>{" "}
            <span className="text-gray-400">– {cmd.description}</span>
          </li>
        ))}
      </ul>
    </div>
   );
}