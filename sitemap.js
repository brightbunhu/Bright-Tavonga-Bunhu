import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your static URLs
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 1.0 },
  { url: "/cv", changefreq: "monthly", priority: 0.7 },
];

// Add dynamic project links by reading the projects.js file manually
import { readFileSync } from "fs";
try {
  const projectsContent = readFileSync(path.join(__dirname, "src", "data", "projects.js"), "utf-8");
  // Regex to find id: [number]
  const idMatches = projectsContent.match(/id:\s*(\d+)/g);
  if (idMatches) {
    idMatches.forEach((match) => {
      const id = match.split(":")[1].trim();
      links.push({
        url: `/project/${id}`,
        changefreq: "monthly",
        priority: 0.6,
      });
    });
  }
} catch (err) {
  console.warn("Could not read projects.js for dynamic routes, skipping...");
}

// Path to save sitemap.xml in public folder
const sitemapPath = path.join(__dirname, "public", "sitemap.xml");

// Create sitemap stream
const sitemap = new SitemapStream({
  hostname: "https://bright-tavonga-bunhu.vercel.app/",
});
const writeStream = createWriteStream(sitemapPath);

sitemap.pipe(writeStream);

// Add links
links.forEach((link) => sitemap.write(link));
sitemap.end();

// Wait until the file is fully written
streamToPromise(sitemap)
  .then(() => {
    console.log("Sitemap created successfully at", sitemapPath);
  })
  .catch((err) => {
    console.error("Error creating sitemap:", err);
  });
