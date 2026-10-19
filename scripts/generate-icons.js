/* eslint-disable @typescript-eslint/no-require-imports */
const sharp = require('sharp');
const fs = require('node:fs/promises');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const input = path.join(root, 'public/assets/icone-ilocap.png');

async function generateIcons() {
  // Remove transparent source margins so the mark remains legible in a tab.
  const trimmed = await sharp(input).trim({ background: '#00000000', threshold: 0 }).png().toBuffer();
  async function png(size) {
    const margin = Math.max(1, Math.round(size * 0.045));
    return sharp(trimmed).resize(size - margin * 2, size - margin * 2, {
      fit: 'contain', background: '#00000000',
    }).extend({ top: margin, bottom: margin, left: margin, right: margin, background: '#00000000' }).png().toBuffer();
  }
  for (const [name, size] of [['ilocap-icon.png', 64], ['apple-touch-icon.png', 180], ['icon-192x192.png', 192], ['icon-512x512.png', 512]]) {
    await fs.writeFile(path.join(root, 'public', name), await png(size));
  }
  await fs.copyFile(path.join(root, 'public/icon-512x512.png'), path.join(root, 'src/app/icon.png'));
  // Multi-resolution ICO fallback: browsers choose the closest native size.
  const sizes = [16, 32, 48, 64];
  const images = await Promise.all(sizes.map(png));
  const directory = Buffer.alloc(6 + sizes.length * 16);
  directory.writeUInt16LE(1, 2);
  directory.writeUInt16LE(sizes.length, 4);
  let offset = directory.length;
  images.forEach((data, i) => {
    const entry = 6 + i * 16;
    directory[entry] = sizes[i]; directory[entry + 1] = sizes[i];
    directory.writeUInt16LE(1, entry + 4);
    directory.writeUInt16LE(32, entry + 6);
    directory.writeUInt32LE(data.length, entry + 8);
    directory.writeUInt32LE(offset, entry + 12);
    offset += data.length;
  });
  await fs.writeFile(path.join(root, 'src/app/favicon.ico'), Buffer.concat([directory, ...images]));
  console.log('Generated ILOCAP tab, mobile and application icons from the supplied brand mark.');
}

generateIcons().catch(error => { console.error(error); process.exitCode = 1; });
