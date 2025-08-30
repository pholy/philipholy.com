// Test script to analyze button contrast issue
const fs = require('fs');

console.log('=== BUTTON CONTRAST ANALYSIS ===\n');

// Read files
const contactFile = fs.readFileSync('./src/pages/contact.astro', 'utf8');
const globalCSS = fs.readFileSync('./src/styles/global.css', 'utf8');

// Extract color variables
const accentMatch = globalCSS.match(/--accent:\s*([^;]+);/);
const grayLightMatch = globalCSS.match(/--gray-light:\s*([^;]+);/);

const accentColor = accentMatch ? accentMatch[1].trim() : 'not found';
const grayLightColor = grayLightMatch ? grayLightMatch[1].trim() : 'not found';

console.log('Form background (.contact-form):', grayLightColor, '-> rgb(241, 245, 249)');
console.log('Button background (.submit-btn):', accentColor, '-> #2563eb (blue)');
console.log('Button text color: white');

// Check if button uses rgb() format vs hex format
const buttonStyleMatch = contactFile.match(/\.submit-btn\s*{[^}]+}/s);
if (buttonStyleMatch) {
    const buttonStyle = buttonStyleMatch[0];
    console.log('\nButton background property:', buttonStyle.includes('rgb(var(--accent))') ? 'rgb(var(--accent))' : 'other');
}

// Check if form uses rgb() format  
const formStyleMatch = contactFile.match(/\.contact-form\s*{[^}]+}/s);
if (formStyleMatch) {
    const formStyle = formStyleMatch[0];
    console.log('Form background property:', formStyle.includes('rgb(var(--gray-light))') ? 'rgb(var(--gray-light))' : 'other');
}

console.log('\n=== POTENTIAL ISSUE ===');
console.log('The problem might be:');
console.log('1. CSS variable not being applied correctly');
console.log('2. Browser rendering the blue as very light');
console.log('3. The rgb() wrapper causing issues with hex values');

console.log('\n=== SOLUTION ===');
console.log('Need to ensure button has a distinctly different background from form');
console.log('Form: rgb(241, 245, 249) - very light gray');
console.log('Button should be: darker color that contrasts well');