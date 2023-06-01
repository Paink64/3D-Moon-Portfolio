import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    cpp,
    tailwind,
    nodejs,
    git,
    visualizer,
    schematic,
    vsc,
    moonpic,
    threejs,
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
      title: "Software Developer",
      icon: creator,
    },
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    }
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
      name: "Visualizer",
      description:
        "Visualization of multiple algorithms. Which are used for multiple applications such as path finding and sorting.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "Dear Imgui",
          color: "green-text-gradient",
        },
      ],
      image: visualizer,
      source_code_link: "https://github.com/Paink64/Visualizer",
    },
    {
      name: "Pipeline",
      description:
        "Simulated RISC-V Computer Architecture",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "SystemVerilog",
          color: "green-text-gradient",
        },
      ],
      image: schematic,
      source_code_link: "https://github.com/Paink64/Pipeline",
    },
    {
      name: "VS Code Portfolio",
      description:
        "A personal portfolio website with the theme of Visual Studio Code",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: vsc,
      source_code_link: "https://github.com/Paink64/vs-portfolio",
    },
    {
      name: "3D Moon Portfolio",
      description:
        "A personal portfolio made using React Three Fiber",
      tags: [
        {
          name: "HTML/CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Javascript",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Three.js",
          color: "blue-text-gradient",
        },
        {
          name: "React Three Fiber",
          color: "green-text-gradient",
        },
      ],
      image: moonpic,
      source_code_link: "https://github.com/Paink64/vs-portfolio",
    },
  ];
  
  export { services, technologies, testimonials, projects };