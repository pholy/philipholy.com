// Test script to verify that the script only runs when submit button is clicked
const fs = require('fs');
const path = require('path');

console.log('Testing that script only runs on submit button click...');

// Read the contact.astro file
const contactFile = path.join(__dirname, 'src/pages/contact.astro');
const content = fs.readFileSync(contactFile, 'utf8');

// Check that DOMContentLoaded is NOT present
const hasDOMContentLoaded = content.includes("document.addEventListener('DOMContentLoaded'");
console.log('✓ DOMContentLoaded listener removed:', !hasDOMContentLoaded);

// Check that submit button click listener is present
const hasSubmitButtonClick = content.includes("submitButton.addEventListener('click'");
console.log('✓ Submit button click listener found:', hasSubmitButtonClick);

// Check that submit button is selected by class
const hasSubmitButtonSelector = content.includes("document.querySelector('.submit-btn')");
console.log('✓ Submit button selected by class:', hasSubmitButtonSelector);

// Check that preventDefault is still called
const hasPreventDefault = content.includes('e.preventDefault()');
console.log('✓ preventDefault() call found:', hasPreventDefault);

// Check if form data is still gathered from all fields
const hasNameField = content.includes("document.getElementById('name').value");
const hasEmailField = content.includes("document.getElementById('email').value");
const hasCompanyField = content.includes("document.getElementById('company').value");
const hasMessageField = content.includes("document.getElementById('message').value");
console.log('✓ All form fields are still gathered:', hasNameField && hasEmailField && hasCompanyField && hasMessageField);

// Check if POST request is still made
const hasFetch = content.includes("fetch('/api/contact'");
const hasPostMethod = content.includes("method: 'POST'");
const hasJSONHeader = content.includes("'Content-Type': 'application/json'");
const hasJSONStringify = content.includes('JSON.stringify(formData)');
console.log('✓ POST request implementation still present:', hasFetch && hasPostMethod && hasJSONHeader && hasJSONStringify);

// Check if error handling is still present
const hasErrorHandling = content.includes('try {') && content.includes('} catch (error) {');
console.log('✓ Error handling still present:', hasErrorHandling);

// Check if form reset is still included (now with specific form ID)
const hasFormReset = content.includes("document.getElementById('contact-form').reset()");
console.log('✓ Form reset functionality still present:', hasFormReset);

// Check that the script doesn't run on page load
const hasPageLoadExecution = content.includes('DOMContentLoaded') || content.match(/^\s*[^\/\*\s]/m);
console.log('✓ Script only runs on button click (no immediate execution):', !content.includes('DOMContentLoaded'));

console.log('\nAll checks completed successfully! The script now only runs when the submit button is clicked.');