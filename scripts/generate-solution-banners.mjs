import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// Code-native SVG frames preserve the original screenshot pixels and colours.
// Normalized crop windows select a useful section of long product pages.
const sources = [
  { slug: "patrimonia", file: "solutions/patrimonia-fiche.png", crop: [0.025, 0.206, 0.95, 0.194] },
  { slug: "siirh", file: "solutions/siirh-fiche.png", crop: [0.018, 0.337, 0.964, 0.192] },
  { slug: "lamina", file: "solutions/lamina-apercu.png" },
  { slug: "arozo", file: "solutions/arozo-apercu.png" },
  { slug: "trackfuel-360", file: "realisations/trackfuel-dashboard.png" },
  { slug: "primimport-store", file: "realisations/primi-marketplace.png" },
];
const destination = path.resolve("public/solutions/banners");
fs.mkdirSync(destination, { recursive: true });
for (const source of sources) {
  const bytes = fs.readFileSync(path.resolve("public", source.file));
  const { width, height } = await sharp(bytes).metadata();
  const crop = source.crop || [0, 0, 1, 1];
  const viewport = [crop[0] * width, crop[1] * height, crop[2] * width, crop[3] * height].join(" ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 1600 800"><title>${source.slug} — aperçu produit</title><rect width="1600" height="800" fill="#F5F2EA"/><rect x="24" y="24" width="1552" height="752" rx="14" fill="#fff" stroke="#173C31" stroke-opacity=".12"/><svg x="40" y="40" width="1520" height="720" viewBox="${viewport}" preserveAspectRatio="xMidYMid meet" overflow="hidden"><image width="${width}" height="${height}" href="data:image/png;base64,${bytes.toString("base64")}"/></svg></svg>`;
  fs.writeFileSync(path.join(destination, `${source.slug}.svg`), svg);
  console.log(`${source.slug}: 1600 × 800, source ${width} × ${height}`);
}
