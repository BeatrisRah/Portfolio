import { Element } from "react-scroll";
const items = [
    {
        title: "ReactJS",
        desc: "Components, props, state, hooks, context, routing, and scalable UI designwith modern best practices.",
        link:'https://softuni.bg/certificates/details/241537/56f23cc9'
    },
    {
        title: "Back-End",
        desc: "Skilled in Node.js, Express, MongoDB, sessions, auth, validation, and error handling for secure, reliable back-end development.",
        link:'https://softuni.bg/certificates/details/237727/198b8f4c'
    },
    {
        title: "JavaScript Applications",
        desc: "Built dynamic web apps using REST, async programming, SPA architecture, client-side rendering, routing, testing, and modular design. ",
    },
    {
        title: "JavaScript Advanced",
        desc: "Lorem sm smsn mmm msmsmmsm llslslx",
    },
    {
        title: "JavaScript Advanced",
        desc: "Lorem sm smsn mmm msmsmmsm llslslx",
    },
];

export default function Education() {
    return (
        <Element name="education" className="min-h-screen mt-30">
            <div className="relative px-6 py-10">
                <div className="absolute left-1/2 top-30 -bottom-10 w-px bg-gray-400/40 -translate-x-1/2"></div>

                {/* Top info */}
                <div className="text-center mb-12">
                    <h3 className="text-sm text-gray-300">SoftUni</h3>
                    <h2 className="text-2xl font-bold">JavaScript Software Engineer</h2>
                    <p className="text-sm text-gray-400">Jan 2023 - Current</p>
                </div>

                {/* Timeline Items */}
                <div className="flex flex-col gap-16">
                    {items.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <div key={index} className={`relative flex justify-${isLeft ? "start" : "end"} items-center`}>
                                <div className={`w-1/2 px-4 flex flex-col ${isLeft ? "text-right items-end" : "text-left items-start"}`}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" ><h3 className="text-pink-400 font-semibold hover:text-pink-200 cursor-pointer">{item.title}</h3></a>
                                    <p className="text-sm text-gray-300 cursor-default w-1/2">{item.desc}</p>
                                </div>

                                {/* Dot */}
                                <span className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 border-2 border-pink-400 rounded-full bg-transparent"></span>
                            </div>
                        );
                    })}
                </div>
            </div>

        </Element>
    );
}