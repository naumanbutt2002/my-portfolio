import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";


const Info={
    name:"Muhammad Nauman",
    stack:["Software Engineer","Flutter Developer",  "Competitive Programmer", "Open Source Contributor","Full Stack Web Developer"],
    bio:"I'm a passionate Associate Software Engineer skilled in mobile app development, and full-stack development with the MERN stack, with a strong passion for creating user-friendly applications and a commitment to continuous improvement. Let's connect and create something amazing together!"
}
const ProjectInfo=[
    {
        title:"Car Rental App",
        desc: "The Car Rental Application is a comprehensive mobile solution for car rental services, developed using Flutter, Firebase, Bloc, and Clean Architecture. The application provides a seamless and intuitive interface for users to manage car rentals. It also integrates OpenStreetMaps for enhanced mapping and location-based services, ensuring a superior user experience. This application can be easily adapted for other rental services beyond cars. It allows users to seamlessly manage car rentals, including listing cars and navigation. It provides a user-friendly interface that makes navigating and using the app straightforward and efficient. It incorporates OpenStreetMaps for accurate and detailed mapping, enabling users to find car locations and directions with ease.",
        image:"CarsRental.png",
        live:false,
        technologies:["Flutter", "Open Street Maps","Bloc","Firebase CLI","Clean Architecture"],
        link:"https://github.com/naumanbutt2002/car_rental_app",
        github:"https://github.com/naumanbutt2002/car_rental_app"
    },
    {
        title:"Shop App ",
        desc: "The Shop App Flutter is a fully functional e-commerce application developed using Flutter,Firebase, Provider, and Dart. The application features a sleek and intuitive UI for browsing products, adding them to the cart, and managing orders. The app architecture is designed with scalability in mind, making it easy to extend and adapt for future features. It provides product listing by browsing a wide range of products with detailed descriptions and images. User can add products to your cart, update quantities, and remove items as needed. User can view detailed information about each product, including images, descriptions, and pricing. It provides efficient state management across the app using the Provider package.",
        image:"shopping.png",
        live:false,
        technologies:["Flutter","Firebase CLI","Provider", "Dart"],
        link:"https://github.com/naumanbutt2002/shop_app_flutter",
        github:"https://github.com/naumanbutt2002/shop_app_flutter"
    },
    {
        title:"DevNBlog Application",
        desc: "DevNBlog is a comprehensive blog application developed using the MERN stack (MongoDB, Express, React, Node.js). It offers a dynamic and interactive experience, allowing users to manage posts, comments, and users through CRUD operations. The application also features JWT-based authentication and Google OAuth for secure user login, as well as a sleek dark mode interface and advanced search functionality. DevNBlog ensures a responsive and engaging community experience, designed to cater to both desktop and mobile users.",
        image:"devnblog.png",
        live:true,
        technologies:["React","Express","Node.js","MongoDB","Firebase","React Router","JWT"],
        link:"https://devnblog.up.railway.app/",
        github:"https://github.com/naumanbutt2002/devnblog"
    },
    {
        title:"RealEstateMart App",
        desc: "RealEstateMart is a modern real estate marketplace built with the MERN stack (MongoDB, Express, React, Node.js) that enables users to buy, sell, and rent properties with ease. The platform integrates JWT-based authentication and Google OAuth to provide secure and seamless access for users. The app supports real-time CRUD operations for property management and offers advanced search functionalities to filter listings based on user preferences. The platform is designed to deliver a smooth and intuitive experience across both desktop and mobile devices.",
        image:"realestatemart.png",
        live:true,
        technologies:["React","Express","Node.js","MongoDB","Firebase","React Router","JWT"],
        link:"https://realestatemart.up.railway.app/",
        github:"https://github.com/naumanbutt2002/realestatemart"
    },
    {
        title:"MERN Authentication",
        desc: "The MERN Auth web application is a ready-to-use authentication solution built with the MERN stack (MongoDB, Express, React, and Node.js), offering key features like secure user sign-up, login, and logout through local accounts or Google authentication. It includes essential pages such as Sign In, Sign Up, Profile, Home, and About, with user authentication managed via JWT for secure access. The front end is developed using React with React Router for seamless navigation, while the back end uses Express.js to handle server logic and API communication. Data is efficiently stored in MongoDB and managed through Mongoose, with Firebase integrated for image hosting. Protected routes ensure that only authenticated users can access sensitive data, making this app an ideal foundation for secure web applications.",
        image:"mern_auth.png",
        live:false,
        technologies:["React","MongoDB","Firebase","React Router","Express"],
        link:"https://github.com/naumanbutt2002/mern-auth",
        github:"https://github.com/naumanbutt2002/mern-auth"
    },
    {
        title:"Point of Sale",
        desc: "Introducing our C#.Net-based Point of Sale (POS) Desktop App, a comprehensive solution designed to enhance transaction efficiency and streamline business operations. With a user-friendly interface, the app offers robust inventory management and an array of essential functionalities. Users can log in as admins or employees, access an intuitive admin panel, and manage CRUD operations for products, suppliers, customers, and employees. The app also features detailed bill management, a dedicated customer panel for employees, seamless product purchasing, and receipt generation, empowering businesses to elevate customer experiences and optimize their sales processes.",
        image:"POS.png",
        live:false,
        technologies:["C#",".NET","MS SQL","Custom Base Collection", "Visual Studio"],
        link:"https://github.com/naumanbutt2002/POS_Point-of-Sale",
        github:"https://github.com/naumanbutt2002/POS_Point-of-Sale"
    },
    
]
const SkillInfo = [
    {
        title: "Frontend",
        skills: ["Flutter","Jetpack Compose","C Sharp","HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS", "Bootstrap",
        ]
    },
    {
        title: "Backend",
        skills: [ "Node JS", "Express JS", "MS SQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++", "Dart","Kotlin", "Python", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "MongoDB Compass", "Postman", "Android Studio"]
    }
]

