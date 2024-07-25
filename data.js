export const bio = [
    "Hello there, This is Justin Liang.",
    `Experienced Frontend Software Engineer with a strong track record of successfully upgrading applications, optimizing performance, and delivering innovative solutions.`,
    `Eager to apply my technical expertise and in-depth
    product understanding to drive impactful contributions and exceed expectations in challenging projects.`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "JavaScript, TypeScript",
        color: "1",
        percentage: "80",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Angular, RxJS, NGXS",
        color: "6",
        percentage: "70",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap, Tailwind",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub, JIRA, Bitbucket",
        color: "7",
        percentage: "70",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "Analytics",
        skillName: "CleverTap, Countly",
        color: "5",
        percentage: "50",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "70",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "Programming Diaries",
            image: "images/programmingdiaries.png",
            summary:
                "Developed a full stack blog application to provide content on techical topics across the internet with admin interface.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["Django", "SQLite", "Bootstrap", "JavaScript", "Heroku"],
        }
        
    ],
    softwareProjects: [
        {
            projectName: "Pizza Ordering ChatBot",
            image: "images/pizzaorderchatbot.png",
            summary:
                "ChatBot using Dialogflow, Firebase database which stores the chat data in the realtime database.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["Dailogflow", "Firebase"],
        }
    ],
    androidProjects: [
        {
            projectName: "NITW-CSE",
            image: "images/nitwcse.jpg",
            summary:
                "The Application display details of Department courses, reference books, research, publication and faculty profile.",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["JAVA", "XML", "Android"],
        }
    ],
    freelanceProjects: [
        {
            projectName: "SnylloAir.com",
            image: "images/snylloair.png",
            summary:
                "Developed a company website to showcase the purpose, services and products provided by the company to audience.",
            preview: "https://www.snylloair.com/",
            techStack: ["Bootstrap", "JavaScript", "AWS-S3"],
        }
    ],
};

export const experience = [
    {
        title: "Shiprocket (Bigfoot Solution Private Limited)",
        duration: "September 2022 - Present",
        subtitle: "Software Engineer",
        details: [
            "Working in support and escalation team."
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "truck ",
    },
    {
        title: "Biofourmis India Private Limited",
        duration: "April 2022 - Jul 2023",
        subtitle: "Software Engineer",
        details: [
            `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
            `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
            `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
            `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
            `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
            `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
            `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
            `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
            `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
        ],
        tags: ["JavaScript", "Angular", "RxJS", "NGXS", "TypeScript", "RxState", "Webpack", "Optimization"],
        icon: "heartbeat",
    },
    {
        title: "Novopay Solutions Private Limited",
        duration: "June 2020 - April 2022",
        subtitle: "Software Engineer",
        details: [
            `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
            `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
            `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
            `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "qrcode",
    },
    {
        title: "ThinkPedia LLP",
        duration: "May 2019 - June 2019",
        subtitle: "SDE Intern",
        details: [
            `Developed a customer web application for social media management, supporting the advertisement domain.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
        icon: "group",
    },
];

export const education = [
    {
        title: "B.Tech. in Computer Science and Engineering",
        duration: "2016 - 2020",
        subtitle: "National Institute of Technology, Warangal",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Cloud Computing",
        ],
        icon: "graduation-cap",
    },
    {
        title: "Class 12th in Science and Mathematics",
        duration: "",
        subtitle: "Board of Secondary Education, Rajasthan",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/Jliang7",
            },
            {
                text: "LeetCode",
                link: "placeholder",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/JLiang7/JLiang7.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/Jliang777",
            },
            {
                text: "Twitter",
                link: "placeholder",
            },
            {
                text: "Buy me a coffee",
                link: "placeholder",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
