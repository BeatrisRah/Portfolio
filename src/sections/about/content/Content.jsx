import ContentElements from "./ContentElements";

export default function Content({command}) {
   

   return (
      <div className="w-3/5 h-[30rem] bg-[#11121B]/80">
         <div className="w-full bg-[#11121B]/80 p-2">
            <p className="jersay text-xl px-2">Content</p>
         </div>
         <div className="relative w-full h-11/12">
            {command.trim() === '' && <WaitingState />}
            {command.trim() !== '' && <ContentElements command={command.trim()} />}
         </div>
      </div>
   );
}

function WaitingState(){
   return(
      <div className="flex items-end gap-2 absolute bottom-2 right-10 text-[#868383]">
      <p>Waiting for command...</p>
      <pre className="scale-x-[-1]">
{` /)/)
(.  .)`}
      </pre>
      </div>
   )
}