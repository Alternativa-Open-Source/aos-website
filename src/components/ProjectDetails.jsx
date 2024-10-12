import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Star, GitFork, AlertCircle } from "lucide-react";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { MayfairSlider } from "@/components/custom/MayfairSlider";
import { NewLineToBreakLine, parseDateBr } from "@/utils/textUtils";
import { Empty } from "./Empty";
import { ProjectCard } from "./ProjectCard";
import { EditPageBtn } from "./EditPageBtn";
import { ProjectImage } from "./ProjectImage";
import { ProjectCategories } from "./ProjectCategories";
import { ProjectAlternatives } from "./ProjectAlternatives";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ProjectDetails({ project, relatedProjects }) {
  const showTutorials = project.yaml.tutorials && project.yaml.tutorials.length > 0;

  return (
    <div className="border-t border-gray-200 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <ProjectImage project={project} width={64} height={64} />

            <div>
              <h1 className="text-4xl font-bold">{project.yaml.name}</h1>
              <div className="flex space-x-2 mt-2">
                <ProjectCategories categories={project.yaml.categories} />
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <a href={project.repoData.sourceUrl} target="_blank">
              <Button variant="outline">
                <Github className="mr-2 h-4 w-4" />
                View Source
              </Button>
            </a>
            <a href={project.yaml.url} target="_blank">
              <Button>
                <ExternalLink className="mr-2 h-4 w-4" />
                Visit Website
              </Button>
            </a>
          </div>
        </div>

        {project.yaml.removed && (
          <Alert variant="destructive" className="mb-8">
            <ExclamationTriangleIcon className="h-6 w-6" />
            <AlertTitle className="text-xl">Aviso</AlertTitle>
            <AlertDescription>Este projeto foi marcado como removido. Isso significa que deixou de ser open-source ou foi abandonado pelos seus desenvolvedores.</AlertDescription>
          </Alert>
        )}

        <p className="text-xl text-muted-foreground mb-8">{project.yaml.headlight}</p>

        {project.yaml.description && <p className="mt-6 text-lg text-gray-600">{NewLineToBreakLine(project.yaml.description)}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {project.yaml.alterantiveTo && (
            <Card>
              <CardHeader>
                <CardTitle>{project.yaml.name} como Alternativa</CardTitle>
              </CardHeader>
              <CardContent>
                <ProjectAlternatives project={project} />
              </CardContent>
            </Card>
          )}
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>Detalhes do Projeto</span>
                <EditPageBtn project={project} variant="ghost" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-2">
                <div>
                  <dt className="font-semibold">Adicionado em</dt>
                  <dd>{parseDateBr(project.yaml.createdAt)}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Criado em</dt>
                  <dd>{parseDateBr(project.repoData.createdAt)}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Source</dt>
                  <dd>{project.yaml.source}</dd>
                </div>
                <div>
                  <dt className="font-semibold">Licença</dt>
                  <dd>{project.repoData.license}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <Star className="h-8 w-8 mb-2 text-yellow-500" />
              <p className="text-2xl font-bold">{project.repoData.stargazers}</p>
              <p className="text-sm text-muted-foreground">Stars</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <div className="h-8 w-8 mb-2 flex items-center justify-center text-2xl font-bold text-green-500">{project?.repoData?.language?.length ? project.repoData.language[0] : null} </div>
              <p className="text-2xl font-bold">{project.repoData.language}</p>
              <p className="text-sm text-muted-foreground">Linguagem</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <GitFork className="h-8 w-8 mb-2 text-blue-500" />
              <p className="text-2xl font-bold">{project.repoData.forks}</p>
              <p className="text-sm text-muted-foreground">Forks</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <AlertCircle className="h-8 w-8 mb-2 text-red-500" />
              <p className="text-2xl font-bold">{project.repoData.issues}</p>
              <p className="text-sm text-muted-foreground">Open Issues</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tutorials</CardTitle>
          </CardHeader>
          <CardContent>
            {showTutorials && (
              <ul className="space-y-2">
                {project.yaml.tutorials.map((tutorial, index) => (
                  <li key={index}>
                    <a href={tutorial.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-500 hover:underline">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {tutorial.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
            {!showTutorials && <Empty title="Sem tutoriais" info="Contribua adicionando um tutorial" callToAction={<EditPageBtn project={project} variant="" />} />}
          </CardContent>
        </Card>

        {project.images && project.images.length > 0 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Screenshoot/Capturas de tela de {project.slug}</CardTitle>
            </CardHeader>
            <CardContent>
              <MayfairSlider items={project.images}></MayfairSlider>
            </CardContent>
          </Card>
        )}

        {relatedProjects && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Projetos relacionados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedProjects.map((relatedProject, index) => (
                  <ProjectCard key={index} project={relatedProject} />
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
