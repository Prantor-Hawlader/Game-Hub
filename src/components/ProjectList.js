import Project1 from "../assets/game_hub.png";
import Project2 from "../assets/Project2.png";
import Project3 from "../assets/adminWebsite.png";
import Project4 from "../assets/storeWebsite.png";
import Project5 from "../assets/mychatAppSS.png";
import Project6 from "../assets/prantor-collection-management_ss.png";
const items = [
  {
    id: 1,
    img: Project6,
    title: "Personal Collection Management",
    details:
      "This is a personal collection management web application where the user can create collections. When creating a collection, the user can add multiple custom fields for his/her collection. I built this website using mainly Next.js, NextUI, PostgreSQL and Neon ",
    link: "https://prantor-collection-management.vercel.app",
    sourceCode: "https://github.com/Prantor-Hawlader/personal-collection-management",
  },
  {
    id: 2,
    img: Project3,
    title: "E-commerce admin dashboard",
    details:
      "Using this dashboard we can create store, products, categories, billboards, and so on. For building this e-commerce admin dashboard, I used mainly Next.js, Typescript, Prisma, Tailwind, and MySQL. I also used Planetscale for the database and Cloudinary for image upload.",
    link: "https://future-commerce-admin.vercel.app/",
    sourceCode: "https://github.com/Prantor-Hawlader/Future-Commerce-admin",
  },

  {
    id: 4,
    img: Project5,
    title: "Chat Application",
    details:
      "Developed a real-time chat web application enabling users to connect and communicate. Utilized the MERN stack for a robust and scalable architecture. Implemented JWT for secure authentication and Socket.io for facilitating real-time messaging functionalities.",
    link: "https://mychat-app-19aq.onrender.com/",
    sourceCode: "https://github.com/Prantor-Hawlader/Mychat-app",
  },

  {
    id: 3,
    img: Project1,
    title: "Game Hub",
    details:
      "This is a fun project where different genres of games have been sorted.I built this website using React,Typescript,React Query and Zustand for state management.",
    link: "https://prantor-gamer-world.vercel.app/",
    sourceCode: "https://github.com/Prantor-Hawlader/Gamer-World",
  },

  {
    id: 5,
    img: Project4,
    title: "E-commerce store",
    details:
      "Here is the main e-commerce store which is controlled by the admin dashboard. I used Next.js, Typescript, Stripe, and Tailwind to build this website",
    link: "https://future-commerce-store.vercel.app/",
    sourceCode: "https://github.com/Prantor-Hawlader/Future-Commerce-store",
  },

  {
    id: 6,
    img: Project2,
    title: "Developer Hub",
    details:
      "In this project I have simply focused in company level marketing for doing developer things for customer. This website had built using Next.js. ",
    link: "#",
    sourceCode: "#",
  },
];

export default items;
