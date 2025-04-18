import { techStackList } from "../../data/techStackList";


export const projects = [
    {
        name: 'BookSwap', 
        gitUrl:'https://github.com/BeatrisRah/BookSwap', 
        image:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
        info:'BookSwap is a platform where users can trade, sell, or donate books with others in their community. It allows users to list books, browse available books, interact with other users, and arrange book exchanges or purchases.',
        features:[
            "User Authentication",
            "Book Listings",
            "Trade System",
            "Real-Time Chat",
            "Admin Events"
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/BookSwap',
            hosted:'https://bookswap-f06b7.web.app/',
        },
        techStack:[
            techStackList.JavaScript,
            techStackList.React,
            techStackList.Tailwind,
            techStackList.Firebase,
            {name:'cCloudinary', img:'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DAJFJtWIZAAC'}
        ],
        grow:1
    }
]