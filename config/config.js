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
      link: "https://drive.google.com/file/d/1s7LjmQsJvAMb6h2wm_ot-upB2PuAmnpH/view?usp=sharing",
      isPrimary: false,
    },
  ],
};

export const about = {
  title: "Who I am",
  description: [
    "Welcome to my portfolio website! I'm a freelance web developer from Belgium, specializing in creating captivating and functional websites. With expertise in HTML, CSS, and JavaScript, I bring your digital ideas to life.",
    "I'm passionate about crafting visually appealing designs and seamless user experiences. From small business websites to personal blogs, I tailor each project to meet your specific needs.",
    "Driven by the latest industry trends, I stay updated with cutting-edge technologies to deliver modern and engaging websites. Collaboration and open communication are at the core of my approach, ensuring your satisfaction throughout the development process.",
    "Based in Belgium, I'm ready to transform your online presence. Explore my portfolio and let's discuss your next web development project.",
    "Let's build your digital success together!",
  ],
};
export const work = {
  title: "What I do",
  cards: [
    {
      title: "Responsive Web Development",
      description:
        "I create responsive websites using HTML, CSS and Javascript",
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
      title: "HadithApp",
      description:
        "This is a Hadith app built with SvelteKit. The app provides users with a collection of Hadiths and allows them bookmark their favorite Hadiths.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/mouise1111/HadithApp",
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
    // {
    //   title: "Schedule Meeting",
    //   link: "",
    //   isPrimary: false,
    // },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Mouise Bashir | Computer Engineer | Web Developer",
  description:
    "I create full stack websites. I will graduate from Erasmushogeschool Brussel in 2023 with a degree in Computer Programming.",
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
      link: "https://www.linkedin.com/in/mouise-bashir/?locale=en_US",
    },
  ],
};
