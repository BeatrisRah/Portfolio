import { useEffect, useState } from "react";


const fakeLogs = [
    "Initializing scanner...",
    "Establishing neural sync...",
    "Bypassing firewalls...",
    "Scanning memory banks...",
    "Locating open threads...",
    "Thread #014 found...",
    "Thread #087 found...",
    "Decrypting hidden layers...",
    "🧠 Suspicious activity detected...",
    "Running deep diagnostics...",
];

export default function ThreadScanner() {
    const [logIndex, setLogIndex] = useState(0);

    useEffect(() => {
        if (logIndex < fakeLogs.length - 1) {
            const timeout = setTimeout(() => setLogIndex(logIndex + 1), 300);
            return () => clearTimeout(timeout);
        }
    }, [logIndex]);
    return (
            <div className="text-green-400 p-6 rounded-b-md  border-t border-green-500">
                {fakeLogs.slice(0, logIndex + 1).map((log, i) => (
                    <p key={i} className="animate-pulse">{log}</p>
                ))}

                {logIndex === fakeLogs.length - 1 && (
                    <div className="mt-4 text-red-500">
                        <p>Ooh Oh... </p>
                        <p>It appears you've been hacked by a bunny!</p>
                        <p className="mt-2 text-sm text-gray-400">Better get them carrots 👀🥕</p>
                    </div>
                )}
            </div>
    );
}