import { initialData } from "src/store/data";
import type { IContent, ITemplate } from "./template.interface";
const links = initialData.links
  .map((link) => [
    {
      link: link.link,
      type: "body2",
      color: "#2079c7",
      content: link.content,
    },
    {
      type: "body2",
      content: "|",
    },
  ])
  .flat() as IContent[];

const experiences: IContent[] = [];
initialData.experiences.forEach(
  ({ title, from, to, about, place, responsibilities, role }) => {
    experiences.push({
      type: "body2",
      marginBottom: 5,
      marginTop: 7,
      content: [
        {
          type: "body2",
          content: title + ",",
          fontWeight: "bold",
        },
        {
          type: "body2",
          content: place + " -",
        },
        {
          type: "body2",
          content: role,
          style: "italic",
        },
      ],
    });
    experiences.push({
      type: "small",
      content: from + " - " + to,
      marginBottom: 5,
      color: "#606060",
    });
    experiences.push({
      type: "body2",
      content: about,
      marginBottom: 8,
    });
    responsibilities.forEach((value) => {
      experiences.push({
        content: [
          {
            type: "body2",
            content: value.project + `${value.project ? " -" : ""}`,
            fontWeight: "bold",
          },
          {
            type: "body2",
            content: value.description,
          },
          {
            type: "body2",
            fontWeight: "bold",
            content: `[${value.languages.join(", ")}]`,
          },
        ],
        type: "list",
        marginBottom: 5,
        align: "justify",
      });
    });
  },
);

const skills: IContent[] = [];

initialData.skills.forEach((skill) => {
  skills.push({
    type: "body2",
    marginTop: 7,
    content: [
      {
        type: "body2",
        content: skill.type + ":",
        fontWeight: "bold",
      },
      {
        type: "body2",
        content: skill.value.join(", "),
      },
    ],
  });
});

const educations: IContent[] = [];

initialData.education.forEach((education) => {
  educations.push({
    type: "body2",
    marginTop: 12,
    content: [
      {
        type: "body2",
        content: education.name + ",",
        fontWeight: "bold",
      },
      {
        type: "body2",
        content: education.place + ",",
      },
      {
        type: "body2",
        content: education.degree,
        style: "italic",
      },
    ],
  });
  educations.push({
    type: "small",
    marginTop: 7,
    content: `${education.from} - ${education.to}`,
  });
});

const projects: IContent[] = [];

initialData.projects.forEach((project) => {
  projects.push({
    type: "body2",
    marginBottom: 7,
    marginTop: 12,
    content: [
      { type: "body2", content: project.name, fontWeight: "bold" },
      {
        type: "body2",
        content: "- " + project.shortDescription,
        style: "italic",
        fontWeight: "bold",
      },
    ],
  });

  const links: IContent[] = [];
  project.links.forEach((link, i) => {
    links.push({ type: "body2", content: link.name, link: link.link });
    if (i < project.links.length - 1) {
      links.push({ type: "body2", content: "|" });
    }
  });

  projects.push({
    type: "body2",
    marginBottom: 7,
    content: links,
  });

  projects.push({
    type: "body2",
    marginBottom: 7,
    content: project.description,
    align: "justify",
  });

  projects.push({
    type: "body2",
    content: [
      {
        type: "body2",
        content: "Technologies:",
        fontWeight: "bold",
      },
      {
        type: "body2",
        content: project.technologies.join(", "),
      },
    ],
  });
});

export const template1: ITemplate[] = [
  {
    layout: "4/2",
    contents: [
      [
        {
          type: "h1",
          content: initialData.name,
          marginBottom: 10,
        },
        {
          type: "body2",
          content: initialData.explain.join(" | "),
        },
      ],
      [
        {
          type: "body2",
          content: initialData.address,
          marginBottom: 5,
        },
        {
          type: "body2",
          fontWeight: "bold",
          content: initialData.phoneNumber,
          marginBottom: 5,
        },
        {
          type: "body2",
          color: "#2079c7",
          content: initialData.email,
          marginBottom: 5,
        },
        {
          type: "body2",
          content: links.slice(0, links.length - 1),
        },
      ],
    ],
  },
  {
    layout: "4/2",
    contents: [
      [
        {
          type: "body1",
          content: "EXPERIENCE",
          color: "#2079c7",
          fontWeight: "bold",
        },

        ...experiences,
        {
          type: "body1",
          content: "PROJECTS",
          color: "#2079c7",
          marginTop: 12,
          fontWeight: "bold",
        },
        ...projects,
      ],
      [
        {
          type: "body1",
          content: "SKILLS",
          color: "#2079c7",
          fontWeight: "bold",
        },
        ...skills,
        ...skills,
        ...skills,
        ...skills,
        ...skills,
        ...skills,
        ...skills,
        {
          type: "body1",
          content: "EDUCATION",
          color: "#2079c7",
          fontWeight: "bold",
          marginTop: 15,
        },
        ...educations,
      ],
    ],
  },
];
