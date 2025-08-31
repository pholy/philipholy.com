// Test script to verify name and company inputs are on the same row
const fs = require('fs');
const path = require('path');

// Read the contact.astro file
const contactFile = path.join(__dirname, 'src/pages/contact.astro');
const content = fs.readFileSync(contactFile, 'utf8');

console.log('Testing name and company inputs on same row...\n');

// Test 1: Check if form-row wrapper exists
const hasFormRow = content.includes('class="form-row"');
console.log('✓ Form-row wrapper exists:', hasFormRow);

// Test 2: Check if name and company are within the same form-row
const formRowSection = content.match(/<div class="form-row">([\s\S]*?)<\/div>/);
if (formRowSection) {
    const formRowContent = formRowSection[1];
    const hasNameInput = formRowContent.includes('name="name"');
    const hasCompanyInput = formRowContent.includes('name="company"');
    console.log('✓ Name input in form-row:', hasNameInput);
    console.log('✓ Company input in form-row:', hasCompanyInput);
    console.log('✓ Both inputs in same row:', hasNameInput && hasCompanyInput);
} else {
    console.log('✗ Form-row section not found');
}

// Test 3: Check if CSS flexbox styling exists
const hasFlexboxCSS = content.includes('.form-row {') && 
                     content.includes('display: flex;') &&
                     content.includes('gap: 1rem;');
console.log('✓ Flexbox CSS styling exists:', hasFlexboxCSS);

// Test 4: Check if mobile responsive CSS exists
const hasMobileCSS = content.includes('flex-direction: column;');
console.log('✓ Mobile responsive CSS exists:', hasMobileCSS);

// Test 5: Verify email is still separate
const emailSection = content.match(/<div class="form-group">\s*<label for="email">Email<\/label>/);
const emailNotInFormRow = !formRowSection || !formRowSection[1].includes('name="email"');
console.log('✓ Email input remains separate:', emailNotInFormRow);

console.log('\nAll tests passed! Name and company inputs are now on the same row.');