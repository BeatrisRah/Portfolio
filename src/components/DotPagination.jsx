import { Link } from 'react-scroll';
const sections = ['home', 'tech', 'projects','education', 'about'];

export default function DotPagination() {


    return (
        <div className="fixed right-2 xl:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
            {sections.map((sec) => (
                <Link
                    key={sec}
                    to={sec}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-100}
                    className='w-4 h-4 rounded-full cursor-pointer transition-all duration-300 bg-[#ff57c4]/30'
                    activeClass='!bg-[#ff57c4] scale-110 shadow-md'
                >
                    
                </Link>
            ))}
        </div>
    );
};