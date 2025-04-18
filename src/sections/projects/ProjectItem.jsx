import { useState } from "react";
import Box from "../../components/Box";
import TabNav from "./TabNav";
import InfoTab from "./tab-content/Info";
import FeaturesTab from "./tab-content/Features";
import LinksTab from "./tab-content/Links";
import TechItem from "../tech/TechItem";


export default function ProjectItem({ project }) {
    const [activeTab, setActiveTab] = useState("Info");

    const onChange = (tab) => {
        setActiveTab(tab)
    }

    const width = project.grow > 0 ? 'w-[50%]' : 'w-[40%]'

    return (
        <Box
            headther={{ title: project.name, marginB:4 }}
            className={`${width} h-[26rem]`}
        >
            <div className="flex flex-wrap w-full h-11/12">
                <div className="w-1/2 h-1/2">
                    <TabNav onChange={onChange} activeTab={activeTab} />
                    {activeTab === 'Info' && <InfoTab info={project.info} />}
                    {activeTab === 'Features' && <FeaturesTab featuresArr={project.features} />}
                    {activeTab === 'Links' && <LinksTab links={project.links} />}
                </div>
                <div className="w-1/2 h-1/2">
                    <img src={project.image} className="w-80 mx-auto h-full" />
                </div>
                <div className="w-full flex flex-wrap gap-2 h-20">
                {project.techStack.map(t => <TechItem tech={t} />)}
                </div>
            </div>

        </Box>
    );
}