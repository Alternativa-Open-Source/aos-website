import { Suspense } from "react";

import { readOpenSourceFilesAndRepoData } from "@/lib/data/open-source";

import { Container } from "@/components/Container";

import { SearchForm } from "@/components/search/SearchForm";
import { SearchResult } from "@/components/search/SearchResult";
import { listCategories } from "@/lib/data/categories";
import { readAlternativeToFilesAndRepoData } from "@/lib/data/alternative-to";

export default async function SearchPage() {
  const projects = await readOpenSourceFilesAndRepoData();
  const categories = await listCategories()
  const alternatives = await readAlternativeToFilesAndRepoData()

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto lg:mx-0 mb-10">
          <Suspense fallback={<div>loading...</div>}>
            <SearchForm />
          </Suspense>
        </div>
        <Suspense fallback={<div>loading...</div>}>
          <SearchResult projects={projects} categories={categories} alternatives={alternatives} />
        </Suspense>
      </Container>
    </section>
  );
}
