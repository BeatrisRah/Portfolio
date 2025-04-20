export default function TechItem({tech}) {
   return (
    <div key={tech.name} className="flex gap-2 w-40 p-2 h-10 tech-border">
        <img src={tech.img} className="w-6 h-6" />
        <p>{tech.name}</p>
    </div>
   );
}