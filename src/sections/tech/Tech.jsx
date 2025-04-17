import { Element } from "react-scroll"
import Box from "../../components/Box";
import CustomBarChart from "./BarChart";

const techStackList = [
    {name:'JavaScript', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'},
    {name:'NodeJS', img:'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'},
    {name:'ExpressJS', img:'https://www.manektech.com/storage/developer/1646733543.webp'},
    {name:'React', img:'https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256'},
    {name:'React Query', img:'https://miro.medium.com/v2/resize:fit:1400/1*elhu-42TzQEdsFjKDbQhhA.png'},
    {name:'Redux', img:'https://cdn.worldvectorlogo.com/logos/redux.svg'},
    {name:'Tailwind', img:'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png'},
    {name:'HTML', img:'https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png'},
    {name:'CSS', img:'https://cdn.worldvectorlogo.com/logos/css-3.svg'},
    {name:'MongoDB', img:'https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png'},
    {name:'Mongoose', img:'https://avatars.githubusercontent.com/u/7552965?s=280&v=4'},
    {name:'Firebase', img:'https://brandeps.com/logo-download/F/Firebase-logo-02.png'},
    {name:'Electron', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/2048px-Electron_Software_Framework_Logo.svg.png'},
    {name:'Vite', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png'},
    {name:'Vercel', img:'https://static-00.iconduck.com/assets.00/vercel-icon-256x225-ble4fz4r.png'},
    {name:'Figma', img:'https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png'},
    {name:'Postman', img:'https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png?f=webp&w=256'},
    {name:'Git', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png'},

]

export default function Tetch() {
    return (
    <Element name="tech" className="min-h-screen w-10/12 mx-auto mt-30 bg-transparent p-8 flex flex-col gap-3">
        <Box 
        headther={{
            textPosition:'center',
            title:'My Technologies && Tools', 
            marginB:'5'}} 
        >

        <div className="flex flex-wrap gap-2 p-2 pb-10">
        {techStackList.map(el => (
            <div key={el.name} className="flex gap-2 w-40 p-2 tech-border">
                <img src={el.img} className="w-6 h-6" />
                <p>{el.name}</p>
            </div>
        ))}
        </div>

        </Box>
        <div>
            <Box className="w-[45%]">
                <CustomBarChart />
            </Box>
        </div>
    </Element>
    );
}