import { getAlternativeToUrlBySlug, getCategoryUrlBySlug, getOpenSourceUrlBySlug } from "@/lib/client-urls";

import { generateStaticParams as alternativesStaticParams } from "../alternativa-para/[slug]/page";
import { generateStaticParams as categoriesStaticParams } from "../categorias/[slug]/page";
import { generateStaticParams as osProjectsStaticParams } from "../open-source/[slug]/page";

async function getSitemap() {
  const alternatives = (await alternativesStaticParams()).map(
    (item) => `
            <url>
              <loc>${process.env.NEXT_PUBLIC_URL + getAlternativeToUrlBySlug(item.slug)}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>1</priority>
            </url>
          `
  );

  const categories = (await categoriesStaticParams()).map(
    (item) => `
            <url>
              <loc>${process.env.NEXT_PUBLIC_URL + getCategoryUrlBySlug(item.slug)}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.75</priority>
            </url>
          `
  );

  const osProjects = (await osProjectsStaticParams()).map(
    (item) => `
            <url>
              <loc>${process.env.NEXT_PUBLIC_URL + getOpenSourceUrlBySlug(item.slug)}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <priority>0.6</priority>
            </url>
          `
  );

  const map = [
    {
      url: process.env.NEXT_PUBLIC_URL,
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/privacy-policy",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/search",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/categorias",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/como-editar-paginas",
      priority: 1,
    },
    {
      url: process.env.NEXT_PUBLIC_URL + "/faqs",
      priority: 1,
    },
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${map
      .map(
        (item) => `
            <url>
              <loc>${item.url}</loc>
              <priority>${item.priority}</priority>
            </url>
          `
      )
      .join("")}

      ${alternatives.join("")}
      ${categories.join("")}
      ${osProjects.join("")}
    </urlset>
  `;
}

export async function GET() {
  const sitemapXml = await getSitemap();
  return new Response(sitemapXml, {
    headers: {
      "Content-Type": "text/xml",
    },
  });
}
