import { useState } from "react";
import Box from "../../components/Box";
import TabNav from "./TabNav";
import InfoTab from "./tab-content/Info";
import FeaturesTab from "./tab-content/Features";


export default function ProjectItem({ project }) {
    const [activeTab, setActiveTab] = useState("Info");

    const onChange = (tab) => {
        setActiveTab(tab)
    }

    return (
        <Box
            headther={{ title: project.name, marginB:4 }}
            className={`w-${project.grow > 0 ? '1/2' : '1/3'} h-98`}
        >
            <div className="flex flex-wrap w-full h-11/12">
                <div className="w-1/2 h-1/2">
                    <TabNav onChange={onChange} activeTab={activeTab} />
                    {activeTab === 'Info' && <InfoTab info={project.info} />}
                    {activeTab === 'Features' && <FeaturesTab featuresArr={project.features} />}
                </div>
                <div className="w-1/2 h-1/2">
                    <img src={project.image} className="w-11/12 mx-auto h-full" />
                </div>
                <div className="w-full h-1/2"></div>
            </div>

        </Box>
    );
}