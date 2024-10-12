import { elegantNameParser } from "@/utils/textUtils";
import { listFiles, readYamlFile } from "../file-functions";

const FOLDER = "data/alternative-to/";

export const getAlternativeToUrlBySlug = (slug) => `/alternativa-para/${slug}`

export const listAlternativeToFiles = async () => {
  const files = await listFiles(FOLDER);
  return files.filter((file) => file.endsWith(".yaml"));
};

const readAlternativeToYamlFile = async (slug) => {
  const filename = slug.endsWith(".yaml") ? slug : `${slug}.yaml`;
  return await readYamlFile(FOLDER, filename);
};

export const getAlternativeToBySlug = async (slug) => {
  if (slug.endsWith(".yaml")) throw new Error(slug + "has yaml");
  const file = slug + ".yaml";
  const yaml = await readAlternativeToYamlFile(file);

  return {
    ...yaml,
    slug: slug,
    filename: file,
  };
};

export const readAlternativeToFilesAndRepoData = async () => {
  const files = await listAlternativeToFiles();

  // this loads all yamls + repodata in memory - shouldn't be a problem for a while, but may require refactor late
  const yamlAndRepos = await Promise.all(files.map(async (file) => getAlternativeToBySlug(file.replace('.yaml', ''))));

  // todo when upgrade node version, replace to `.toSorted((el) => el.repoData.forks)`
  yamlAndRepos.sort((x, y) => x.name.localeCompare(y.name));

  return yamlAndRepos;
};

export const readAlternativeToFileImages = async (slug, yaml) => {
  const images = await listFiles(yaml.images);

  return images //
    .filter((el) => !el.includes("logo")) //
    .map((el) => {
      const extension = el.substring(el.lastIndexOf("."));
      const title = elegantNameParser(el.replace(extension, ""));

      return {
        title,
        url: `/paid/${slug}/${el}`,
      };
    });
};
