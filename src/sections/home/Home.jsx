import { Element } from "react-scroll";
import Box from "../../components/Box";
import DonutChart from "./DonutChart";
import { Typewriter } from "react-simple-typewriter";
import ContributionGrid from "./Activity";

export default function Home() {

    return (
        <Element name="home" className="min-h-screen relative bg-transparent p-8">
            <pre className="absolute text-pink-500/60 z-0 right-40 -top-10">
                {`
             ⢀⣀⠀⠀⠀⠀⠀⢀⣀⠀
            ⢠⣯⢬⣷⡀⠀⠀⣴⡯⢌⣧
            ⠸⣿⠀⠹⣷⠀⢸⡝⠀⢸⡿
            ⠀⠻⣧⣀⣿⣦⣼⡁⣠⣿⠃
            ⠀⢀⡾⠋⠀⠀⠀⠈⣙⣯⠀
            ⠀⣾⠀⠀⠀⠀⠀⠀⠀⠸⡆
            ⢰⡧⢄⢰⡆⠀⢰⡆⡠⢄⣧
            ⠀⠳⣼⣤⣤⣤⣤⣤⣧⠾⠁`}
            </pre>

            <div className="mb-5">
                <p className="text-3xl text-white">Beatris Rahimi</p>
                <h1 className="jersay text-7xl text-white tracking-wider">Junior Software Engineer</h1>
            </div>

            <div className="w-full flex gap-3">
                <div className="flex flex-col gap-5 w-1/3">
                    <img src="/me.jpg" className="w-10/12 h-[500px] object-cover mx-auto" />
                    <Box className='w-10/12 h-40 mx-auto' >
                        <ul className="flex flex-col gap-3">
                            <li className="flex gap-4 items-center text-xl">
                                <span className="w-4 h-[2px] bg-gray-700 inline-block rounded-full">
                                </span>Sofia, Bulgaria
                            </li>
                            <li className="flex gap-4 items-center text-xl">
                                <span className="w-4 h-[2px] bg-gray-700 inline-block rounded-full">
                                </span>20 years old
                            </li>
                            <li className="flex gap-3 items-center text-xl text-[#ff57c4] hover:text-pink-300 hover:drop-shadow-glow transition duration-300 ease-in-out">
                                <svg className="w-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.7242 8.45192L7.28876 7.19383C6.55281 8.18469 5.92055 9.24884 5.40213 10.3696L3.7242 8.45192ZM1.24742 8.6585L4.54987 12.4327L4.07152 13.6286C3.92296 14 4.01003 14.4242 4.29289 14.7071L4.60651 15.0207C2.90342 16.9411 1.9627 18.9496 1.05132 21.6838C0.931539 22.0431 1.02506 22.4393 1.29289 22.7071C1.56073 22.9749 1.95689 23.0685 2.31623 22.9487C5.05037 22.0373 7.05889 21.0966 8.97928 19.3935L9.29289 19.7071C9.57576 19.99 9.99997 20.077 10.3714 19.9285L11.5673 19.4501L15.3415 22.7526C15.5911 22.971 15.9327 23.0514 16.2535 22.9673C16.5744 22.8832 16.8326 22.6456 16.943 22.3328L19.9291 13.8722C21.8977 11.5428 23 8.57479 23 5.48078V2C23 1.44772 22.5523 1 22 1H18.5192C15.4252 1 12.4572 2.10225 10.1278 4.0709L1.66718 7.05701C1.35444 7.16739 1.11676 7.42565 1.03268 7.74646C0.948589 8.06728 1.02903 8.40891 1.24742 8.6585ZM3.68527 20.3147C4.31277 18.7992 5.017 17.5929 6.02356 16.4378L7.56223 17.9764C6.40713 18.983 5.20083 19.6872 3.68527 20.3147ZM10.2408 17.8266L9.70711 17.2929L6.70711 14.2929L6.17337 13.7592L6.88327 11.9844C7.53465 10.356 8.44936 8.84567 9.59079 7.51401L10.1674 6.84129C12.2572 4.40319 15.308 3 18.5192 3H21V5.48078C21 8.69196 19.5968 11.7428 17.1587 13.8326L16.486 14.4092C15.1543 15.5506 13.644 16.4653 12.0156 17.1167L10.2408 17.8266ZM15.5481 20.2758L13.6304 18.5979C14.7512 18.0795 15.8153 17.4472 16.8062 16.7112L15.5481 20.2758ZM15 8C15 7.44772 15.4477 7 16 7C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8ZM16 5C14.3431 5 13 6.34315 13 8C13 9.65685 14.3431 11 16 11C17.6569 11 19 9.65685 19 8C19 6.34315 17.6569 5 16 5Z" fill="#ff57c4" /> </g></svg>
                                Available to hire
                            </li>
                        </ul>
                    </Box>
                </div>
                <div className="flex flex-wrap gap-5 w-2/3">
                    <div className="flex gap-5 w-full">
                        <Box
                            headther={{ textPosition: 'center', title: 'Welcome' , marginB:'5' }}
                            className="w-3/5"
                        >
                            <p
                            className="w-11/12 p-2 text-lg"
                            >
                            <Typewriter 
                            words={['Hello, world👋!']} 
                            cursor={true}
                            loop={3}
                            /> <br/> You can call me Betty, I'm a <b>Full-stack Developer</b> building clean, and clever things.</p>
                        </Box>

                        <Box
                            headther={{ textPosition: 'center', title: 'Activity', marginB:'2' }}
                            className="w-2/5"
                        >
                            <ContributionGrid />
                        </Box>
                    </div>

                    <Box
                        headther={{ textPosition: 'start', title: 'Time Spend Doing Dev Things', marginB:'10' }}
                        className="w-full"
                    >
                        <DonutChart className="w-10/12 mx-auto" />
                    </Box>
                </div>
            </div>
        </Element>
    );
}