const userData = {
  githubUsername: "TomHmwn",
  name: "Thomas Himawan",
  designation: "Software Engineer",
  avatarUrl: "/avatar.png",
  email: "thimawan@student.unimelb.edu.au",
  phone: "+61 452510204",
  address: "Melbourne, Australia, Jakarta, Indonesia",
  projects: [
    {
      title: "Melbourne Park Finder",
      link: "https://www.melbourneparkfinder.me/",
      imgUrl: "/park-finder.png",
      description: "A web application to find parks in Melbourne, Australia",
      stacks: [
        "PostgreSQL",
        "Ruby on Rails",
        "Ruby",
        "MapboxGL",
        "Tailwind",
        "JavaScript",
        "StimulusJS",
        "Heroku",
      ],
      github: "https://github.com/TomHmwn/Melbourne_Park_Finder",
    },
    {
      title: "Carbnb",
      link: "https://carbnb-tomhmwn.herokuapp.com/",
      imgUrl: "/carbnb.png",
      description: "A web application to find car rentals",
      stacks: [
        "PostgreSQL",
        "Ruby on Rails",
        "Bootstrap",
        "Ruby",
        "Tailwind",
        "Stimulus",
        "Heroku",
      ],
      github: "https://github.com/TomHmwn/carbnb",
    },

    {
      title: "My portfolio",
      link: "https://www.thomashimawan.com/",
      imgUrl: "/portfolio.png",
      description: "This website your are visiting right now",
      stacks: [
        "Next.js",
        "Tailwind",
        "JavaScript",
        "Framer Motion",
        "Vercel",
        "React rough notation",
      ],
      github:"https://github.com/TomHmwn/tomhmwn-website",
    },
    {
      title: "Snack in a Van",
      imgUrl: "/snack-in-van.gif",

      description:
        "A web app that takes users’ food orders and facilities vendor transactions Vendors can show their locations in a map and add customization their menu",
      stacks: [
        "NodeJS",
        "ReactJS",
        "MUI",
        "PassportJS",
        "ExpressJS",
        "MongoDB",
        "Heroku",
      ],
    },
    {
      title: "Wordle",
      imgUrl: "/wordle.png",
      description: "A web app that allows users to play a game of wordle",
      stacks: ["ReactJS"],
      link: "https://wordle-clone-i893xk3lz-tomhmwn.vercel.app/",
      github: "https://github.com/TomHmwn/wordle-clone",
    },
    {
      title: "AI Awakening 3",
      imgUrl: "/ai-awakening-3.gif",
      description:
        "Developed a Top-down sci-fi theme shooter game on a procedurally generated dungeon map with an endless waves system using Unity and C#. The game features numerous pickup weapons and abilities",
      stacks: ["Unity", "C#"],
      github: "https://github.com/TomHmwn/COMP30019",
    },
    {
      title: "Conway's Game of Life",
      imgUrl: "/gosper_glider_gun.gif",
      description:
        "Developed a Ruby program that simulates Conway's Game of Life using Curses Library to visualise an animation in the CLI, implemented using Test driven development with Rspec for testing",
      stacks: ["Ruby"],
      github: "https://github.com/TomHmwn/dojo/tree/master/game_of_life_20230705"
    },
    {
      title: "AI Blog Post",
      imgUrl: "/AI-next-blog.gif",
      description:
        "Developed a blog post using Next.js and TailwindCSS, Post database is using Prisma, Special thing is the User can automatically generate a blog post using OpenAI's GPT-3 API",
      stacks: ["Next.js","Prisma", "TailwindCSS", "heroIcons","TipTap", "Typescript", "Vercel", "OpenAI"],
      github: "https://github.com/TomHmwn/next-ai-blog",
      link: "https://next-ai-blog-jjxl.vercel.app/"
    }
  ],
  about: {
    title:
      "I am a full stack web developer with a passion for learning and creating. Excited to bring my creativity and problem solving skills to the world of web development.",
    description: [
      `Hey there, I'm Thomas and I enjoy creating things that live on the internet, as a self-taught software developer and recent graduate in Computer Science from the University of Melbourne, I'm passionate about building innovative solutions using the latest technologies.`,
      `I'm always eager to learn and expand my skillset, which led me to complete an intensive web development bootcamp at Le Wagon. This experience helped me to further hone my coding abilities and gave me the opportunity to work with a diverse group of like-minded individuals.`,
      'Aside from coding, I have a love for music and sports. You can often find me playing the piano or guitar, and I enjoy participating in soccer, swimming, and golf.',
      'When it comes to my work, I am a determined, creative, and adaptable individual with excellent problem-solving and collaboration skills. I love Ruby on Rails in particular, but with the current Job Market I am trying to learn other more popular frameworks like AdonisJs, I think Adonis is really cool because it has the conventions of Rails but with the speed of Typescript/ Javascript.',
      'I have also been mentored by Michael Milewski, a Lead software engineer, who has helped me to improve my coding skills and taught me the importance of Test Driven Development, Feel free to ask for a reference from him.',
      'My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.',
      `Here are a few technologies I've been working with recently:`,
    ],
    currentProject: "Tailwind Master Kit",
    currentProjectUrl: "https://tailwindmasterkit.com",
  },
  experience: [
    {
      role: "Fullstack Developer / AWS DevOps Engineer",
      company: "LVT People",
      year: "2023 July - Present",
      companyLink: "https://lvtpeople.com.au/",
      desc: [
        "Developed a web application to help clients find jobs",
        "Tech stack: AdonisJS, PostgreSQL, TailwindCSS, NextJS, Typescript, AWS RDS, beanstalk, codepipeline, S3 bucket",
        "Worked in an agile with sprints and daily standups, and used Jira for project management with Business Analyst, Product Owner, and other developers",
      ],

    },
    {
      role: "Web Development Bootcamp",
      company: "Le Wagon",
      year: "2023 January - March",
      companyLink: "https://www.lewagon.com/",
      desc: [
        "Attended a 9-week intensive coding bootcamp learning Ruby, Ruby on Rails, JavaScript, HTML, CSS, SQL and git",
        "Developed a web application from scratch using Ruby on Rails and PostgreSQL",
        "Worked in a team of 4 to develop a clone of Airbnb in a week",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Boutique Technologies",
      year: "2021-2022",
      companyLink: "https://www.boutiquetechnologies.com.au/",
      desc: [
        "Developed an email signature signoff app using AWS, Docker and NEXT.js to automate creating email signatures",
        "Built a time-sheet application to help staff schedule and keep track of their shifts, which helps in reducing employee's payroll",
        "Perform daily stand-up, weekly sprints and documentation to review and organise activities",
      ],
    },
    {
      role: "Bachelor of Science Majoring in Computing and Software Systems",
      company: "University of Melbourne",
      year: "2019-2022",
      companyLink:
        "https://handbook.unimelb.edu.au/2019/components/b-sci-major-1",
      desc: [
        "Graduated from the University of Melbourne",
        "Learn the fundamentals of computer science and software development",
        "Data structures and algorithms, software design, web development, databases, computer systems, machine learning, and artificial intelligence",

        "Design of Algorithms (COMP20007)",
        "Object Oriented Software Development (SWEN20003)",
        "Software Modelling & Design (SWEN30006)",
        "Computer Systems (COMP30023)",
        "Web Information Technologies (INFO30005)",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "eHatSystems",
      year: "2021",
      companyLink: "https://www.ehatsystems.com/",
      desc: [
        "Helped in the integration of their video streaming feature in their web application to their hardware",
      ],
    },
  ],
  resumeUrl: "/Thomas_Himawan_Resume.pdf",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/thomas-himawan/",
    github: "https://github.com/TomHmwn",
  },
  techStacks: [
    {
      name: "React",
      icon: "react",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "Rails",
      icon: "rails",
      iconifyClass: "skill-icons",
    },
    {
      name: "Ruby",
      icon: "ruby",
      iconifyClass: "skill-icons",
    },
    {
      name: "JavaScript",
      icon: "javascript",
      iconifyClass: "skill-icons",
    },
    {
      name: "Node.js",
      icon: "nodejs",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "ExpressJS",
      icon: "expressjs",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
      iconifyClass: "skill-icons",
    },
    {
      name: "PostgreSQL",
      icon: "postgresql",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "Bootstrap",
      icon: "bootstrap",
      iconifyClass: "skill-icons",
    },
    {
      name: "TailwindCSS",
      icon: "tailwindcss",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "Heroku",
      icon: "heroku",
      iconifyClass: "skill-icons",
    },
    {
      name: "Git",
      icon: "git",
      iconifyClass: "skill-icons",
    },
    {
      name: "Html",
      icon: "html",
      iconifyClass: "skill-icons",
    },
    {
      name: "Css",
      icon: "css",
      iconifyClass: "skill-icons",
    },
    {
      name: "Sass",
      icon: "sass",
      iconifyClass: "skill-icons",
    },
    {
      name: "Python",
      icon: "python",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "Java",
      icon: "java",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "C",
      icon: "c",
      iconifyClass: "skill-icons",
    },
    {
      name: "C#",
      icon: "csharp",
      iconifyClass: "devicon",
    },
    {
      name: "Unity",
      icon: "unity",
      dark: true,
      light: true,
      iconifyClass: "skill-icons",
    },
    {
      name: "AdonisJS",
      icon: "adonis",
      iconifyClass: "skill-icons",
    },
  ],
};

export default userData;
