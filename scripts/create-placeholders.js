const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public', 'products');

// Ensure the products directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create simple SVG placeholders
const products = [
  { name: 'chicken-fillet.jpg', color: '#4A90E2', text: 'Chicken Fillet' },
  { name: 'chicken-wings.jpg', color: '#E94B3C', text: 'Chicken Wings' },
  { name: 'chicken-drumsticks.jpg', color: '#F39C12', text: 'Drumsticks' },
  { name: 'whole-chicken.jpg', color: '#27AE60', text: 'Whole Chicken' },
  { name: 'chicken-thighs.jpg', color: '#8E44AD', text: 'Chicken Thighs' },
  { name: 'turkey-breast.jpg', color: '#16A085', text: 'Turkey Breast' },
];

function createSVGPlaceholder(color, text) {
  return `<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
    <rect width="600" height="400" fill="${color}"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
          font-family="Arial, sans-serif" font-size="32" fill="white">
      ${text}
    </text>
  </svg>`;
}

console.log('Creating placeholder images...');

products.forEach(product => {
  const svgContent = createSVGPlaceholder(product.color, product.text);
  const svgPath = path.join(publicDir, product.name.replace('.jpg', '.svg'));

  fs.writeFileSync(svgPath, svgContent);
  console.log(`✓ Created ${product.name.replace('.jpg', '.svg')}`);
});

console.log('Placeholder creation complete!');