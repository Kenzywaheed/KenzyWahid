const sharp = require('sharp');
const fs = require('fs');

async function zoomImage() {
  try {
    const metadata = await sharp('public/icon.png').metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    // Zoom in by 20% (crop 10% off each side)
    const extractWidth = Math.floor(w * 0.80);
    const extractHeight = Math.floor(h * 0.80);
    const left = Math.floor(w * 0.10);
    const top = Math.floor(h * 0.10);

    await sharp('public/icon.png')
      .extract({ left, top, width: extractWidth, height: extractHeight })
      .toFile('public/icon_zoomed.png');
    
    fs.copyFileSync('public/icon_zoomed.png', 'public/icon.png');
    console.log('Successfully zoomed icon.png by 20%');
  } catch (error) {
    console.error('Error zooming image:', error);
  }
}

zoomImage();
