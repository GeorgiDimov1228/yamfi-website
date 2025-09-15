const fs = require('fs');
const path = require('path');
const https = require('https');

// Product images with placeholder URLs
const products = [
  { name: 'chicken-fillet.jpg', color: '4A90E2', text: 'Chicken%20Fillet' },
  { name: 'chicken-wings.jpg', color: 'E94B3C', text: 'Chicken%20Wings' },
  { name: 'chicken-drumsticks.jpg', color: 'F39C12', text: 'Drumsticks' },
  { name: 'whole-chicken.jpg', color: '27AE60', text: 'Whole%20Chicken' },
  { name: 'chicken-thighs.jpg', color: '8E44AD', text: 'Chicken%20Thighs' },
  { name: 'turkey-breast.jpg', color: '16A085', text: 'Turkey%20Breast' },
];

const publicDir = path.join(__dirname, '..', 'public', 'products');

// Ensure the products directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function generatePlaceholders() {
  console.log('Generating placeholder images...');

  for (const product of products) {
    const url = `https://via.placeholder.com/600x400/${product.color}/FFFFFF?text=${product.text}`;
    const filepath = path.join(publicDir, product.name);

    try {
      await downloadImage(url, filepath);
      console.log(`✓ Generated ${product.name}`);
    } catch (error) {
      console.error(`✗ Failed to generate ${product.name}:`, error);
    }
  }

  console.log('Placeholder generation complete!');
}

generatePlaceholders().catch(console.error);