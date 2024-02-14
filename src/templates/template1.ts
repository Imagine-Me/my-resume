import {
  data,
  initialData,
  type IExperience,
  type IProjects,
  type ISkills,
  type IEducation,
} from "src/store/data";
import type { IContent, ITemplate } from "./template.interface";
const getLinks = (links: { link: string; name: string }[]) =>
  links
    .map((link) => [
      {
        link: link.link,
        type: "body2",
        color: "#2079c7",
        content: link.name,
      },
      {
        type: "body2",
        content: "|",
      },
    ])
    .flat() as IContent[];

const getExperiences = (data: IExperience[]) => {
  const experiences: IContent[] = [];

  data.forEach(
    ({ company, from, to, about, place, responsibilities, role }) => {
      experiences.push({
        type: "body2",
        marginBottom: 5,
        marginTop: 7,
        content: [
          {
            type: "body2",
            content: company + ",",
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
              content: `[${value.technologiesUsed.join(", ")}]`,
            },
          ],
          type: "list",
          marginBottom: 5,
          align: "justify",
        });
      });
    },
  );
  return experiences;
};

const getSkills = (data: ISkills[]) => {
  const skills: IContent[] = [];

  data.forEach((skill) => {
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

  return skills;
};

const getEducations = (data: IEducation[]) => {
  const educations: IContent[] = [];

  data.forEach((education) => {
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
  return educations;
};

const getProjects = (data: IProjects[]) => {
  const projects: IContent[] = [];

  data.forEach((project) => {
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

  return projects;
};

export const template1 = (data = initialData): ITemplate[] => {
  const { personalInfo, about, educations, experiences, projects, skills } =
    data;
  return [
    {
      layout: "4/2",
      contents: [
        [
          {
            type: "h1",
            content: personalInfo.name,
            marginBottom: 10,
          },
          {
            type: "body2",
            content: about.shortDescription.join(" | "),
          },
        ],
        [
          {
            type: "body2",
            content: personalInfo.address,
            marginBottom: 5,
          },
          {
            type: "body2",
            fontWeight: "bold",
            content: personalInfo.phone,
            marginBottom: 5,
          },
          {
            type: "body2",
            color: "#2079c7",
            content: personalInfo.email,
            marginBottom: 5,
          },
          {
            type: "body2",
            content: getLinks(about.socialMedia).slice(0, getLinks.length - 1),
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

          ...getExperiences(experiences),
          {
            type: "body1",
            content: "PROJECTS",
            color: "#2079c7",
            marginTop: 12,
            fontWeight: "bold",
          },
          ...getProjects(projects),
        ],
        [
          {
            type: "body1",
            content: "SKILLS",
            color: "#2079c7",
            fontWeight: "bold",
          },
          ...getSkills(skills),
          {
            type: "body1",
            content: "EDUCATION",
            color: "#2079c7",
            fontWeight: "bold",
            marginTop: 15,
          },
          ...getEducations(educations),
        ],
      ],
    },
  ];
};
