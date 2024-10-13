import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { getAlternativeToBySlug, listAlternativeToFiles } from "@/lib/data/alternative-to";
import { readOpenSourceFilesAndRepoData } from "@/lib/data/open-source";

export async function generateStaticParams() {
  const alternatives = await listAlternativeToFiles();
  const slugs = alternatives.map((alternative) => ({
    slug: alternative.replace(".yaml", ""),
  }));

  return slugs;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const slug = params.slug;
  const alternativeTo = await getAlternativeToBySlug(slug);

  return {
    title: `Alternativa Open Source para ${alternativeTo.name}`,
    description: `Nesta página você encontra alternativas open-sorce para ${alternativeTo.name}. ${alternativeTo.headlight}`,
  };
}

export default async function AlternativeToPage({ params }) {
  const slug = params.slug;
  const alternativeTo = await getAlternativeToBySlug(slug);

  const projects = (await readOpenSourceFilesAndRepoData()).filter((project) => project.yaml.alterantiveTo.includes(slug));

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto lg:mx-0 mb-10">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Alternativa open-source para {alternativeTo.name}</h1>
          <p className="mt-2 text-lg text-gray-600">
            Nesta página você encontra alternativas <b>open-sorce</b> para <b>{alternativeTo.name}</b>. {alternativeTo.headlight}
            Dê uma olhada nas alternativas de código aberto ao {alternativeTo.name} abaixo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </div>
      </Container>
    </section>
  );
}
