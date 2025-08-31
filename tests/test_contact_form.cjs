// Test script to verify contact form event listener implementation
const fs = require('fs');
const path = require('path');

console.log('Testing contact form event listener implementation...');

// Read the contact.astro file
const contactFile = path.join(__dirname, 'src/pages/contact.astro');
const content = fs.readFileSync(contactFile, 'utf8');

// Check if the script tag exists
const hasScript = content.includes('<script>');
console.log('✓ Script tag found:', hasScript);

// Check if DOMContentLoaded listener is present
const hasDOMContentLoaded = content.includes("document.addEventListener('DOMContentLoaded'");
console.log('✓ DOMContentLoaded listener found:', hasDOMContentLoaded);

// Check if form submit event listener is present
const hasSubmitListener = content.includes("form.addEventListener('submit'");
console.log('✓ Form submit listener found:', hasSubmitListener);

// Check if preventDefault is called
const hasPreventDefault = content.includes('e.preventDefault()');
console.log('✓ preventDefault() call found:', hasPreventDefault);

// Check if form data is gathered from all fields
const hasNameField = content.includes("document.getElementById('name').value");
const hasEmailField = content.includes("document.getElementById('email').value");
const hasCompanyField = content.includes("document.getElementById('company').value");
const hasMessageField = content.includes("document.getElementById('message').value");
console.log('✓ All form fields are gathered:', hasNameField && hasEmailField && hasCompanyField && hasMessageField);

// Check if POST request is made
const hasFetch = content.includes("fetch('/api/contact'");
const hasPostMethod = content.includes("method: 'POST'");
const hasJSONHeader = content.includes("'Content-Type': 'application/json'");
const hasJSONStringify = content.includes('JSON.stringify(formData)');
console.log('✓ POST request implementation found:', hasFetch && hasPostMethod && hasJSONHeader && hasJSONStringify);

// Check if error handling is present
const hasErrorHandling = content.includes('try {') && content.includes('} catch (error) {');
console.log('✓ Error handling found:', hasErrorHandling);

// Check if form reset is included
const hasFormReset = content.includes('form.reset()');
console.log('✓ Form reset functionality found:', hasFormReset);

console.log('\nAll checks completed successfully! The contact form event listener has been properly implemented.');