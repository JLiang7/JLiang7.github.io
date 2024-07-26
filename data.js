export const bio = [
    "Hello, This is Justin Liang.",
    `With a strong foundation in statistical analysis, data visualization and Python. 
    I've successfully led projects for a leading financial service holding company that drove improved customer satisfaction, significant business improvements and enhanced decision-making processes.`,
    `Always on the drive to overcome substantial challenges`,
    "Thanks for taking the time to learn a little about me!",
];

export const skills = [
    {
        title: "Languages",
        skillName: "Python",
        color: "1",
        percentage: "80",
    },
    {
        title: "DataBase",
        skillName: "SQL",
        color: "6",
        percentage: "30",
    },
    {
        title: "Data Visualization",
        skillName: "Tableau, PowerBI",
        color: "3",
        percentage: "50",
    },
    ,
    {
        title: "Version Control",
        skillName: "GitHub",
        color: "7",
        percentage: "70",
    },
    {
        title: "Analytics",
        skillName: "Excel",
        color: "5",
        percentage: "95",
    },
    {
        title: "Script Languages",
        skillName: "VBA",
        color: "6",
        percentage: "95",
    },
    {
        title: "IDE",
        skillName: "VS Code",
        color: "6",
        percentage: "40",
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
        title: "EQH",
        duration: "Jan 2019 - Present",
        subtitle: "Data Analyst",
        details: [
            "Working in Business Intelligence in the IR Team"
        ],
        tags: ["Python", "Excel", "VBA", "PowerBI", "Tableau", "SQL"],
        icon: "group",
    }
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
    }
];

export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "GitHub",
                link: "https://github.com/Jliang7",
            }
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
            }
        ],
    },
    {
        label: "copyright-text",
        data: [
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
