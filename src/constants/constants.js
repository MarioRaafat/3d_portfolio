import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    CUFE,
    ALX,
    Painting,
    Shell,
    Smart_Car,
    SearchEngine,
    GamingRobot,
    MiniKernel,
    ChatAppIcon,
    AirBnB,
    WhatsApp,
    LinkedIn,
    Gmail,
    Instagram,
    github,
    mssql,
    flask,
    redis,
    postgresql,
    mysql,
    FastAPI,
    prisma,
    sqlalchemy,
    kubernetes,
   // websockets,
    redux,
    c,
    cpp,
    python,
    sql,
    nosql,
    FashionAssistant,
    ISchool,
    BricksBreaker,
    SlashHub,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "DevOps Engineer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Design Database",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Flask",
        icon: flask,
    },
    {
        name: "FastAPI",
        icon: FastAPI,
    },
    {
        name: "Prisma",
        icon: prisma,
    },
    {
        name: "SQLAlchemy",
        icon: sqlalchemy,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "mssql",
        icon: mssql,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "MySQL",
        icon: mysql,
    },
    {
        name: "SQL",
        icon: sql,
    },
    {
        name: "NoSQL",
        icon: nosql,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "Redux",
        icon: redux,
    },
    {
        name: "Kubernetes",
        icon: kubernetes,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "C",
        icon: c,
    },
    {
        name: "C++",
        icon: cpp,
    },
    {
        name: "Python",
        icon: python,
    },
// {
//     name: "WebSockets",
//     icon: websockets,
// },
];

const experience = [
    {
        title: "Backend Developer Intern",
        company: "SlashHub, Remote",
        points: [
            { desc: "Engineered and optimized backend services for an AI-powered e-commerce chatbot using Node.js, Express.js, and FastAPI." },
            { desc: "Designed and maintained scalable database architecture with Prisma and PostgreSQL, ensuring data integrity." },
            { desc: "Implemented API documentation with Swagger and integrated AI-driven recommendation systems for enhanced user experience." },
            { desc: "Collaborated with cross-functional teams to improve performance and scalability of backend systems." },
        ],
        icon: SlashHub,
        date: "October 2024 - January 2025",
    },

    {
        title: "Web Developer Intern",
        company: "CUFE, Giza",
        points:
            [
                {desc: "Backend Development with Node.js and Express: Learned to build robust server-side applications using Node.js and Express, managing server logic, middleware, and RESTful APIs."},

                {desc: "Frontend Development with React: Gained expertise in building dynamic and responsive user interfaces using React, focusing on component-based development and state management.\n"},

                {desc: "JavaScript and ES6+ Features: Deepened knowledge of JavaScript, including modern ES6+ syntax and features, essential for both backend and frontend development."},

                {desc: "Project-Based Learning: Engaged in hands-on projects that simulated real-world development scenarios, enhancing skills in problem-solving and debugging."},

            ],

        icon: CUFE,
        date: "July 2024 - September 2024",
    },
    {
        title: "ALX-Software Engineering Program",
        company: "ALX",
        points:
            [
                {desc: "Programming Fundamentals: Core concepts in languages like C, Python, and JavaScript, covering data structures, algorithms, and system design."},

                {desc: "Web Development: Both front-end and back-end development are covered, including HTML, CSS, JavaScript, Node.js, React, and various web frameworks and libraries."},

                {desc: "Systems Engineering: Deep dive into operating systems, shell scripting, networking, and DevOps practices, including containerization with Docker and orchestration with Kubernetes."},

                {desc: "Data Structures and Algorithms: Strong emphasis on understanding and implementing data structures and algorithms, essential for optimizing code and solving complex problems."},


                {desc: "Professional Development: Focuses on building soft skills such as communication, problem-solving, and time management, preparing participants for successful careers in the tech industry."},

            ],

        icon: ALX,
        date: "July 2023 - October 2024",
    },
];

