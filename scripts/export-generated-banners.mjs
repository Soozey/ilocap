import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const directory = path.dirname(fileURLToPath(import.meta.url));
const files = {
  'patrimonia': 'exec-c0e30478-8688-4875-8228-f90b2a88de8e.png',
  'siirh': 'exec-981215fa-8351-4f15-9ae0-dd5e3c4e13e3.png',
  'lamina': 'exec-f8f9fa16-ea27-4a65-8f9a-cc1978850095.png',
  'arozo': 'exec-f792219f-6d9d-48ad-984f-80be17d63b12.png',
  'trackfuel-360': 'exec-c027861b-116d-46a5-805d-d797f39ca83b.png',
  'primimport-store': 'exec-c99a3b2c-5736-4480-94b8-34343c0882a8.png',
};
async function main() {
  const inputDirectory = process.argv[2];
  if (!inputDirectory) throw new Error('Provide the generated-image directory.');
  for (const [name, file] of Object.entries(files)) {
    const target = path.join(directory, '../public/solutions/banners', `${name}-v2.webp`);
    await sharp(path.join(inputDirectory, file)).resize(1600, 800, {fit: 'contain'}).webp({quality: 95, effort: 6}).toFile(target);
    const metadata = await sharp(target).metadata();
    console.log(name, metadata.width, metadata.height);
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
