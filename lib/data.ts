import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import landingpage from "@/public/landing-page.png"
import locallibrary from "@/public/local-library.png"
import shoppingcart from "@/public/shopping-cart.png"
import tictactoe from "@/public/tic-tac-toe.png"

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
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "Autodidact web developer since January 2023,.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Lincoln, NE",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Shopping Cart",
    description:
      "Sample e-commerce website made with React. Makes use of various react features such as context and state management for store components, and useEffect for api calls. This app also fetches data from fakestoreapi.com to get the images, prices, and names for the items. Creating this app challenged my understanding of react hooks, particularly useContext, to get the functionality for the shopping cart icon to update when a related component was responsible for its incrementation. It was also the first app I made where the bulk of its displayed data was dependent on an API, so I had to get familiar with Axios.",
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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;