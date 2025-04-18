import { Element } from "react-scroll"
import Box from "../../components/Box";
import CustomBarChart from "./BarChart";
import TechItem from "./TechItem";
import { techStackList } from "../../data/techStackList";


export default function Tetch() {
    return (
    <Element name="tech" className="relative min-h-screen w-10/12 mx-auto mt-30 bg-transparent p-8 flex flex-col gap-3">
        <Box 
        className="min-h-80"
        headther={{
            textPosition:'center',
            title:'My Technologies && Tools', 
            marginB:'5'}} 
        >

<pre className="absolute text-lg text-pink-500/60 z-0 right-0 -bottom-92">
                {`
.    ⊹ ₊
  __  ♡
⊂⊂  •)  
 /   | 
⊂_﹏u`}
            </pre>

        <div className="flex flex-wrap gap-2 p-2 pb-10">
        {Object.values(techStackList).map(el => <TechItem tech={el} />)}
        </div>

        </Box>
        <div className="flex gap-5">
            <Box className="w-[45%]">
                <CustomBarChart />
            </Box>
            <div className="p-6 ml-6">
                <h1 className="text-4xl jersay mb-4">My Stack Usage Levels</h1>
                <ul className="grid grid-cols-2 gap-y-2 text-lg max-w-md ml-4">
                    <li className="text-left">Vibing to music</li>
                    <li className="text-right text-pink-400/70 hover:text-pink-300 cursor-default">0 - 1000</li>

                    <li className="text-left">First Coffee</li>
                    <li className="text-right text-pink-400/70 hover:text-pink-300 cursor-default">1000 - 2500</li>

                    <li className="text-left">Podcast && Second Coffee</li>
                    <li className="text-right text-pink-400/70 hover:text-pink-300 cursor-default">2500 - 3000</li>

                    <li className="text-left">Last touches</li>
                    <li className="text-right text-pink-400/70 hover:text-pink-300 cursor-default">3000 - 4000</li>
                </ul>
            </div>
        </div>
    </Element>
    );
}