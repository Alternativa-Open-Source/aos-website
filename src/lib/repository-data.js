import { slugify } from "@/utils/textUtils";
import { readFileOrNull, saveFile } from "./file-functions";

const FOLDER = "data/cache/repository-data/";

export const getRepoData = async (source) => {
  const cacheSource = slugify(source) + ".json";
  const cache = await readFileOrNull(FOLDER, cacheSource);
  if (cache) {
    return JSON.parse(cache);
  }

  const { provider, projectId } = parseProvider(source);
  const repoData =
    provider === "github"
      ? await getGitHubRepoData(projectId)
      : () => {
          throw new Error(`The provider ${provider} is not supported, source ${source}`);
        };

  await saveFile(FOLDER, cacheSource, repoData);
  return repoData;
};

export const parseProvider = (source) => {
  const [provider, projectId] = source.split(" ");
  return {
    provider,
    projectId,
  };
};

const getGitHubRepoData = async (projectId) => {
  const token = process.env.ENV_GITHUB_TOKEN;
  const url = `https://api.github.com/repos/${projectId}`;

  const params = token
    ? {
        headers: {
          Authorization: `token ${token}`,
        },
      }
    : {};

  const response = await fetch(url, params);
  if (!response.ok) {
    console.error(await response.json());
    throw new Error(`Failed to fetch data ${url}`);
  }

  const data = await response.json();

  return {
    name: data?.name,
    sourceUrl: `https://github.com/${projectId}`,
    license: data?.license?.name,
    language: data?.language,
    stargazers: data?.stargazers_count,
    size: data?.size,
    forks: data?.forks_count,
    issues: data?.open_issues_count,
    createdAt: data?.created_at,
    generatedAt: new Date().toISOString(),
  };
};
