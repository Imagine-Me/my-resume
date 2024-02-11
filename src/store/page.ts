import { derived, get, writable } from "svelte/store";
import { initialData as data } from "./data";

const pages = Object.keys(data);

const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get("page") ?? "";
const currentForm = pages.includes(param) ? param : "PersonalInfo";

const initialData = {
  currentForm,
};

function createPage() {
  const page = writable(initialData);
  const { subscribe, update } = page;

  const changeForm = (currentForm: string) => update(() => ({ currentForm }));
  return { subscribe, changeForm, page };
}

export const page = createPage();
const readablePage = get(page);
export const pageData = derived(page.page, ($page) => {
  const index = pages.findIndex((value) => value === $page.currentForm);
  const nextForm = pages[index + 1];
  const prevForm = pages[index - 1];
  const total = pages.length;
  const current = index + 1;
  return {
    currentForm: readablePage.currentForm,
    nextForm,
    prevForm,
    total,
    current,
  };
});

// () => {
// };
