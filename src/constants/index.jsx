import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import {RiJavascriptFill} from "react-icons/ri" 
import { SiSpringboot } from "react-icons/si"

import projectImage1 from "../assets/one8.jpg";
import projectImage2 from "../assets/instaShop.jpg";
import projectImage3 from "../assets/weather.jpg";
import AnkushImg from "../assets/AnkushImg.jpeg"

import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "Ankush Dhavale",
  greet: "Hello there! 👋🏻",
  AnkuImg:AnkushImg,
  description:
    "I am a passionate frontend developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences for over a decade.",
};

export const PROJECTS = [
  {
    id: 2,
    name: "One 8 - Frontend",
    description:
      "An e-commerce web application developed using React.js and Redux for featuring a comprehensive product catalog, shopping cart.",
    image: projectImage1,
    githubLink: "https://github.com/ankushdhavale/One8-React-Project",
  },
  {
    id: 3,
    name: "InstaShop - Ecommerce App",
    description:
      "An e-commerce web application developed using React.js and Redux for featuring a comprehensive product catalog, shopping cart.",
    image: projectImage2,
    githubLink: "https://github.com/ankushdhavale/One8-React-Project",
  },
  {
    id: 4,
    name: "Weather App",
    description:
      "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with JavaScript.",
    image: projectImage3,
    githubLink: "https://github.com/ankushdhavale/Weather-App?tab=readme-ov-file",
  },
];

export const BIO = [
  "I am Ankush Dhavale studied computer science at the Marathwada Institute of Technologyons ,where he immersed himself in the world of frontend development.",
  "As a multi-disciplinary frontend developer, Ankush Dhavale brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React, Ankush possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
  },
  {
    icon: <RiJavascriptFill className="text-4xl text-white lg:text-5xl" />,
    name: "JavaScript",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Tailwind",
  },
  {
    icon: <SiSpringboot className="text-4xl text-red-600 lg:text-5xl" />,
    name: "SpringBoot",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "PostgreSQL",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor Technology",
    institution: "Marathwada Institution of Technology",
    duration: "January 2022 - May 2025",
    description:
      "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript. Completed a senior project on developing an e-commerce platform.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.instagram.com/ankush.dhavale1/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ankushdhavale",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/ankush-dhavale-284ba12b7/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
