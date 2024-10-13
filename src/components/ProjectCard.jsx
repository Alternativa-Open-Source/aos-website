import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getOpenSourceUrlBySlug } from "@/lib/client-urls";
import { Star, GitFork } from "lucide-react";
import { ProjectImage } from "./ProjectImage";
import { ProjectCategories } from "./ProjectCategories";
import { ProjectAlternatives } from "./ProjectAlternatives";

export function ProjectCard({ project, showDetails = true }) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="sm:flex sm:items-center md:flex-row gap-4 md:items-center">
        <ProjectImage project={project} width={32} height={32} />
        <div>
          <CardTitle className="text-2xl">
            <Link href={getOpenSourceUrlBySlug(project.slug)}>{project.yaml.name}</Link>
          </CardTitle>
          <ProjectCategories categories={project.yaml.categories} />
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-between">
        <p className="text-muted-foreground mb-4">
          <ProjectAlternatives project={project} />
        </p>
        {showDetails && (
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="font-semibold">Stars</p>
              <p className="flex items-center">
                <Star className="w-4 h-4 mr-1 text-yellow-500" />
                {project.repoData.stargazers}
              </p>
            </div>
            <div>
              <p className="font-semibold">Licença</p>
              <p>{project.repoData.license}</p>
            </div>
            <div>
              <p className="font-semibold">Linguagem</p>
              <p>{project.repoData.language}</p>
            </div>
            <div>
              <p className="font-semibold">Forks</p>
              <p className="flex items-center">
                <GitFork className="w-4 h-4 mr-1" />
                {project.repoData.forks}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