const projects = [
    {
        name: "Fashion Assistant",
        description:
            "An AI-powered e-commerce platform featuring a chatbot and recommendation system for personalized shopping experiences, built with a mobile-responsive interface and scalable backend.",
        tags: [
            { name: "Node.js", color: "blue-text-gradient" },
            { name: "Express.js", color: "green-text-gradient" },
            { name: "Prisma", color: "pink-text-gradient" },
            { name: "PostgreSQL", color: "blue-text-gradient" },
            { name: "FastAPI", color: "green-text-gradient" },
            { name: "Gemini", color: "pink-text-gradient" },
        ],
        icon: FashionAssistant,
        source_code_link: "https://github.com/MarioRaafat/Slash-Backend",
    },
    {
        name: "ChatMe",
        description:
            "A full-featured real-time chat application built with Node.js, Express, and MongoDB with RESTful APIs, offering direct messaging, group chats, file sharing, and real-time updates using web sockets. It features user profile management and a mobile-responsive interface.",
        tags: [
            { name: "Express", color: "blue-text-gradient" },
            { name: "MongoDB", color: "green-text-gradient" },
            { name: "React", color: "pink-text-gradient" },
            { name: "Node.js", color: "blue-text-gradient" },
            { name: "WebSockets", color: "green-text-gradient" },
        ],
        icon: ChatAppIcon,
        source_code_link: "https://github.com/MarioRaafat/Real-time-Chat-Application",
    },
    {
        name: "ISchool",
        description:
            "A full-stack school management system with student and teacher portals, secure authentication, and course management, designed for efficient educational administration.",
        tags: [
            { name: "React.js", color: "blue-text-gradient" },
            { name: "Node.js", color: "green-text-gradient" },
            { name: "Express.js", color: "pink-text-gradient" },
            { name: "PostgreSQL", color: "blue-text-gradient" },
        ],
        icon: ISchool,
        source_code_link: "https://github.com/MarioRaafat/ISchool",
    },

    {
        name: "Search Engine",
        description:
            "A full-featured search engine with a crawler, indexer, and ranker, integrated with a user-friendly UI for efficient information retrieval and ranking.",
        tags: [
            { name: "Python", color: "blue-text-gradient" },
            { name: "React.js", color: "green-text-gradient" },
            { name: "Node.js", color: "pink-text-gradient" },
            { name: "MongoDB", color: "blue-text-gradient" },
        ],
        icon: SearchEngine,
        source_code_link: "https://github.com/Uderscore/aptProject",
    },
    {
        name: "Mini Kernel",
        description:
            "A simulated operating system kernel with single-threaded process management, implementing various scheduling algorithms and memory handling techniques.",
        tags: [
            { name: "C", color: "blue-text-gradient" },
            { name: "C++", color: "green-text-gradient" },
        ],
        icon: MiniKernel,
        source_code_link: "",
    },
    {
        name: "Bricks Breaker",
        description:
            "A multiplayer brick breaker game supporting physical and Wi-Fi connections, built using Assembly for low-level programming and game logic implementation.",
        tags: [
            { name: "Assembly", color: "blue-text-gradient" },
        ],
        icon: BricksBreaker,
        source_code_link: "https://github.com/MarioRaafat/Bricks-Breaker",
    },
    {
        name: "AirBnB Console",
        description:
            "Backend-focused web application developed using Python, Flask, and MySQL, featuring RESTful APIs and SQLAlchemy ORM for efficient data management. It demonstrates skills in backend development, database handling, and web server deployment.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "shell",
                color: "green-text-gradient",
            },
            {
                name: "SQL",
                color: "pink-text-gradient",
            },
        ],
        icon: AirBnB,
        source_code_link: "https://github.com/MarioRaafat/AirBnB_clone_v2",
    },
    {
        name: "Gaming Robot",
        description:
            "A versatile gaming robot that plays five games (Target Shooting, Memory Game, X/O, Rubik's Cube, 3 Cups), showcasing robotics and game logic integration with hardware control.",
        tags: [
            { name: "C++", color: "blue-text-gradient" },
            { name: "Arduino", color: "green-text-gradient" },
            { name: "Python", color: "pink-text-gradient" },
        ],
        icon: GamingRobot,
        source_code_link: "https://github.com/MarioRaafat/Gaming-Robot",
    },
    {
        name: "Simple Shell",
        description:
            "Simple Shell project is a custom implementation of a Unix shell written in C. It supports fundamental shell features such as command execution, built-in commands, input redirection, and handling of environment variables, showcasing proficiency in system programming, process management, and C programming concepts.",
        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "shell",
                color: "green-text-gradient",
            },
        ],
        icon: Shell,
        source_code_link: "https://github.com/MazenAtlam/simple_shell",
    },
    {
        name: "Painting for Kids",
        description:
            "Painting program designed for kids using C++. It has two modes: draw mode and play mode. In draw mode the kid can draw the shapes he wants and color them. In play mode he plays game in which he picks only the shapes written on the screen. The program had features such as save, load, undo, redo, and a lot more.",

        tags: [
            {
                name: "C",
                color: "blue-text-gradient",
            },
            {
                name: "C++",
                color: "green-text-gradient",
            },
        ],
        icon: Painting,
        source_code_link: "https://github.com/tonynagyy/PT-Project",
    },

    {
        name: "Smart Car",
        description:
            "Obstacle Avoiding Smart Car is a robotics project built with Arduino and C++ that autonomously navigates its environment by detecting and avoiding obstacles. Equipped with ultrasonic sensors and programmed algorithms.",
        tags: [
            {
                name: "Arduino ",
                color: "blue-text-gradient",
            },
            {
                name: "C++",
                color: "green-text-gradient",
            },
        ],
        icon: Smart_Car,
        source_code_link: "",
    },
];

const contact = [
    {
        title: "Email",
        icon: Gmail,
        link: "mailto:mariorafat@gmail.com",
    },
    {
        title: "LinkedIn",
        icon: LinkedIn,
        link: "https://www.linkedin.com/in/mario-raafat-0a222a281/",
    },
    {
        title: "GitHub",
        icon: github,
        link: "https://github.com/MarioRaafat",
    },
    {
        title: "Instagram",
        icon: Instagram,
        link: "https://www.instagram.com/mario_rafat10/",
    },
    {
        title: "WhatsApp",
        icon: WhatsApp,
        link: "https://wa.me/+201204878505",
    },
]

export { services, technologies, experience, projects, contact};
