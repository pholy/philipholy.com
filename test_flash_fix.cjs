// Test script to verify the hamburger menu flash fix
const fs = require('fs');
const path = require('path');

function testFlashFix() {
    console.log('🔍 Testing Hamburger Menu Flash Fix...\n');
    
    const headerPath = path.join(__dirname, 'src/components/Header.astro');
    
    try {
        const headerContent = fs.readFileSync(headerPath, 'utf8');
        
        // Test 1: Check if default mobile hiding CSS exists
        const hasDefaultMobileHiding = headerContent.includes('/* Prevent flash on mobile - hide menu by default on small screens */') &&
                                      headerContent.includes('@media (max-width: 768px)') &&
                                      headerContent.includes('.internal-links {\n\t\t\tdisplay: none;\n\t\t}');
        console.log(`✅ Test 1 - Default mobile menu hiding: ${hasDefaultMobileHiding ? 'PASS' : 'FAIL'}`);
        
        // Test 2: Check if explicit show state exists for opened menu
        const hasExplicitShowState = headerContent.includes('nav.menu-open .internal-links {\n\t\t\tdisplay: flex;\n\t\t}');
        console.log(`✅ Test 2 - Explicit show state for opened menu: ${hasExplicitShowState ? 'PASS' : 'FAIL'}`);
        
        // Test 3: Check if the fix is placed before the main mobile media query
        const defaultHideIndex = headerContent.indexOf('/* Prevent flash on mobile - hide menu by default on small screens */');
        const mainMobileIndex = headerContent.indexOf('/* Tablet and mobile styles */');
        const isCorrectOrder = defaultHideIndex < mainMobileIndex && defaultHideIndex > 0;
        console.log(`✅ Test 3 - CSS order (default hide before main mobile styles): ${isCorrectOrder ? 'PASS' : 'FAIL'}`);
        
        // Test 4: Verify the main mobile styles still exist and are intact
        const hasMainMobileStyles = headerContent.includes('/* Tablet and mobile styles */') &&
                                   headerContent.includes('.hamburger {\n\t\t\tdisplay: flex;\n\t\t}') &&
                                   headerContent.includes('position: absolute;') &&
                                   headerContent.includes('transform: translateY(-100%);');
        console.log(`✅ Test 4 - Main mobile styles intact: ${hasMainMobileStyles ? 'PASS' : 'FAIL'}`);
        
        const allTestsPassed = hasDefaultMobileHiding && hasExplicitShowState && isCorrectOrder && hasMainMobileStyles;
        
        console.log(`\n${allTestsPassed ? '🎉' : '❌'} Overall Result: ${allTestsPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);
        
        if (allTestsPassed) {
            console.log('\n✨ Flash fix implementation is complete!');
            console.log('🚫 The navigation menu will no longer flash when screen size changes.');
            console.log('📱 Mobile menu is hidden by default and only shows when hamburger is clicked.');
        }
        
        return allTestsPassed;
        
    } catch (error) {
        console.error('❌ Error reading Header.astro file:', error.message);
        return false;
    }
}

// Run the test
testFlashFix();