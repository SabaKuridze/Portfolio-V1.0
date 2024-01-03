import {
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  meta,
  shopify,
  carrent,
  jobit,
  tripguide,
  vekua,
  btu,
  dorado,
  pyme,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
  {
    title: "Junior Developer",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "I. Vekua Physics-Mathematical School ",
    icon: vekua,
    iconBg: "#ffffff",
    date: "2017 - 2022",
    points: [
      "Patriotism & Civic Awareness: The school nurtures patriotism and civic responsibility, fostering active citizens who contribute positively to society.",
      "Respect for the Individual & Skills: Valuing diversity, the school emphasizes skill development alongside academics, shaping well-rounded individuals.",
      "Market Success: The school equips students for economic achievement, empowering them to excel in the market economy and contribute to national progress.",
    ],
  },
  {
    title: "Student",
    company_name: "Business and Technology University",
    icon: btu,
    iconBg: "#ffffff",
    date: "2022 - Present",
    points: [
      "BTU's Tech Labs & Innovation Focus: Discuss the impact of BTU's labs like AI, blockchain, and industry 4.0 on fostering innovation and hands-on learning.",
      "Nurturing Entrepreneurs at BTU: Explore how BTU cultivates an entrepreneurial spirit, aids startups, and equips students with business skills for the global market.",
      "Digital Integration in Learning: Highlight BTU's tech-driven approach in labs such as cybersecurity and mobile app development, preparing students for tech-centric careers.",
    ],
  },
  {
    title: "Frond-End Developer",
    company_name: "Dorado / Start-Up",
    icon: dorado,
    iconBg: "#ffffff",
    date: "Nov 2020 - Oct 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer / Intern",
    company_name: "Pyme / Start-Up",
    icon: pyme,
    iconBg: "#ffffff",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
