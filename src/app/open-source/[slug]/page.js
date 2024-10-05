import { readOpenSourceFileAndRepoData } from "@/lib/data/open-source";
import { listOpenSourceFiles, readOpenSourceYamlFile } from "@/lib/data/open-source";
import { getRepoData } from "@/lib/repository-data";
import Image from "next/image";

export async function generateStaticParams() {
  const files = await listOpenSourceFiles();
  const slugs = files.map((file) => ({
    slug: file.replace(".yaml", ""),
  }));

  console.log(slugs);
  return slugs;
}

export default async function AlternativeTo({ params }) {
  const slug = params.slug;
  const project = await readOpenSourceFileAndRepoData(slug);
console.log(project)
  return (
    <>
      <h1>{project.yaml.name}</h1>
      <div>My Post: {slug}</div>
      <div>headlight: {project.yaml.headlight}</div>
      <div>
        <Image width={100} height={100} src={project.yaml.logo} />
      </div>

      <div>{project.yaml.headlight}</div>
      <div>{project.yaml.source}</div>
      <div>{project.yaml.url}</div>
      <div>{project.yaml.description}</div>
      <div>
        Categories:
        <ul>{project.yaml.categories && project.yaml.categories.map((el) => <li key={el}>{el}</li>)}</ul>
      </div>

      <hr />

      <div>{project.repoData.license}</div>
      <div>{project.repoData.sourceUrl}</div>
      <div>{project.repoData.language}</div>
      <div>{project.repoData.stargazers}</div>
      <div>{project.repoData.size}</div>
      <div>{project.repoData.forks}</div>
      <div>{project.repoData.issues}</div>
      <div>{project.repoData.generatedAt}</div>

      <div>
        Tutorials:
        <ul>{project.yaml.tutorials && project.yaml.tutorials.map((el) => <li key={el.title}><a href={el.link}>{el.title}</a></li>)}</ul>
      </div>
    </>
  );
}
