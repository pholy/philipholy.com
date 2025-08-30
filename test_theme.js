// Script to test current theme configuration
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readGlobalCSS() {
  const cssPath = path.join(__dirname, 'src/styles/global.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('=== CURRENT THEME CONFIGURATION ===');
  
  // Extract CSS variables
  const rootMatch = cssContent.match(/:root\s*\{([^}]+)\}/);
  if (rootMatch) {
    const variables = rootMatch[1];
    console.log('CSS Variables:');
    console.log(variables);
  }
  
  // Check background color
  const bodyMatch = cssContent.match(/body\s*\{[^}]*background-color:\s*([^;]+);/);
  if (bodyMatch) {
    console.log('\nBody background color:', bodyMatch[1].trim());
  }
  
  // Check if dark theme indicators are present
  const isDarkTheme = cssContent.includes('#0f172a') || cssContent.includes('248, 250, 252');
  console.log('\nCurrent theme appears to be:', isDarkTheme ? 'DARK' : 'LIGHT');
  
  return cssContent;
}

console.log('Testing current theme configuration...\n');
readGlobalCSS();