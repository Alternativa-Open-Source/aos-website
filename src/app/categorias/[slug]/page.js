import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { listCategories, readCategory } from "@/lib/data/categories";
import { getOpenSourceBySlug } from "@/lib/data/open-source";

export async function generateStaticParams() {
  const categories = await listCategories();
  const slugs = categories
    .filter((el) => el.name && el.slug) // remove empty values
    .map((categ) => ({ slug: categ.slug })) // map to slug only
    .filter((item, index, self) => index === self.findIndex((t) => t.slug === item.slug)); // remove duplicates
  return slugs;
}

export default async function CategoryPage({ params }) {
  const slug = params.slug;
  const category = await readCategory(slug);
  const projectsOfCategory = category.projects && (await Promise.all(category.projects.map(async (project) => await getOpenSourceBySlug(project))));

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Alternativa open-source para {category.name}</h1>
          <p className="mt-2 text-lg text-gray-600">
            Nesta página você encontra alternativas <b>open-sorce</b> para <b>{category.name}</b>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
          {projectsOfCategory &&
            projectsOfCategory.length > 0 &&
            projectsOfCategory.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </div>
      </Container>
    </section>
  );
}
