import { writable } from "svelte/store";
export interface IEducation {
  name: string;
  place: string;
  degree: string;
  from: string;
  to: string;
}

export interface IResponsibilities {
  project: string;
  description: string;
  technologiesUsed: string[];
}

export interface IExperience {
  company: string;
  role: string;
  place: string;
  from: string;
  to: string;
  about: string;
  responsibilities: IResponsibilities[];
}

export interface IProjects {
  name: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  links: { link: string; name: string }[];
}

export interface ISkills {
  type: string;
  value: string[];
}

let localData = localStorage.getItem("resume_craft_data");

let hydratedData = {};
if (localData) {
  try {
    hydratedData = JSON.parse(localData);
  } catch {
    console.log("ISSUE WHILE PARSING DATA");
  }
}

export const initialData = {
  personalInfo: {
    name: "",
    phone: "",
    email: "",
    address: "",
  },
  about: {
    description: "",
    shortDescription: [],
    socialMedia: [
      {
        link: "",
        name: "",
      },
    ],
  },
  skills: [
    {
      type: "",
      value: [] as string[],
    },
  ],
  educations: [] as IEducation[],
  experiences: [] as IExperience[],
  projects: [] as IProjects[],
};

function createData() {
  const { subscribe, update } = writable({
    ...initialData,
    ...hydratedData,
  });

  const changeForm = (
    section: keyof typeof initialData,
    payload: Object | Array<string>,
  ) =>
    update((value) => {
      if (Array.isArray(payload)) {
        return { ...value, [section]: payload };
      }
      const data = { ...value[section], ...payload };
      return { ...value, [section]: data };
    });
  return { subscribe, changeForm };
}

export const data = createData();

data.subscribe((value) => {
  localStorage.setItem("resume_craft_data", JSON.stringify(value));
});