const socialLinks = [
    { link: "https://github.com/naumanbutt2002", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/naumanbutt2002", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/naumanbutt2002", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@naumanbutt2002", icon: IconBrandYoutube },
    { link: "https://www.leetcode.com/u/naumanbutt2002", icon: IconBrandLeetcode }
];
const ExperienceInfo = [
    {
        role: "Web Developer",
        company: "National Incubation Center",
        date: "May 2024 - Sep 2024",
        desc: "I  developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js), enhancing user engagement by delivering a seamless and responsive interface. Created web application significantly boosting their online presence and user interaction. I implemented JWT-based authentication and Google OAuth for secure user login, ensuring data privacy and user authentication. I integrated Firebase for real-time database management and user authentication.",
        skills: ["HTML","Tailwind CSS","React","Nodejs","MongoDB"]
    },
    {
        role: "Flutter Developer",
        company: "Health Bridge",
        date: "Nov 2023 - April 2024",
        desc: "I designed mobile app UIs for the Health Bridge App, focusing on intuitive navigation and user-friendly interfaces to improve patient engagement. I Built responsive and user-friendly mobile app using Flutter and Provider, Firebase CLI and Google OAuth.I Integrated Firebase for real-time database management, authentication, and push notifications, ensuring smooth data synchronization and secure user interactions.",
        skills: ["FLutter","Dart","Firebase CLI","Provider", "Figma"]
    },
    {
        role: "Web Designer",
        company: "Agile Solutions",
        date: "May 2019 - Sep 2019",
        desc: "I designed and developed a responsive e-commerce website for a client, replicating PowerDentalUSA using HTML, CSS, and Bootstrap. I collaborated with the development team to integrate the design into the existing backend, enhancing overall user experience and interface consistency. I conducted usability testing to ensure the website's design met the client's requirements and provided a seamless user experience.",
        skills: ["HTML", "CSS", "Bootstrap","My Sql", "Jquery"]
    }
]
const Slugs=[
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "mysql",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
];
export { Info, ProjectInfo,socialLinks, SkillInfo, ExperienceInfo, Slugs };
