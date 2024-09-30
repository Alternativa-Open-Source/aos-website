import { listFiles, readYamlFile } from "../file-functions";
import { getRepoData } from "../repository-data";

const FOLDER = "data/open-source/";

export const listOpenSourceFiles = async () => await listFiles(FOLDER);

export const readOpenSourceYamlFile = async (slug) => {
  const filename = slug.endsWith(".yaml") ? slug : `${slug}.yaml`;
  return await readYamlFile(FOLDER, filename);
};

export const readOpenSourceFileAndRepoData = async (file) => {
  const yaml = await readOpenSourceYamlFile(file);
  const repoData = await getRepoData(yaml.source);

  return {
    slug: file.replace(".yaml", ""),
    filename: file,
    yaml,
    repoData,
  };
};

export const readOpenSourceFilesAndRepoData = async () => {
  const files = await listOpenSourceFiles();

  // this loads all yamls + repodata in memory - shouldn't be a problem for a while, but may require refactor late
  const yamlAndRepos = await Promise.all(files.map(async (file) => readOpenSourceFileAndRepoData(file)));

  // todo when upgrade node version, replace to `.toSorted((el) => el.repoData.forks)`
  yamlAndRepos.sort((x, y) => x.repoData.forks - y.repoData.forks);

  return yamlAndRepos;
};
