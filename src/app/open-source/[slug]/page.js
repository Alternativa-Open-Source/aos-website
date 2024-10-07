import { ProjectDetails } from "@/components/ProjectDetails";
import { getOpenSourceBySlug } from "@/lib/data/open-source";
import { listOpenSourceFiles } from "@/lib/data/open-source";

export async function generateStaticParams() {
  const files = await listOpenSourceFiles();
  const slugs = files.map((file) => ({
    slug: file.replace(".yaml", ""),
  }));

  return slugs;
}

export default async function AlternativeTo({ params }) {
  const slug = params.slug;
  const project = await getOpenSourceBySlug(slug);
  const relatedProjects = (
    await Promise.all(
      project.yaml.relatedProjects.map(async (el) => {
        try {
          return await getOpenSourceBySlug(el);
        } catch (error) {
          console.warn(`page /open-source/${slug} Failed to parse related project ${el}`);
          return null;
        }
      })
    )
  ).filter((el) => el);

  return <ProjectDetails project={project} relatedProjects={relatedProjects} />;
}
