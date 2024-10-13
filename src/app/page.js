import { Suspense } from "react";

import { AlternativeToCard } from "@/components/AlternativeToCard";
import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { SearchForm } from "@/components/search/SearchForm";
import { getAlternativeToBySlug } from "@/lib/data/alternative-to";
import { getOpenSourceBySlug } from "@/lib/data/open-source";
import { ArrowRight } from "lucide-react";


export const metadata = {
  description: "Encontre a ferramenta de código aberto perfeita para suas necessidades. Lembre-se, para cada SaaS pago, há uma alternativa gratuita, de código aberto e self-hosted. Alternativas para RD-Station, Conta Azul, Calendly, Shopify, entre outros.",
};

export default async function Home() {
  const homeItems = [
    { saas: "rdstation", openSource: "mautic" },
    { saas: "conta-azul", openSource: "akaunting" },
    { saas: "calendly", openSource: "cal-com" },
    { saas: "shopify", openSource: "woocommerce" },
    { saas: "hootsuite", openSource: "mastodon" },
    { saas: "notion", openSource: "appflowy" },
    { saas: "slack", openSource: "rocket-chat" },
    { saas: "salesforce", openSource: "odoo" },
    { saas: "mailchimp", openSource: "listmonk" },
    { saas: "trello", openSource: "wekan" },
    { saas: "intercom", openSource: "chatwoot" },
    { saas: "docusign", openSource: "docuseal" },
    { saas: "zendesk", openSource: "uvdesk" },
    { saas: "zapier", openSource: "n8n" },
    { saas: "dropbox", openSource: "nextcloud" },
    { saas: "firebase", openSource: "supabase" },
    { saas: "jira", openSource: "plane" },
    { saas: "google-analytics", openSource: "matomo" },
    { saas: "microsoft-office", openSource: "libreoffice" },
    { saas: "airtable", openSource: "nocodb" },
    { saas: "figma", openSource: "penpot" },
    { saas: "vercel", openSource: "coolify" },
    { saas: "heroku", openSource: "dokku" },
    { saas: "datadog", openSource: "signoz" },
    { saas: "zoom", openSource: "jitsi" },
    { saas: "asana", openSource: "openproject" },
    { saas: "confluence", openSource: "docusaurus" },
  ];

  const comparisons = await Promise.all(
    homeItems.map(async (comparison) => {
      return {
        saas: await getAlternativeToBySlug(comparison.saas),
        openSource: await getOpenSourceBySlug(comparison.openSource),
      };
    })
  );

  return (
    <section className="border-t border-gray-200 py-10 sm:py-14">
      <Container>
        <Suspense fallback={<div>loading...</div>}>
          <SearchForm />
        </Suspense>

        <div className="container mx-auto py-12 px-4">
          <h2 className="text-3xl font-bold text-center">SaaS vs Open Source Alternatives</h2>
          <p className="my-10 text-lg text-center text-gray-600">Lembre-se, para cada SaaS pago, há uma alternativa gratuita, de código aberto e self-hosted:</p>
          <div className="space-y-6">
            {comparisons.map((comparison, index) => (
              <div key={index} className="flex items-stretch">
                <div className="w-1/2 pr-4">
                  <AlternativeToCard alternativeTo={comparison.saas} />
                </div>
                <div className="flex-shrink-0 mt-4 mx-4">
                  <ArrowRight className="text-gray-400 mt-14 w-10 h-10" />
                </div>
                <div className="w-1/2">
                  <ProjectCard key={index} project={comparison.openSource} showDetails={false} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
