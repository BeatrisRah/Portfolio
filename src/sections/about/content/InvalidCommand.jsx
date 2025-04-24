export default function InvalidCommandTerminal({ command = "npm run fly" }) {
    return (
        <div className="text-white p-6  border-t border-red-400 space-y-2">
        <p className="text-red-400">ERR!</p>
        <p className="text-yellow-300">Unknown command: `{command.split(" ").pop()}`</p>
        <p className="text-gray-400">
          It seems you're trying to be ✨ too powerful ✨
        </p>

        <p className="text-pink-400 mt-2">Here are some things you *can* do:</p>
        <ul className="list-disc pl-6 text-white">
          <li><span className="text-blue-400">curl currently-learning</span> – See what Im currently learning</li>
          <li><span className="text-blue-400">npm i hobbies</span> – Do we have hobbies in commond?</li>
          <li><span className="text-blue-400">npm run fun-fact</span> – Discover my secrets</li>
        </ul>

        <p className="text-red-500 mt-4">
          Tip: Try to run <span className="text-blue-400">help</span> for available commands.
        </p>
      </div>
    );
  }