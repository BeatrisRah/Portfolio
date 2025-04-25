import { Link } from "react-scroll";
import { FaWrench } from "react-icons/fa6";
import { FaLaptopCode, FaBook, FaUserAlt } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";


export default function SmallMenu() {
    const navLinks = [
        {path: 'home', name:'Home', icon: <MdHomeFilled />},
        {path: 'tech', name:'Tech', icon: <FaWrench />},
        {path: 'projects', name:'Projects', icon: <FaLaptopCode />},
        {path: 'education', name:'Education', icon: <FaBook />},
        {path: 'about', name:'About me', icon: <FaUserAlt />}
    
    
    ]
    
    return (
        <ul className="menu bg-base-200 lg:menu-horizontal rounded-box xl:hidden">
            
            {navLinks.map(el => (
                <li>
                    <Link
                    to={el.path}
                    smooth={true}
                    duration={500}
                    offset={-100} 
                    spy={true}
                    activeClass="bg-[#F83CB4]"
                    >
                    {el.icon}
                    {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}