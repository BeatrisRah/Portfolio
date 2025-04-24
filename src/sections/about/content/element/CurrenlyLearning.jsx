export default function CurrentlyLearning() {
   return (
    <div className=" text-white p-6 rounded-b-md font-mono space-y-4">
    <p className="text-green-400">
        ➤ Here’s what I’m learning right now:
    </p>
    <ul className="list-disc pl-5 space-y-1">
        <li>
            <span className="text-pink-400">C# WPF</span> –
             to create a Windows Desktop .NET application in C#
        </li>
        <li>
            <span className="text-yellow-300">PostgreSQL</span> – 
            relational database
        </li>
        <li>
            <span className="text-blue-400">TypeScript</span> – 
            types, enums, union types and more
        </li>
        <li>
            <span className="text-teal-300">Phaser</span> –
            game development using javascript
        </li>
    </ul>
</div>
   );
}