// Script to verify light theme implementation
const fs = require('fs');
const path = require('path');

function verifyLightTheme() {
  const cssPath = path.join(__dirname, 'src/styles/global.css');
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  
  console.log('=== VERIFYING LIGHT THEME IMPLEMENTATION ===\n');
  
  // Check key light theme indicators
  const checks = [
    {
      name: 'Dark text color (--black)',
      test: cssContent.includes('--black: 15, 23, 42'),
      expected: true
    },
    {
      name: 'Light background (--gray-light)',  
      test: cssContent.includes('--gray-light: 241, 245, 249'),
      expected: true
    },
    {
      name: 'White body background',
      test: cssContent.includes('background-color: #ffffff'),
      expected: true
    },
    {
      name: 'Light gradient background',
      test: cssContent.includes('--gray-gradient: rgba(248, 250, 252, 60%), #ffffff'),
      expected: true
    },
    {
      name: 'Reduced shadow opacity',
      test: cssContent.includes('rgba(0, 0, 0, 10%)'),
      expected: true
    },
    {
      name: 'No dark theme remnants',
      test: !cssContent.includes('#0f172a') || cssContent.match(/#0f172a/g).length <= 0,
      expected: true
    }
  ];
  
  let allPassed = true;
  checks.forEach(check => {
    const status = check.test === check.expected ? '✅ PASS' : '❌ FAIL';
    console.log(`${status}: ${check.name}`);
    if (check.test !== check.expected) allPassed = false;
  });
  
  console.log('\n=== RESULT ===');
  console.log(allPassed ? '✅ Light theme successfully implemented!' : '❌ Some checks failed');
  
  return allPassed;
}

verifyLightTheme();