"use client";

import { useSearchParams } from "next/navigation";

import { ProjectCard } from "../ProjectCard";
import { slugify } from "@/utils/textUtils";
import { CategoryCard } from "../CategoryCard";
import { AlternativeToCard } from "../AlternativeToCard";

export function SearchResult({ projects, categories, alternatives }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") || "all";

  const query = searchParams.get("query") || "";
  const queryS = slugify(query);

  const shouldProjects = type === "projects" || type === "all";
  const shouldCategories = type === "categories" || type === "all";
  const shouldAlternatives = type === "alternatives" || type === "all";

  const matchingProjects =
    shouldProjects &&
    projects
      .filter((project) => {
        const nameS = slugify(project.yaml.name);
        return nameS.includes(queryS);
      })
      .slice(0, 20);

  const mathingCategs =
    shouldCategories &&
    categories
      .filter((categ) => {
        const nameS = slugify(categ.name);
        return nameS.includes(queryS);
      })
      .slice(0, 20);

  const mathingAlternatives =
    shouldAlternatives &&
    alternatives
      .filter((alternative) => {
        const nameS = slugify(alternative.name);
        return nameS.includes(queryS);
      })
      .slice(0, 20);

  return (
    <>
      {shouldProjects && (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
          {shouldProjects &&
            matchingProjects &&
            matchingProjects.length > 0 &&
            matchingProjects.map((project, index) => {
              return <ProjectCard key={index} project={project} />;
            })}
        </div>
      )}
      {shouldCategories && (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-8">
          {mathingCategs &&
            mathingCategs.length > 0 &&
            mathingCategs.map((category, index) => {
              return <CategoryCard key={index} category={category} />;
            })}
        </div>
      )}
      {shouldAlternatives && (
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-8">
          {mathingAlternatives &&
            mathingAlternatives.length > 0 &&
            mathingAlternatives.map((alternativeTo, index) => {
              return <AlternativeToCard key={index} alternativeTo={alternativeTo} />;
            })}
        </div>
      )}
    </>
  );
}
