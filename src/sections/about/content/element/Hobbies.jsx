import { useState, useEffect } from 'react';

export default function Hobbies() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setStep((prevStep) => {
                if (prevStep < 8) {
                    return prevStep + 1;
                } else {
                    clearInterval(interval);
                    return prevStep;
                }
            });
        }, 1000); // 1000ms (1 second) delay between each step

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="text-white p-6 font-mono border-t border-green-400 space-y-1">
            {step >= 1 && (
                <p className="text-green-400">➤ Installing hobbies@latest...</p>
            )}
            {step >= 2 && (
                <p className="text-green-400">➤ Fetching metadata...</p>
            )}
            {step >= 3 && (
                <p className="text-green-400">➤ Resolving packages...</p>
            )}

            {step >= 4 && (
                <ul className="pl-4 space-y-1">
                    <li>
                        <span className="text-yellow-300">+ music-jams@1.2.0</span> 🎧 – playlists for every coding mood
                    </li>
                    {step >= 5 && (
                        <li>
                            <span className="text-pink-400">+ digital-art@0.8.7</span> 🎨 – drawing tiny worlds, one pixel at a time
                        </li>
                    )}
                    {step >= 6 && (
                        <li>
                            <span className="text-blue-300">+ night-coding@3.5.1</span> 🌙 – boosted by lo-fi & caffeine
                        </li>
                    )}
                    {step >= 7 && (
                        <li>
                            <span className="text-rose-400">+ cozy-crocheting@2.3.0</span> 🧶 – creating more than code
                        </li>
                    )}
                </ul>
            )}

            {step >= 8 && (
                <p className="text-green-400">➤ Installed 4 packages in 2.7s</p>
            )}
        </div>
    );
}