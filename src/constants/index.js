import { Blender, CssHtml, React, Unity } from "../assets/images";
import {
    css,
    git,
    github,
    html,
    javascript,
    nodejs,
    tailwindcss,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: React,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: Blender,
        name: "Blender",
        type: "Modelling",
    },
    {
        imageUrl: Unity,
        name: "Unity",
        type: "Modelling",
    }
];

export const experiences = [
    {
        title: "Unity",
        company_name: "3D Mdelling",
        icon: Unity,
        iconBg: "#accbe1",
        date: "Apr 2019 - Present",
        points: [
            "Learning the basics of Unity.",
            "Slowly starting to try working with more complicated animations and models.",
            "Creating animations and models for VR games.",
            "Slowly getting to master modelling and animating in Unity.",
        ],
    },
    {
        title: "HTML & CSS",
        company_name: "Basics Of Web Developing",
        icon: CssHtml,
        iconBg: "#CBC3E3",
        date: "Sep 2020 - Present",
        points: [
            "Learning the basics of HTMl and CSS in our first year in DSZC Mechwart András Technical School.",
            "Learning more and more about webdeveloping.",
            "Getting to know all the secrets of it after our 2nd year in the school.",
            "Now in our 4th year we know a lot about webdeveloping and we are excited to see what the future brings us with it.",
        ],
    },
    {
        title: "Blender",
        company_name: "Going In The Depths Of 3D Modelling",
        icon: Blender,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - Present",
        points: [
            "Starting to learn the basics of Blender.",
            "Creating image renders of the models used in Unity for the VR games.",
            "Improving the performance and quality of the models, also making small changes to them with the help of Blender",
            "Learning how to create a model myself and animating it.",
        ],
    },
    {
        title: "React",
        company_name: "Combining Webdeveloping with 3D Modelling",
        icon: React,
        iconBg: "#4169E1",
        date: "Oct 2023 - Present",
        points: [
            "Getting to know the basics of React.",
            "As getting more confident in using React we figured why not implement 3D models in a webpage using React's Fiber and Drei library.",
            "To be honest there is still much to learn about react for us, we are still beginners.",
            "We are excited to see what else React has to offer.",
        ],
    },
];