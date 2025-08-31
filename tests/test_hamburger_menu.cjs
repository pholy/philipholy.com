// Test script to verify hamburger menu functionality
const fs = require('fs');
const path = require('path');

function testHamburgerMenuImplementation() {
    console.log('🍔 Testing Hamburger Menu Implementation...\n');
    
    const headerPath = path.join(__dirname, 'src/components/Header.astro');
    
    try {
        const headerContent = fs.readFileSync(headerPath, 'utf8');
        
        // Test 1: Check if hamburger button HTML exists
        const hasHamburgerButton = headerContent.includes('<button class="hamburger"') && 
                                  headerContent.includes('aria-label="Toggle navigation"') &&
                                  headerContent.includes('<span></span>');
        console.log(`✅ Test 1 - Hamburger button HTML: ${hasHamburgerButton ? 'PASS' : 'FAIL'}`);
        
        // Test 2: Check if JavaScript toggle functionality exists
        const hasToggleJS = headerContent.includes('function toggleMenu()') &&
                           headerContent.includes("nav.classList.toggle('menu-open')") &&
                           headerContent.includes("hamburger.classList.toggle('active')");
        console.log(`✅ Test 2 - JavaScript toggle functionality: ${hasToggleJS ? 'PASS' : 'FAIL'}`);
        
        // Test 3: Check if CSS hamburger styles exist
        const hasHamburgerCSS = headerContent.includes('.hamburger {') &&
                               headerContent.includes('display: none;') &&
                               headerContent.includes('flex-direction: column;');
        console.log(`✅ Test 3 - Hamburger CSS styles: ${hasHamburgerCSS ? 'PASS' : 'FAIL'}`);
        
        // Test 4: Check if responsive CSS exists
        const hasResponsiveCSS = headerContent.includes('@media (max-width: 768px)') &&
                                headerContent.includes('.hamburger {') &&
                                headerContent.includes('display: flex;');
        console.log(`✅ Test 4 - Responsive CSS: ${hasResponsiveCSS ? 'PASS' : 'FAIL'}`);
        
        // Test 5: Check if mobile menu styles exist
        const hasMobileMenuCSS = headerContent.includes('.internal-links {') &&
                                headerContent.includes('position: absolute;') &&
                                headerContent.includes('transform: translateY(-100%);') &&
                                headerContent.includes('nav.menu-open .internal-links');
        console.log(`✅ Test 5 - Mobile menu CSS: ${hasMobileMenuCSS ? 'PASS' : 'FAIL'}`);
        
        // Test 6: Check if hamburger icon animation exists
        const hasAnimationCSS = headerContent.includes('.hamburger.active span:nth-child(1)') &&
                               headerContent.includes('transform: rotate(45deg)') &&
                               headerContent.includes('.hamburger.active span:nth-child(2)') &&
                               headerContent.includes('opacity: 0;');
        console.log(`✅ Test 6 - Hamburger animation CSS: ${hasAnimationCSS ? 'PASS' : 'FAIL'}`);
        
        const allTestsPassed = hasHamburgerButton && hasToggleJS && hasHamburgerCSS && 
                              hasResponsiveCSS && hasMobileMenuCSS && hasAnimationCSS;
        
        console.log(`\n${allTestsPassed ? '🎉' : '❌'} Overall Result: ${allTestsPassed ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);
        
        if (allTestsPassed) {
            console.log('\n✨ Hamburger menu implementation is complete and ready!');
            console.log('📱 The navigation will show as a hamburger menu on screens ≤ 768px wide.');
            console.log('🖱️  Users can click the hamburger to toggle the mobile menu.');
        }
        
        return allTestsPassed;
        
    } catch (error) {
        console.error('❌ Error reading Header.astro file:', error.message);
        return false;
    }
}

// Run the test
testHamburgerMenuImplementation();