import { useMemo, useState, useEffect } from "react";

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

    const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => {
        if (prevStep < 6) {
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
    <div className="text-white p-6 font-mono space-y-2">
      {step >= 1 && <p className="text-green-400">&gt; fun-fact@1.0.0 start</p>}
      {step >= 2 && <p className="text-green-400">&gt; node scripts/fun-fact.js</p>}
      
      {step >= 3 && <p className="text-gray-400 mt-2">// pulling from brain.js...</p>}
      {step >= 4 && (
        <p>
          <span className="text-blue-400">const</span> fact{" "}
          <span className="text-pink-500">=</span>{" "}
          <span className="text-yellow-300">"{randomFact}"</span>
        </p>
      )}
      {step >= 5 && (
        <p>
          <span className="text-pink-500">console</span>.log(
          <span className="text-blue-400">fact</span>)
        </p>
      )}
      {step >= 6 && (
        <p className="text-yellow-300 mt-2">💡 {randomFact}</p>
      )}
    </div>
)}