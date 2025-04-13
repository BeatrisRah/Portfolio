import { Link } from "react-scroll";

export default function SideBarItem({path, name, icon}) {
   return (
    <Link 
    to={path} 
    smooth={true}
    duration={500}
    offset={-100} 
    spy={true}
    className="flex items-center w-full p-3 leading-tight transition-all outline-none text-start"
    activeClass="bg-[#F83CB4]/50"
    >
    
        <div className="grid mr-4 place-items-center">
        {icon}
        </div>
        {name}
    </Link>
   );
}