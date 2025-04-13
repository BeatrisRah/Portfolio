import { MdHomeFilled } from "react-icons/md";

export default function Navbar() {
    return (
        <div className="relative flex h-screen w-full max-w-[20rem] flex-col bg-[#12121B]/90 bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5">
            <div className="p-4 mb-2">
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-[#E44CB1]">
                    Dashboard
                </h5>
            </div>
            <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
                <div role="button" className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
                    <div className="grid mr-4 place-items-center">
                    <MdHomeFilled />
                    </div>
                    Dashboard
                </div>
                
            </nav>
        </div>

    );
}