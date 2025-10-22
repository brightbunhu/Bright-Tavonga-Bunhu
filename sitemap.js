import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define your URLs
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/projects", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.5 },
];

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
