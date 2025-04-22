import { useState } from "react";
import { IoMdArrowDropup, IoMdArrowDropdown  } from "react-icons/io";

export default function CommandList() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
   return (
    <div className="w-1/2 mt-6 bg-[#11121B]/70">
      <div
        onClick={toggle}
        className="flex items-center justify-between cursor-pointer p-4 select-none bg-[#D845A8]"
      >
        <h2 className="text-xl jersay text-[#13131D]">List of Commands</h2>
        {isOpen ? <IoMdArrowDropup className="w-5 h-5 text-black" /> : <IoMdArrowDropdown className="w-5 h-5 text-black" />}
      </div>

      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li className="p-2">Item 1</li>
        </ul>
      )}
    </div>
   );
}