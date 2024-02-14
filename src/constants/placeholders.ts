import type { initialData } from "src/store/data";

export const placeHolders = {
  personalInfo: {
    name: "John Doe",
    email: "email@domain.com",
    phone: "+91 123456789",
    address: `789 Coconut Grove
    Kochi, Kerala 682001
    India`,
  },
  about: {
    description:
      "Experienced web developer with a passion for coding and a proven track record for delivering high-quality work. Committed to continuous learning and growth, with a strong drive to achieve excellence in all endeavors.",
    shortDescription: "Eager to learn or Team player...",
    socialMedia: {
      name: "Github",
      link: "http://github.com",
    },
  },
  skills: {
    type: "Framework",
    value: "React or Vue JS or Svelte",
  },
  educations: {
    name: "Institution name",
    place: "Kochi",
    degree: "Bachelors in Computer Science",
    from: "JUNE 2014",
    to: "JULY 2017",
  },
  experiences: {
    company: "Company 1",
    role: "Software engineer",
    place: "Kochi",
    from: "June 2022",
    to: "Present",
    about:
      "Company 1 is a full-service software provider enabling enterprises to apply digital technology in their business context through data-driven solutions for mobile, cloud, and web platforms. ",
    responsibilities: {
      project: "Project 1",
      description:
        "What is this project about?. What did you do in project?. How it helped the company?",
      technologiesUsed: "ReactJS, Redux",
    },
  },
  projects: {
    name: "Project name",
    shortDescription: "A short description about project",
    description: "Explain what did you do and what does app do",
    technologies: "ReactJS, Redux",
    links: {
      name: "Github",
      link: "http://github.com",
    },
  },
};

export const keyTitles: Record<keyof typeof initialData, string> = {
  about: "About",
  personalInfo: "Personal Info",
  skills: "Skills",
  educations: "Education",
  experiences: "Experiences",
  projects: "Projects",
};
