export default function LinksTab({links}) {
   return (
    <ul>
        <li className="mb-2">
            <span className="font-bold">GitHub:</span> <br /> 
            <a href={links.git} target="_blank" rel="noopener noreferrer" className="text-pink-400 break-words" >{links.git}</a>
        </li>
       
        <li>
            <span className="font-bold">Hosted:</span> <br /> 
            {links.hosted ? 
            <a href={links.hosted} target="_blank" rel="noopener noreferrer" className="text-pink-400"  >{links.hosted}</a>:
            <p className="italic text-gray-300">Coming Soon</p> }
        
        </li>
    </ul>
   );
}