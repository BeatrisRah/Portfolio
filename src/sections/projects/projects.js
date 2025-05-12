import { techStackList } from "../../data/techStackList";


export const projects = [
    {
        name: 'BookSwap', 
        gitUrl:'https://github.com/BeatrisRah/BookSwap', 
        image: new URL('./assets/book_swap.png', import.meta.url).href,
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
        image:new URL('./assets/vibechat.png', import.meta.url).href,
        info:'Chatroom app for users to intercat, using Socket.IO and VersaCore for back-end.',
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
        name: 'UserManagementSystem', 
        gitUrl:'https://github.com/BeatrisRah/UserManagementSystem', 
        image:new URL('./assets/usermanagement.png', import.meta.url).href,
        info:'ExpressJS application where admins can manage users profiles. Using dummyjson for mimicking REST API JSON Data.',
        features:[
            "User Authentication",
            "CRUD Operations",
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/UserManagementSystem',
        },
        techStack:[
            techStackList.JavaScript,
            techStackList.ExpressJS,
            {name:'Handlebars', img:'https://devswag.com/cdn/shop/products/handlebars-shirt-front_1024x1024.png?v=1571438516'}
        ],
        grow:0
    },
    {
        name: 'VersaCore', 
        gitUrl:'https://github.com/BeatrisRah/VersaCore', 
        image:  new URL('./assets/server.png', import.meta.url).href,
        info:'ExpressJS server for running multiple projects.',
        features:[
            // "Persistent Data with MongoDB",
            "User Authentication",
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
    },
    {
        name: 'NoteApp', 
        gitUrl:'https://github.com/BeatrisRah/SoftUni-React/tree/main/react-typescript', 
        image:new URL('./assets/noteapp.png', import.meta.url).href,
        info:'Simple NoteApp made to practice Typescript + React.',
        features:[
            "Making Notes",
            "Making Lists"
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/SoftUni-React/tree/main/react-typescript',
            hosted:'https://noteapp-typescript-flame.vercel.app/',
        },
        techStack:[
            techStackList.TypeScript,
            techStackList.React,
            {name:'MUI', img:'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg' }
        ],
        grow:1
    },
    {
        name: 'Store', 
        gitUrl:'https://github.com/BeatrisRah/electron-store', 
        image:'https://us.123rf.com/450wm/yupiramos/yupiramos1703/yupiramos170307289/73899917-construction-design-over-yellow-background-vector-illustration.jpg?ver=6',
        info:'Application that helps you easily keep track of your store items.',
        features:[
            "Item Managment",
        ],//bullet point
        links:{
            git:'https://github.com/BeatrisRah/electron-store',
        },
        techStack:[
            techStackList.TypeScript,
            techStackList.Electron,
            {name: 'Postgresql', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'}
        ],
        grow:0
    },
]