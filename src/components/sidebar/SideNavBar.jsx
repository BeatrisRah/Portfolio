import SideBarItem from "./SideBarItem";
import { FaWrench } from "react-icons/fa6";
import { FaLaptopCode, FaBook, FaUserAlt } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";


const navLinks = [
    {path: 'home', name:'Home', icon: <MdHomeFilled />},
    {path: 'tech', name:'Tech', icon: <FaWrench />},
    {path: 'projects', name:'Projects', icon: <FaLaptopCode />},
    {path: 'education', name:'Education', icon: <FaBook />},
    {path: 'about', name:'About me', icon: <FaUserAlt />}


]

export default function Sidebar() {
    return (
        <div className="relative flex h-screen w-full max-w-[20rem] flex-col bg-clip-border py-4 text-gray-700 shadow-xl shadow-blue-gray-900/5"
        style={{backgroundColor: 'rgba(18, 18, 27, 0)'}}>
            <div className="p-4 mb-2">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#E44CB1]">
                    Dashboard
                </h5>
            </div>
            <nav className="flex w-full flex-col gap-1 font-sans text-base font-normal text-white">
                {navLinks.map(el => <SideBarItem key={el.path} {...el} />)}
                
            </nav>
            <div className="mt-auto p-4">
                <button className="w-full btn-glow px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition">
                <a
                href="/Beatris_CV.pdf"
                download
                >Download CV</a>
                </button>
            </div>
        </div>

    );
}