const sharp = require('sharp');
const fs = require('fs');

async function makeCircle() {
  try {
    const metadata = await sharp('public/icon.png').metadata();
    const size = Math.min(metadata.width, metadata.height);
    const r = size / 2;

    const circleSvg = `<svg width="${size}" height="${size}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`;

    await sharp('public/icon.png')
      .resize(size, size)
      .composite([{
        input: Buffer.from(circleSvg),
        blend: 'dest-in'
      }])
      .toFile('public/icon_circle.png');
    
    fs.copyFileSync('public/icon_circle.png', 'public/icon.png');
    console.log('Successfully made icon.png a circle');
  } catch (error) {
    console.error('Error making circle:', error);
  }
}

makeCircle();
