// src/setup/sitemapGenerator.js
const BASE_URL = "https://swapnilahmedshishirwebdev.netlify.app";

function generateSitemap(pages) {
  // Common pages for a portfolio
  const defaultPages = ["", "/about", "/projects", "/contact", "/skills"];
  const allPages = [...defaultPages, ...(pages || [])];

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPages
          .map((page) => {
            return `
                <url>
                    <loc>${BASE_URL}${page}</loc>
                    <changefreq>monthly</changefreq>
                    <priority>0.7</priority>
                </url>
            `;
          })
          .join("")}
    </urlset>
 `;
}

export default generateSitemap;
