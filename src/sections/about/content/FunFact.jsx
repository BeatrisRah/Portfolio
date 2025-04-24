import { useMemo } from "react";

const funFacts = [
    "Coffee is my compiler.",
    "JavaScript is my love language.",
    "I treat 'npm run dev' like a morning ritual.",
    "I like bunnies. Wait no I adore them."
];
export default function FunFact() {
    const randomFact = useMemo(() => {
        return funFacts[Math.floor(Math.random() * funFacts.length)];
    }, []);

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
)}