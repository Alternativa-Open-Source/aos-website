import { Container } from "@/components/Container";
import Image from "next/image";

export default function FaqsPage() {
  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
          <h1 className="text-3xl font-medium tracking-tight text-gray-900">FAQs</h1>
        </div>

        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">1. Como solicitar a inclusão de um projeto open source, ou, uma Alternativa SAAS?</h2>

              <div className="space-y-4">
                <p>
                  Basta criar uma issue no github to projeto solicitando a inclusão do projeto.
                  <a href={process.env.NEXT_PUBLIC_GITHUB_REPO} target="_blank" className="text-gray-900 underline">
                    link
                  </a>
                </p>
                <p>
                  Alternativamente você pode adicionar o yaml <code className="font-mono text-sm bg-white px-2 py-1 rounded border border-gray-300 text-gray-800">/data/open-source</code> e criar um pull request.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">2. Como é definido a ordem dos projetos na lista?</h2>
              <div className="space-y-4">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Mais stars e forks aumentam a pontuação.</li>
                  <li>Projetos mais antigos têm uma pontuação reduzida devido à ponderação temporal, mas não de forma tão drástica.</li>
                  <li>A fórmula garante que tanto a popularidade quanto a atualidade sejam consideradas no cálculo da pontuação final.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
