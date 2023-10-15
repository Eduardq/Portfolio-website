import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import landingpages from "@/public/landingpages.png";
import ecommerce from "@/public/Ecommerce.png";
import portfolio from "@/public/portfolio.png";

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
    title: "Front-End Internship",
    location: "Remote",
    description:
    "I had the opportunity to learn the fundamentals of web development. During the internship I did a frontend project using html,css and javascript.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Salesforce Internship",
    location: "Remote",
    description:
      "During the internship I learned what it means to work as a developer in the Salesforce ecosystem.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Oradea, Romania",
    description:
      "My stack includes React, Next.js, TypeScript, Node.js and Tailwind. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Landing Pages",
    description:
      "I built some landing pages using Html, React and Tailwind.",
    tags: ["React", "Html", "Tailwind"],
    imageUrl: landingpages,
  },
  {
    title: "Ecommerce",
    description:
      "An Ecommerce platform with firebase for user auth and stripe for payments.",
    tags: ["React", "Node.js", "Tailwind", "Redux"],
    imageUrl: ecommerce,
  },
  {
    title: "This website",
    description:
      "A portfolio website using React, Next.js and so on. Other project will come soon.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: portfolio,
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
  "Github",
  "Tailwind",
  "Redux",
  "Framer Motion",
] as const;