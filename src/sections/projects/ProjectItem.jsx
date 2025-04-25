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

    const width = project.grow > 0 ? 'w-[55%] xl:w-[50%]' : 'w-[40%]'

    return (
        <Box
            headther={{ title: project.name, marginB:4 }}
            className={`${width} min-h-[26rem]`}
        >
            <div className="flex flex-wrap w-full  p-2">
                <div className="w-1/2 h-1/2">
                    <TabNav onChange={onChange} activeTab={activeTab} />
                    {activeTab === 'Info' && <InfoTab info={project.info} />}
                    {activeTab === 'Features' && <FeaturesTab featuresArr={project.features} />}
                    {activeTab === 'Links' && <LinksTab links={project.links} />}
                </div>
                <div className="w-1/2 h-1/2 mt-3">
                    <img src={project.image} className="w-80 mx-auto h-50 object-scale-down" />
                </div>
                <div className="w-full flex flex-wrap gap-2 mt-5">
                {project.techStack.map(t => <TechItem tech={t} />)}
                </div>
            </div>

        </Box>
    );
}