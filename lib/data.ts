import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Staff from "../assets/photo_of_sites/staff.png";
import Habibi from "../assets/photo_of_sites/habibi.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
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
    title: "eCommerce project",
    description:
      "This eCommerce pet-project utilizes React, Redux, and TypeScript to enhance skills, handle real tasks, improve functionality, and implement responsive styles.",
    tags: ["React", "Redux", "TypeScript", "CSS"],
    imageUrl: Staff,
    link: "https://yurasab.github.io/staff-test-project/"
  },
  // {
  //   title: "Habibi shop",
  //   description:
  //     "This project was created for redux and styles practice.",
  //   tags: ["React", "JavaScript", "CSS", "Redux", "API"],
  //   imageUrl: Habibi,
  //   link: "https://yurasab.github.io/redux-training/"
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Redux Toolkit",
  "Git",
  "GitHub",
  "Figma",
  "Canva",
  "Jira",
] as const;
