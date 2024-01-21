import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import landingpage from "@/public/landing-page.png"
import locallibrary from "@/public/local-library.png"
import shoppingcart from "@/public/shopping-cart.png"
import tictactoe from "@/public/tic-tac-toe.png"
import { DiMongodb } from "react-icons/di";
import {
  FaCss3Alt,
  FaHtml5,
  FaLinux,
  FaNode,
  FaReact,
  FaSass,
} from "react-icons/fa";
import {
  SiExpress,
  SiPug,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandOauth } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FiFramer } from "react-icons/fi";



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Technologies",
    hash: "#technologies",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "Shopping Cart",
    description:
      "Sample e-commerce website made with React. Makes use of various react features such as context and state management for store components, and useEffect for api calls. This app also fetches data from fakestoreapi.com to get the images, prices, and names for the items. Creating this app challenged my understanding of react hooks, particularly useContext, to get the functionality for the shopping cart icons to update when a related component was responsible for its incrementation. It was also the first app I made where the bulk of its displayed data was dependent on an API, so I had to get familiar with Axios.",
    tags: ["React", "CSS", "HTML", "JavaScript", "Axios",],
    imageUrl: shoppingcart,
  },
  {
    title: "Library",
    description:
      "A CRUD library I made where users can create and store books,authors, and genres in a database. It also keeps track of an individual book's current status (i.e. Available, reserved, loaned, needs maintenance). Creating this app challenged me to really think about the way my database stores data; an early version of this app saw unexpected bugs like data from the 'bookinstance' collection becoming orphaned related data from the 'book' collection was deleted before deleting the bookinstance associated with it first. ",
    tags: ["Express", "MongoDB", "Pug.JS", "Node.js"],
    imageUrl: locallibrary,
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A version of Tic-Tac-Toe that lets you compete against either another human or a computer that inputs random moves. Originally, this app's big hurdle was conceptualizing the logic for the way the game would be played. Coded in vanilla JavaScript, this app plays the game in a 9-item array that maps to the GUI you see on screen. Everytime a move is made, either an X or O is pushed into said array, and the game checks for a win-state against all the possible combinations of winning in tic-tac-toe. I recently went back in to add an 'impossible' version of the computer player, which was a challenge in and of itself because I had to learn the 'minimax algorithm' and implement it into the logic for my function that handles the computer's moves. Overall it was a really fun app to create, and I learned a lot about a complex mathematical algorithm that I can implement in future 2-player games. ",
      tags: ["CSS", "HTML", "JavaScript"],
      imageUrl: tictactoe,
  
    },
  {
    title: "Landing Page",
    description:
      "A landing page originally built for a client, refactored to not include personal details. I built this early on in my web development journey using only css and html. I remember struggling to fully grasp flexbox at the time, which is what I would say the biggest challenge of this project was. ",
      tags: ["CSS", "HTML"],
      imageUrl: landingpage,
  },
] as const;

// export const skillsData = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "TypeScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Git",
//   "Tailwind",
//   "Prisma",
//   "MongoDB",
//   "Redux",
//   "GraphQL",
//   "Apollo",
//   "Express",
//   "PostgreSQL",
//   "Python",
//   "Django",
//   "Framer Motion",
// ] as const;

export const TechData = [
  {
    title: 'Frontend',
    technologies: [
      { icons: FaReact, fill: '#61DAFB', stroke: 'none', text: 'React.js' },
      { icons: SiVite, fill: '#A020F0', stroke: '#ffffff', text: 'Vite' },
      { icons: SiTypescript, fill: '#3178C6', stroke: 'none', text: 'TypeScript' },
      { icons: IoLogoJavascript, fill: '#F7DF1E', stroke: 'none', text: 'JavaScript' },
      { icons: FaHtml5, fill: '#E34F26', stroke: 'none', text: 'HTML' },
      { icons: FaCss3Alt, fill: '#1572B6', stroke: 'none', text: 'CSS' },
      { icons: FaSass, fill: '#CC6699', stroke: 'none', text: 'Sass' },
      { icons: SiTailwindcss, fill: '#38B2AC', stroke: 'none', text: 'Tailwind.css' },
      { icons: TbBrandNextjs, fill: '#ffffff', stroke: '#000000', text: 'Next.js' },
      { icons: FiFramer, fill: '#0055FF', stroke: 'none', text: 'Framer' },
      { icons: SiPug, fill: '#FF0000', stroke: 'none', text: 'Pug.js' },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { icons: SiExpress, fill: '#ffffff', stroke: '#000000', text: 'Express' },
      { icons: DiMongodb, fill: '#4DB33D', stroke: 'none', text: 'Mongo.db' },
      { icons: FaNode, fill: '#68A063', stroke: 'none', text: 'Node.js/npm' },
      { icons: TbBrandOauth, fill: '#ffffff', stroke: '#FF0000', text: 'Oauth' },
      ,
    ],
  },
  {
    title: 'Misc',
    technologies: [
      { icons: FaLinux, fill: '#0000FF', stroke: 'none', text: 'Linux' },
      { icons: IoLogoFirebase, fill: '#FFA611', stroke: 'none', text: 'Firebase' },
    ],
  },
] as const;