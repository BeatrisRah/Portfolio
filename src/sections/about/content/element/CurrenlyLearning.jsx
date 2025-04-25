export default function CurrentlyLearning() {
   return (
    <div className=" text-white p-6 rounded-b-md font-mono space-y-4">
    <p className="text-green-400">
        ➤ Here’s what I’m learning right now:
    </p>
    <ul className="list-disc pl-5 space-y-1">
        <li>
            <span className="text-pink-400">C# WPF</span> –
            Building rich desktop applications using XAML and MVVM architecture.
        </li>
        <li>
            <span className="text-yellow-300">PostgreSQL</span> – 
            Deepening understanding of relational database design, advanced SQL, and performance tuning.
        </li>
        <li>
            <span className="text-blue-400">TypeScript</span> – 
            Strengthening front-end development with type safety and scalable code architecture.
        </li>
        <li>
            <span className="text-red-500">Phaser</span> –
            Exploring 2D game development concepts and building interactive browser-based games.
        </li>
        <li>
            <span className="text-teal-300">React Native</span> –
            Developing cross-platform mobile apps with modern JavaScript frameworks and native components.
        </li>
    </ul>
</div>
   );
}