export default function TechItem({tech}) {
   return (
    <div key={tech.name} className="flex gap-2 p-2 h-10 tech-border min-w-[8rem] max-w-[10rem]">
        <img src={tech.img} className="w-6 h-6" />
        <p>{tech.name}</p>
    </div>
   );
}