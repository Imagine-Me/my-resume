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
};

export const keyTitles: Record<keyof typeof initialData, string> = {
  about: "About",
  personalInfo: "Personal Info",
  skills: "Skills",
};
