import { Container } from "@/components/Container";
import Image from "next/image";

export default function HowUpdatePages() {
  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">Como contribuir</h1>
          <p className="mt-2 text-lg text-gray-600">
            Todo o site é editável, basta acessar o github do projeto:{" "}
            <a href={process.env.NEXT_PUBLIC_GITHUB_REPO} target="_blank" className="text-gray-900 underline">
              link
            </a>
          </p>
          <h1 className="text-3xl font-medium tracking-tight text-gray-900 mt-10">Como editar páginas</h1>
          <p className="mt-2 text-lg text-gray-600">
            Todos os projetos <b>open-sorce</b> deste website são editáveis. Siga as etapas a seguir para contribuir com o projeto e editar paginas no GitHub.
          </p>

          <ul role="list" className="space-y-6 my-10">
            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center ">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-gray-500">
                <b>1. Crie uma bifurcação do projeto</b>
              </p>
            </li>

            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center ">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-gray-500">
                <b>2. Edite o yaml do projeto</b>
              </p>
            </li>

            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center ">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-gray-500">
                <b>3. Commit suas alterações</b>
              </p>
            </li>

            <li class="relative flex gap-x-4">
              <div class="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                <div class="w-px bg-gray-200"></div>
              </div>
              <div class="relative flex h-6 w-6 flex-none items-center justify-center ">
                <div class="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
              </div>
              <p class="flex-auto py-0.5 text-gray-500">
                <b>4. Crie um pull-request</b>
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">1. Crie uma bifurcação do projeto</h2>

              <div className="space-y-4">
                <p>
                  Para começar, você precisará criar um fork do nosso repositório. Leia mais sobre{" "}
                  <a className="text-gray-900 underline" href="https://docs.github.com/pt/get-started/exploring-projects-on-github/contributing-to-a-project" target="_blank">
                    contribuindo com um projeto
                  </a>
                  .
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Na página de um projeto open source, clique na opção 'Editar essa página {">"} Editar no Github'.</li>
                  <li>Caso necessário, faça login no GitHub</li>
                  <li>Use a opção "Fork this repository"</li>
                </ol>
                <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/como-editar-paginas/fork-project.png" alt="Forking a repository on GitHub" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">2. Edite o yaml do projeto</h2>
              <div className="space-y-4">
                <p>Agora que você tem seu próprio fork, você pode fazer alterações:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Navegue até o arquivo que deseja editar, por padrão esse arquivo deve abrir automaticamente</li>
                  <li>Clique no ícone de lápis para editar o arquivo. </li>
                  <li>Faça suas alterações no editor.</li>
                </ol>
                <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/como-editar-paginas/update-in-editor.png" alt="Editing a file on GitHub" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">3. Faça o Commit das Suas Alterações </h2>
              <div className="space-y-4">
                <p>Depois de fazer suas edições, você precisará fazer o commit das alterações:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Clique em "Commit changes" no topo.</li>
                  <li>Adicione uma breve descrição das suas alterações.</li>
                  <li>Clique em "Commit changes" na modal.</li>
                </ol>
                <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/como-editar-paginas/commit.png" alt="Committing changes on GitHub" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">4. Crie um pull-request</h2>
              <div className="space-y-4">
                <p>Por fim, envie suas alterações para revisão:</p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>
                    Vá para o repositório original
                    <a href={process.env.NEXT_PUBLIC_GITHUB_REPO} target="_blank" className="text-gray-900 underline">
                      link
                    </a>
                  </li>
                  <li>Clique em "Pull requests" e depois em "Create pull request". </li>
                  <li>Selecione o seu fork e a branch. </li>
                  <li>Clique em "Create pull request". </li>
                  <li>Adicione um título e uma descrição, depois envie.</li>
                </ol>
                <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <Image src="/como-editar-paginas/pull.png" alt="Creating a pull request on GitHub" layout="fill" objectFit="cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
