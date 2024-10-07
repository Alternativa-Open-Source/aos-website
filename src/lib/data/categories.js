import { slugify } from "@/utils/textUtils";
import { readOpenSourceFilesAndRepoData } from "./open-source";
import { readFile, saveFile } from "../file-functions";

const FOLDER = "data/cache/category-data/";

export const listCategories = async () => {
  const filesWithRepo = await readOpenSourceFilesAndRepoData();

  const categories = filesWithRepo //
    .flatMap((project) => project.yaml.categories) //
    .map((category) => ({ name: category, slug: slugify(category) }));

  // cache the categories to allow reading later
  categories.forEach((category) => saveCategoryCache(category, filesWithRepo));

  return categories;
};

const saveCategoryCache = async (category, filesWithRepo) => {
  const projects = filesWithRepo
    .filter((project) => {
      const categories = project.yaml.categories;
      return categories.includes(category.name);
    })
    .map((project) => project.slug);

  const categoryWithProjects = {
    ...category,
    projects,
    generatedAt: new Date().toISOString(),
  };

  const filename = categoryWithProjects.slug + ".json";
  await saveFile(FOLDER, filename, categoryWithProjects);
};

export const readCategory = async (slug) => {
  const filename = slug + ".json";
  const content = await readFile(FOLDER, filename);
  return JSON.parse(content);
};
