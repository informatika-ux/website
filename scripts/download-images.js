import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create public/images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filename}`);
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// All images used in the project with their local filenames
const imageMap = [
  // Hero component images
  { url: 'https://images.pexels.com/photos/32796633/pexels-photo-32796633.jpeg', filename: 'hero-modern-tech.jpg' },
  { url: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'hero-server-room.jpg' },
  { url: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'hero-computer-repair.jpg' },
  
  // Testimonials images
  { url: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'testimonial-eva.jpg' },
  { url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'testimonial-anna.jpg' },
  { url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'testimonial-peter.jpg' },
  
  // About page team images
  { url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'team-alexander.jpg' },
  { url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'team-csaba.jpg' },
  { url: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'team-szabolcs.jpg' },
  { url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'team-daniel.jpg' },
  { url: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', filename: 'about-team-photo.jpg' },
  
  // News page images
  { url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'news-new-office.jpg' },
  { url: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'news-spring-sale.jpg' },
  { url: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'news-new-services.jpg' },
  
  // Sales page images
  { url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'sale-gaming-pc.jpg' },
  { url: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'sale-gaming-monitor.jpg' },
  { url: 'https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'sale-business-laptop.jpg' },
  
  // Service pages images
  { url: 'https://images.pexels.com/photos/2881232/pexels-photo-2881232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-networking.jpg' },
  { url: 'https://images.pexels.com/photos/163125/board-electronics-computer-data-processing-163125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-repair.jpg' },
  { url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-graphic-design.jpg' },
  { url: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-laser-engraving.jpg' },
  { url: 'https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-escooter.jpg' },
  { url: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-ios.jpg' },
  { url: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-phone-repair.jpg' },
  { url: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-system-admin.jpg' },
  { url: 'https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'service-printer.jpg' },
  
  // Works page images
  { url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-network-1.jpg' },
  { url: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-network-2.jpg' },
  { url: 'https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-security-1.jpg' },
  { url: 'https://images.pexels.com/photos/3205739/pexels-photo-3205739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-security-2.jpg' },
  { url: 'https://images.pexels.com/photos/3205740/pexels-photo-3205740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-security-3.jpg' },
  { url: 'https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-server-1.jpg' },
  { url: 'https://images.pexels.com/photos/2881234/pexels-photo-2881234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', filename: 'work-server-2.jpg' },
  
  // Partners page images
  { url: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-microsoft.jpg' },
  { url: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-hp.jpg' },
  { url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-dell.jpg' },
  { url: 'https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-lenovo.jpg' },
  { url: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-eset.jpg' },
  { url: 'https://images.pexels.com/photos/3829849/pexels-photo-3829849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', filename: 'partner-canon.jpg' }
];

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  for (const image of imageMap) {
    try {
      await downloadImage(image.url, image.filename);
    } catch (error) {
      console.error(`Failed to download ${image.filename}:`, error.message);
    }
  }
  
  console.log('All images downloaded successfully!');
}

downloadAllImages();