import { MdHomeFilled } from "react-icons/md";
import SideBarItem from "./SideBarItem";

const navLinks = [
    {path: 'home', name:'Home', icon: <MdHomeFilled />},
    {path: 'tech', name:'Tetch', icon: <MdHomeFilled />}

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
        </div>

    );
}