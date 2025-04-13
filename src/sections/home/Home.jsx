import { Element } from "react-scroll";
import Box from "../../components/Box";

export default function Home() {
   return (
        <Element name="home" className="min-h-screen relative bg-transparent p-8">
            <pre className="absolute text-pink-500/60 z-0">
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

            <div>
                <p className="text-3xl text-white">Beatris Rahimi</p>
                <h1 className="jersay text-5xl text-white">Junior Software Engineer</h1>
            </div>

            <div>
                <div className="z-1">
                    <img src="/me.jpg" className="w-1/4" />
                    <Box className='w-60' >
                        <ul>
                            <li>Sofia, Bulgaria</li>
                        </ul>
                    </Box>
                </div>
                <div></div>
            </div>
        </Element>
   );
}