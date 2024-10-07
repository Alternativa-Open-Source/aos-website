import { readOpenSourceFilesAndRepoData } from "@/lib/data/open-source";

import { Container } from "@/components/Container";

import { SearchForm } from "@/components/search/SearchForm";
import { SearchResult } from "@/components/search/SearchResult";
import { Suspense } from "react";

export default async function SearchPage() {
  const projects = await readOpenSourceFilesAndRepoData();

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto lg:mx-0">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Buscar Projetos Open-Source</h1>

          <Suspense fallback={<div>loading...</div>}>
            <SearchForm />
          </Suspense>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <SearchResult projects={projects} />
        </Suspense>
      </Container>
    </section>
  );
}
