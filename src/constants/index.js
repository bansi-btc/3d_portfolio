import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    portfolio,
    studyNotion,
    testimonial,
    golang,
    sql,
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem solver",
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
      name: "Golang",
      icon: golang,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  ];
  
  const experiences = [
    {
      title: "SDE intern ",
      company_name: "Appointy",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2024 - July 2024",
      points: [
        "Developed 5+ backend services using Golang frameworks/libraries such as Gin, Fiber, and Native, utilized dependency injection with UberFx to enhance the modularity.",
        "Created microservices with gRPC and REST wrappers for gRPC, improving benchmarks for APIs by 10 times faster.",
        "Integrated GraphQL into applications, including hands-on work with Appointy’s proprietary Jaal framework.",
      ],
    },
    {
      title: "Mentor",
      company_name: "Asper",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "August 2022 - August 2023",
      points: [
        "Mentored and Guided 15 students in improving their DSA knowledge and enhancing their problem solving skills",
        "Collaborated with a team of developers and designers to build Asper’s official website using ReactJS, Tailwind CSS.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3d portfolio website",
      description:
      "A web-based portfolio showcasing my expertise in designing intuitive user interfaces and developing robust web applications, highlighting my skills and work experiences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "three js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "StudyNotion",
      description:
        "It's an education platform I developed, allowing students to purchase courses and instructors to create and manage them, with an intuitive user interface and seamless content management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "green-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: studyNotion,
      source_code_link: "https://github.com/bansi-btc/StudyNotion-Hosting",
    },
    {
      name: "TestimonialsHub",
      description:
        "TestimonialHub is a platform I developed for collecting and managing customer feedback, allowing users to create and moderate testimonial spaces for various products.",
      tags: [
        {
          name: "reactJs",
          color: "blue-text-gradient",
        },
        {
          name: "expressJs",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: testimonial,
      source_code_link: "https://github.com/bansi-btc/testimonialHub",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };