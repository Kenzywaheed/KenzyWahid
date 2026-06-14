const Jimp = require('jimp');

Jimp.read('public/KW.png')
  .then(image => {
    return image.autocrop().write('public/KW.png');
  })
  .then(() => {
    console.log('Successfully autocropped KW.png');
  })
  .catch(err => {
    console.error('Error cropping image:', err);
  });
