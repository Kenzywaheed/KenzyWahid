const sharp = require('sharp');
const fs = require('fs');

async function zoomOut() {
  try {
    const metadata = await sharp('public/icon.png').metadata();
    const w = metadata.width;
    const h = metadata.height;
    
    // Zoom out by 5% (add 2.5% transparent padding on each side)
    const padX = Math.floor(w * 0.025);
    const padY = Math.floor(h * 0.025);

    await sharp('public/icon.png')
      .extend({
        top: padY,
        bottom: padY,
        left: padX,
        right: padX,
        background: { r: 0, g: 0, b: 0, alpha: 0 } // Transparent
      })
      .toFile('public/icon_zoomed_out.png');
    
    fs.copyFileSync('public/icon_zoomed_out.png', 'public/icon.png');
    console.log('Successfully zoomed out icon.png by 5%');
  } catch (error) {
    console.error('Error zooming out image:', error);
  }
}

zoomOut();
