import { link } from "fs";

export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Dynamic Compro",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Attendify",
    des: "A simple and effective attendance tracking system to manage and monitor employee or student attendance.",
    img: "/attendify.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://testingapp.cloud/",
  },
  {
    id: 2,
    title: "SiBanyuWeb",
    des: "Simplify the management of village letters with SiBanyuWeb. Efficiently handle requests, approvals, and archiving of official correspondence.",
    img: "/sibanyuweb.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://sibanyuweb.site/",
  },
  {
    id: 3,
    title: "Dynamic Compro",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "Stil-Deployment",
  },
  {
    id: 4,
    title: "Coming Soon",
    des: "The latest project is about to launch soon.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Laboris culpa sunt ea do Lorem ut adipisicing. Minim aute dolor ex do. Commodo qui eu aliqua dolore irure elit. Laborum magna quis sint adipisicing labore culpa tempor adipisicing laboris. Ea exercitation amet incididunt est labore. Consectetur elit cillum commodo sint. Quis in cupidatat fugiat cupidatat pariatur consectetur reprehenderit pariatur magna ipsum.",
    name: "Coming Soon",
    title: "Coming Soon",
  },
  {
    quote:
      "Laborum deserunt ut ut laborum laboris. Est qui commodo amet ex sint officia do irure Lorem sunt enim qui. Amet ullamco magna ad consectetur eu reprehenderit dolor laboris ut deserunt sunt Lorem consectetur. Anim mollit amet ullamco velit sunt cillum incididunt. Magna ipsum velit ad ipsum. Irure excepteur velit quis id labore consequat amet laborum sint qui. Incididunt labore id eiusmod non quis ut reprehenderit eiusmod elit elit laborum sit.",
    name: "Coming Soon",
    title: "Coming Soon",
  },
  {
    quote:
      "Adipisicing in exercitation aute eu quis Lorem non reprehenderit consectetur quis nostrud nisi cupidatat. Consequat adipisicing nisi sit sunt ex ut dolor. Nostrud cillum duis eu do eu magna cillum. Nulla officia aliqua amet est ut proident officia dolore. Cupidatat occaecat laborum aliquip quis aute amet reprehenderit cillum cupidatat ipsum eu. Commodo amet do amet laboris sunt ut sint minim aute.",
    name: "Coming Soon",
    title: "Coming Soon",
  },
  {
    quote:
      "Laborum reprehenderit veniam magna sint nostrud amet aute do. Consequat ullamco in nulla ea nostrud exercitation ut. Nulla pariatur magna ad incididunt anim sit Lorem eu proident duis duis dolor quis ea. Duis amet proident ullamco sit laborum Lorem eiusmod in anim eiusmod officia Lorem irure duis. Proident sit deserunt ut voluptate consectetur eiusmod minim culpa officia. Laboris velit adipisicing cupidatat adipisicing.",
    name: "Coming Soon",
    title: "Coming Soon",
  },
  {
    quote:
      "Lorem ullamco laboris pariatur nisi amet ipsum et ipsum ut enim sint reprehenderit labore culpa. Elit reprehenderit ipsum elit cupidatat deserunt amet aute. Cupidatat irure esse pariatur consectetur minim ea ut est dolor consequat in.",
    name: "Coming Soon",
    title: "Coming Soon",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer at PT. Awan Network Indonesia",
    desc: "As a backend developer, I’ve worked on diverse projects. In a ticketing app, I built API endpoints for creating, updating, and managing tickets, with SQL-based filtering by status, date, or category. In a PPOB project, I developed an admin dashboard to display transaction data using Blade PHP. I also created a real-time dashboard for updating company profiles, focusing on accessibility and ease of use.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Developer at Yayasan Iman Taqwa Global",
    desc: "At this company, I led a team of three in developing a Point of Sales (POS) application. As team lead, I managed planning, task allocation, and project oversight. While working as a fullstack developer, my main focus was backend development, where I designed the database structure, APIs, and business logic. This Laravel-based POS app manages inventory flow, monitors stock, tracks sales transactions, and oversees cash flow with real-time tracking. My team and I implemented user authentication, transaction management, and system integration, ensuring a user-friendly application that meets the company's operational needs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Database Teaching Assistan at Undip",
    desc: "In this role, I’m responsible for conducting training sessions on core database creation concepts. This includes teaching database analysis, design methodologies, and implementation steps, emphasizing best practices for structuring and optimizing data. I guide participants in applying these principles practically using relevant programming languages, ensuring they gain a strong foundation in database management and development.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Backend Developer at CV. Tegar Ponsel",
    desc: "I led a team of three in developing a Point of Sales (POS) application, managing project planning, task delegation, and progress oversight. While I contributed as a fullstack developer, my primary focus was backend development, including database design, API creation, and business logic implementation. The Laravel-based POS app tracks inventory, monitors stock, manages sales transactions, and oversees cash flow with real-time tracking. My team and I ensured the application was user-friendly, reliable, and met the company's operational needs effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.svg",
    link: "https://github.com/Zavians",
  },
  {
    id: 2,
    img: "/izz.svg",
    link: "https://www.instagram.com/kenzavd/",
  },
  {
    id: 3,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/kenzavianda/",
  },
];
