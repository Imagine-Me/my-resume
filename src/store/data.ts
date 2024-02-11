import { writable, get } from "svelte/store";
const skills = [
  {
    type: "Language",
    value: ["Javascript", "Typescript", "Python", "PHP", "HTML/CSS"],
  },
  {
    type: "Frameworks",
    value: ["ReactJS", "Svelte", "NextJS", "Nestjs", "ExpressJS", "VueJS"],
  },
  {
    type: "Databases",
    value: ["Postgres", "Mysql", "MongoDB", "SQLite"],
  },
  {
    type: "Test",
    value: ["Jest"],
  },
  {
    type: "Version Control",
    value: ["Git"],
  },
];

const experiences = [
  {
    title: "Keleno",
    role: "Software Engineer",
    place: "Kochi",
    from: "NOV 2017",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 1",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 1",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },
  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },

  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },

  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },

  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },

  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },

  {
    title: "Keleno",
    role: "Software Engineer",
    from: "NOV 2017",
    place: "Kochi",
    to: "PRESENT",
    about: "Keleno is a startup that provides SaaS to real world problems.",
    responsibilities: [
      {
        project: "Project 1",
        description:
          "Used React, firebase realtime DB to build a Virtual Queue app, that helps users to pick a specific slot for appointment, users can see the number of users in real time and get notifications.",
        languages: ["ReactJS", "Firebase"],
      },
      {
        project: "Project 2",
        description:
          "Created a package that mocks sensor data so that we can test the app without the help of real sensors.",
        languages: ["Python"],
      },
      {
        project: "Project 3",
        description:
          "Created a module for an existing booking engine app, which shows the economic rooms to users with given criteria ",
        languages: ["Laravel"],
      },
      {
        project: "Project 2",
        description:
          "Created a calendar component for an appointment app, which can be modified by given APIs ",
        languages: ["Vanilla JS"],
      },
    ],
  },
];

const links = [
  {
    link: "https://github.com/Imagine-Me",
    content: "Github",
  },
  {
    link: "https://www.linkedin.com/in/prince-thomas-396b0a16a/",
    content: "Linkedin",
  },
  {
    link: "https://dev.to/princekizhthara",
    content: "Dev",
  },
  {
    link: "https://princethomas.dev",
    content: "Portfolio",
  },
];

const education = [
  {
    name: "MES College of Engineering",
    place: "Ernakulam",
    degree: "Bachelors in Computer Science",
    from: "JUNE 2014",
    to: "JULY 2017",
  },
  {
    name: "National Institute of Electronics & Information Technology",
    place: "Calicut",
    degree: "Android Certification (Java)",
    from: "JULY 2017",
    to: "OCT 2017",
  },
];

const projects = [
  {
    name: "PollApp",
    shortDescription: "Realtime polling",
    links: [
      {
        name: "Github",
        link: "https://github.com/Imagine-Me/pollapp",
      },
      {
        name: "Project Link",
        link: "https://pollapp-shell.netlify.app/",
      },
    ],
    technologies: [
      "React JS",
      "Webpack Module Federation",
      "Recoil",
      "Express JS",
      "PostgreSQL",
      "Docker",
      "Redis",
      "Sequelize",
    ],
    description:
      "A Microfrontend application for creating polls with MCQ questionnaires. App uses webpack module federation for achieving Microfrontend and in the backend uses PostgreSQL and ExpressJS. To handle the polls Redis is used.",
  },
  {
    name: "React Meet",
    shortDescription: "Video chat application using webRTC",
    links: [
      {
        name: "Github",
        link: "https://github.com/Imagine-Me/meet-react",
      },
      {
        name: "Project Link",
        link: "https://meet-p.netlify.app/",
      },
    ],
    technologies: ["React JS", "webRTC"],
    description:
      "A web application for meeting your friends one to one. This uses the real-time communication capability of the web(webRTC). ",
  },
  {
    name: "Virtual Keyboard ",
    shortDescription: "A responsive virtual keyboard",
    links: [
      {
        name: "Github",
        link: "https://github.com/Imagine-Me/virtual-keyboard",
      },
      {
        name: "Project Link",
        link: "https://laughing-noether-728624.netlify.app/",
      },
    ],
    technologies: ["Javascript"],
    description:
      "Built on vanilla JS,  completely responsive virtual keyboard.",
  },
];

export const initialData = {
  // name: "Prince Thomas",
  // explain: ["Team player", "Problem solver", "Eager to learn"],
  // address:
  //   "Church Road, Manjapra, Angamali, Ernakulam , 683581 asdasdasd as asdasd asdasdasd",
  // phoneNumber: "+91 8589852718",
  // email: "princekizhtdsfsdfsdhara@gmail.com",
  // skills,
  // experiences,
  // links,
  // education,
  // projects,
  personalInfo: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  about: {
    description: "",
  },
};

function createData() {
  const { subscribe, set, update } = writable(initialData);

  return { subscribe };
}

export const data = createData();
export const readableData = get(data);
