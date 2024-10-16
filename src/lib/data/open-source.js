import { elegantNameParser } from "@/utils/textUtils";
import { listFiles, readYamlFile } from "../file-functions";
import { getRepoData } from "../repository-data";

const FOLDER = "data/open-source/";

export const listOpenSourceFiles = async () => {
  const files = await listFiles(FOLDER);
  return files.filter((file) => file.endsWith(".yaml"));
};

const readOpenSourceYamlFile = async (slug) => {
  const filename = slug.endsWith(".yaml") ? slug : `${slug}.yaml`;
  return await readYamlFile(FOLDER, filename);
};

function calculateScoreFinal(stars, forks, createdAt) {
  // Adjust stars and forks effect to a smaller scale
  const a = (stars / 3 + forks) / 100;

  // Get the current date and createdAt date
  const now = new Date();
  const createdDate = new Date(createdAt);

  // Calculate the difference in months between now and createdAt
  const m = (now.getFullYear() - createdDate.getFullYear()) * 12 + (now.getMonth() - createdDate.getMonth());

  // Apply subtle time weighting using logarithmic scaling
  const weight = 1 / (1 + Math.log(1 + m));

  // Return the final score
  return a * weight;
}

export const getOpenSourceBySlug = async (slug) => {
  if (slug.endsWith(".yaml")) throw new Error(slug + "has yaml");
  const file = slug + ".yaml";
  const yaml = await readOpenSourceYamlFile(file);
  const repoData = await getRepoData(yaml.source);
  const images = await readOpenSourceFileImages(slug, yaml);

  const sourceEditUrl = `${process.env.NEXT_PUBLIC_GITHUB_REPO}/edit/main/data/open-source/${slug}.yaml/`;

  return {
    slug: slug,
    filename: file,
    sourceEditUrl,
    yaml: {
      ...yaml,
      tutorials: yaml.tutorials.filter((el) => el.link), // some links are empyt
    },
    repoData,
    images,
    scoreFinal: calculateScoreFinal(repoData.stargazers, repoData.forks, repoData.createdAt),
  };
};

export const readOpenSourceFilesAndRepoData = async () => {
  const files = await listOpenSourceFiles();

  // this loads all yamls + repodata in memory - shouldn't be a problem for a while, but may require refactor late
  const yamlAndRepos = await Promise.all(files.map(async (file) => getOpenSourceBySlug(file.replace(".yaml", ""))));

  // todo when upgrade node version, replace to `.toSorted((el) => el.repoData.forks)`
  yamlAndRepos.sort((x, y) => y.scoreFinal - x.scoreFinal);

  return yamlAndRepos.filter((el) => !el.yaml.removed);
};

export const readOpenSourceFileImages = async (slug, yaml) => {
  const images = await listFiles(yaml.images);

  return images //
    .filter((el) => !el.includes("logo")) //
    .map((el) => {
      const extension = el.substring(el.lastIndexOf("."));
      const title = elegantNameParser(el.replace(extension, ""));

      return {
        title,
        url: `/open-source-img/${slug}/${el}`,
      };
    });
};
