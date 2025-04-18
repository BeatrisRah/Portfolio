import { useState } from "react";
import Box from "../../components/Box";

export default function ProjectItem({project}) {
    const [tab, setTab] = useState('info')
    return (
        <Box 
        headther={{title:project.name}}
        className={`w-${project.grow > 0 ? '1/2': '1/3'}`}
        >


        </Box>
    );
}