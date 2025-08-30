// Script to verify navbar light theme implementation
const fs = require('fs');
const path = require('path');

function verifyNavbarLightTheme() {
  const headerPath = path.join(__dirname, 'src/components/Header.astro');
  const headerContent = fs.readFileSync(headerPath, 'utf8');
  
  console.log('=== VERIFYING NAVBAR LIGHT THEME IMPLEMENTATION ===\n');
  
  // Check key navbar light theme indicators
  const checks = [
    {
      name: 'White header background',
      test: headerContent.includes('background: #ffffff'),
      expected: true
    },
    {
      name: 'Light box-shadow (10% opacity)',  
      test: headerContent.includes('box-shadow: 0 2px 8px rgba(0, 0, 0, 10%)'),
      expected: true
    },
    {
      name: 'No dark theme background remnants',
      test: !headerContent.includes('background: #0f172a'),
      expected: true
    },
    {
      name: 'Proper border transparency for light theme',
      test: headerContent.includes('border-bottom: 1px solid rgba(var(--gray-light), 50%)'),
      expected: true
    },
    {
      name: 'Uses CSS variables for text colors',
      test: headerContent.includes('color: rgb(var(--black))') && headerContent.includes('color: rgb(var(--gray-dark))'),
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
  console.log(allPassed ? '✅ Navbar light theme successfully implemented!' : '❌ Some checks failed');
  
  return allPassed;
}

verifyNavbarLightTheme();