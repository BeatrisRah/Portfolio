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
            {name:'Cloudinary', img:'https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DAJFJtWIZAAC'}
        ],
        grow:1
    },
    {
        name: 'VibeChat', 
        gitUrl:'https://github.com/BeatrisRah/VibeChat', 
        image:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
        info:'Chatroom app for users to intercat, using Socket.IO',
        features:[
            "User Authentication",
            "Chatrooms",
            "Real-Time Chat with Socket.io",
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/VibeChat',
        },
        techStack:[
            techStackList.JavaScript,
            techStackList.React,
            techStackList.Tailwind,
            techStackList["React Query"],
            techStackList.Redux,
            {name:'DaisyUI', img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjriJ3Pylplf9wiqVZiSuuCQGomHicU1J0XjdtC4IzwweHqMrus3lLGiZ_TjXds6bLAs&usqp=CAU'}
        ],
        grow:0
    },
    {
        name: 'VersaCore', 
        gitUrl:'https://github.com/BeatrisRah/VersaCore', 
        image:'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png',
        info:'Chatroom app for users to intercat, using Socket.IO',
        features:[
            "Persistent Data with MongoDB",
            // "User Authentication",
            "Real-Time Chat with Socket.io",
            "Multiple Collections (chatrooms, messages, users...)",
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/VersaCore',
        },
        techStack:[
            techStackList.JavaScript,
            techStackList.ExpressJS,
            techStackList.MongoDB,
            techStackList.Mongoose
        ],
        grow:1
    }
]