// netlify/functions/sitemap/sitemap.js

import generateSitemap from "@/setup/sitemapGenerator";

export const handler = async (event, context) => {
  const sitemap = generateSitemap();

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/xml",
    },
    body: sitemap,
  };
};
