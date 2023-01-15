import profile from "./profile.jpg";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Mouise Bashir",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
};
export const intro = {
  title: "Hey, I'm Mouise Bashir",
  description: "Passionate about changing the world with technology.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "I am a full stack developer with a passion for creating high - quality web applications.",
    "Currently I am a student at Erasmuhogeschool studying Programming, with a strong background in both frontend and backend development.",
    "My skills include JavaScript, Java, C#, and PHP, as well as experience working with ASP.NET, Laravel, Android mobile development and Spring.",
    "I am a proactive problem - solver, dedicated to delivering exceptional results for clients.",
    " I am also a strong communicator and team player, always eager to learn and stay up - to - date with the latest industry trends.",
  ],
};
export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect Andriod apps using Java.",
      icons: null,
    },
    {
      title: "Web Development",
      description:
        "I create responsive full stack websites using ASP.NET and Laravel.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Teatastic",
      description:
        "Teatastic is an E-commerce web application for buying tea - ASP.NET CORE MVC 6.0",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/mouise1111/Teatastic/tree/Opdracht2",
        },
      ],
    },
    {
      title: "Fitish",
      description:
        "Fitish is a recipe and fitness tracker for those who wan't to stay fit...ish",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/mouise1111/Fitish-frontend-js-app",
        },
      ],
    },
    {
      title: "FabLab",
      description: "Webshop for students made with Laravel",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/mouise1111/laravel_FabLab",
        },
      ],
    },
    // {
    //   title: "Portfolio",
    //   description:
    //     "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
    //   icons: [
    //     {
    //       icon: faGithub,
    //       link: "https://github.com/hashirshoaeb/portfolio",
    //     },
    //   ],
    // },
  ],
};

export const contact = {
  title: "Get in touch",
  description:
    "Feel free to reach out directly by email at bashir.mouise@protonmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:bashir.mouise@protonmail.com",
      isPrimary: true,
    },
    {
      title: "Schedule Meeting",
      link: "",
      isPrimary: false,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Mouise Bashir | Computer Engineer | Web Developer",
  description:
    "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@mouisebashir",
  description: "Computer Engineer | ASP.NET | web developer",
  cards: [
    // {
    //   title: "My website",
    //   link: "https://hashirshoaeb.com/",
    // },
    // {
    //   title: "QuranTalk App",
    //   link: "https://www.qurantalk.app/",
    // },
    {
      title: "My GitHub",
      link: "https://github.com/mouise1111/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/mouise-bashir-62a706200/?locale=en_US",
    },
  ],
};
