import { Element } from "react-scroll"
import Box from "../../components/Box";

const techStackList = [
    {name: 'JavaScript', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/768px-JavaScript-logo.png'},
    {name:'NodeJS', img:'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'}
]

export default function Tetch() {
    return (
    <Element name="tech" className="min-h-screen bg-transparent p-8">
        <Box 
        className=""
        headther={{
            textPosition:'center',
            title:'My Technologies', 
            marginB:'5'}} 
        >

        <div className="flex gap-2">
        {techStackList.map(el => (
            <div key={el.name} className="flex gap-2 w-40 p-2 tech-border">
                <img src={el.img} className="w-5" />
                <p>{el.name}</p>
            </div>
        ))}
        </div>

        </Box>
    </Element>
    );
}