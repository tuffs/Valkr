const fs = require('fs');
const path = require('path');

// Example usage: Define the variable (this could come from command-line args or a function parameter)
const name = 'contact'; // Replace with your dynamic value

// Define the template as a string (or read from a file: fs.readFileSync('template.js', 'utf8'))
const template = `
function {%name%}Mailer() {
  return (
    <div>
      <h1>{%name%} Mailer</h1>
      <p>Mailer stuff for {%name%}Mailer.</p>
    </div>
  );
};
`;

// Replace placeholders (case-sensitive; adjust regex if needed for more complex placeholders)
const generatedContent = template.replaceAll('{%name%}', name.charAt(0).toUpperCase() + name.slice(1)); // Capitalize first letter if desired, e.g., 'Contact'

// Determine output path: e.g., in a 'components' folder relative to current working directory
const outputDir = path.join(process.cwd(), 'components');
const outputFile = path.join(outputDir, `${name}Mailer.js`);

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write the file
try {
  fs.writeFileSync(outputFile, generatedContent, 'utf8');
  console.log(`File generated successfully at: ${outputFile}`);
} catch (error) {
  console.error('Error generating file:', error);
}