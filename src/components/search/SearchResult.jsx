"use client";

import { useSearchParams } from "next/navigation";

import { ProjectCardByProject } from "../ProjectCardByProject";
import { slugify } from "@/utils/textUtils";

export function SearchResult({ projects }) {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const type = searchParams.get("type") || "all";

  const matchingProjects = projects
    .filter((project) => {
      const nameS = slugify(project.yaml.name);
      const queryS = slugify(query);
      return nameS.includes(queryS);
    })
    .slice(0, 30);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
      {matchingProjects &&
        matchingProjects.length > 0 &&
        matchingProjects.map((project, index) => {
          return <ProjectCardByProject key={index} project={project} />;
        })}
    </div>
  );
}
