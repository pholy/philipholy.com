// Test script to verify form element width behavior
// This would be run in a browser to check the current styling

console.log("Testing form width issue:");
console.log("1. Global CSS has: textarea { width: 100%; }");
console.log("2. Contact form CSS has: input, textarea { width: 100%; }");
console.log("3. This causes elements to span full width of contact-container instead of just the form area");
console.log("4. The form has padding and background, but elements ignore this containment");

// The issue is that width: 100% makes elements take the full width of their container
// But we want them constrained to the form's content area, respecting its padding