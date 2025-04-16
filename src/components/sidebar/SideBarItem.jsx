import { Link } from "react-scroll";

export default function SideBarItem({path, name, icon}) {
   return (
    <Link 
    to={path} 
    smooth={true}
    duration={500}
    offset={-100} 
    spy={true}
    className="flex items-center w-full p-3 transition-all outline-none text-lg"
    activeClass="bg-[#F83CB4]/50"
    >
    
        <div className="grid mx-4 place-items-center">
        {icon}
        </div>
        {name}
    </Link>
   );
}