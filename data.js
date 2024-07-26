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
        skillName: "VS Code, Jupyter NB",
        color: "6",
        percentage: "60",
    },
];

export const projects = {
    DataProjects: [
        {
            projectName: "Stock Market Prediction Modeling",
            image: "images/stock.png",
            summary:
                "Two-Part Personal Python Project on predicting the stock market with modeling",
            preview: "https://github.com/JLiang7/Stock_Market_Modeling",
            techStack: ["Python", "Jupyter", "Pandas Datareader", "Scikit-learn", "pip-install libraries"],
        },
        {
            projectName: "Iris Flower Prediction App Lab",
            image: "images/iris.png",
            summary:
                "A python web application that displays Iris flowers predictions.",
            preview: "https://share.streamlit.io/jliang7/iris_lab/iris-ml-app.py",
            techStack: ["Python", "Jupyter", "Scikit-learn", "pip-install libraries", "streamlit"],
        },
        {
            projectName: "Social_Ad Lab",
            image: "images/social.png",
            summary:
                "Hands-on python lab to understand data and draw insights for real world problems.",
            preview: "https://github.com/JLiang7/Social_Ad_Lab",
            techStack: ["Python", "Jupyter", "Scikit-learn", "pip-install libraries"],
        },  
    ]
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
        title: "B.A Actuarial Science",
        duration: "2016 - 2018",
        subtitle: "CUNY Baruch College",
        details: [],
        tags: [
            "Math", "Accounting", "Finance", "FM Exam of Society of Actuary"
        ],
        icon: "graduation-cap",
    },
    {
        title: "B.S Computer Science",
        duration: "2012 - 2016",
        subtitle: "SUNY Buffalo University",
        details: [],
        tags: [
            "Java", "C++","NLP", "Machine Learning", "Operating Systems","Data Structures & Algorithms"
        ],
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
