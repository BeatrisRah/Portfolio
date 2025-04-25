import { Link } from "react-scroll";
import { FaWrench } from "react-icons/fa6";
import { FaLaptopCode, FaBook, FaUserAlt } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";


export default function SmallMenu() {
    const navLinks = [
        { path: 'home', name: 'Home', icon: <MdHomeFilled /> },
        { path: 'tech', name: 'Tech', icon: <FaWrench /> },
        { path: 'projects', name: 'Projects', icon: <FaLaptopCode /> },
        { path: 'education', name: 'Education', icon: <FaBook /> },
        { path: 'about', name: 'About me', icon: <FaUserAlt /> }


    ]

    return (
        <>
            <ul className="menu bg-base-200 menu-horizontal rounded-box hidden md:flex xl:hidden">

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

            <div className="md:hidden">
                <div className="dropdown dropdown-bottom">
                    <label tabIndex={0} className="m-1 bg-transparent">
                        ☰
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52"
                    >
                        {navLinks.map((el) => (
                            <li key={el.path}>
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
                </div>
            </div>

        </>
    );
}