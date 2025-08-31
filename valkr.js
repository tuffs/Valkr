// VALKR

const fs = require('fs');
const path = require('path');

// This is the easiest script you will ever encounter.
// Quickly: npx valkr + <command> + <argument_a> <argument_b> <argument_c>

// Mailer Creators
// valkr mailer transactions

const VALKR_VERSION_NUMBER = '.01';

function VALKR() {

  const args = process.argv.slice(2);
  const [command, ...additionalArguments] = args;
  const additionalArgumentsLength = additionalArguments.length;

  console.log(`Command: ${command}.`);
  console.log(`Additional arguments: ${additionalArguments}`);

  // Handle Different Commands
  switch (command) {

    case 'generate':
      console.log(`Running generator...`)
      handleGenerate(additionalArguments);
      break;

    case 'help':
      console.log(`Printing Helper Guide`);
      handleHelp(additionalArguments);
      break;

    case '--version':
      console.log(`Version: ${VALKR_VERSION_NUMBER}`);
      break;

    default:
      console.error(`Uknown commnd: ${command}`);
      handleHelp();
  }

  return null;
}

function handleGenerate(args) {
  const [type, ...options] = args;
  console.log(`Generating ${type} with options:`, options);

  if (type === 'mailer') {
    // Handle mailer generation
    console.log('Creating mailer...');

    // Get our mailer name from the first argument
    const [name, ...remainingOptions] = type;

    const mailerTemplate = `
    function {%name%}Mailer() {
      return (
        <div>
          <h1>{%name%} Mailer</h1>
          <p>Mailer stuff for {%name%}Mailer.</p>
        </div>
      );
    };
    `;

    // Replace Placeholders in mailerTemplate
    const replaceNameOfFunction = mailerTemplate
      .reaplceFirst('{%mailerName%}', name);

    const replaceNamesInside = mailerTemplate
      .replaceAll('{%name%}', name.charAt(0).toUpperCase() + name);

    const outputDir = path.join(process.cwd(), 'components');
    const outputFile = path.join(outputDir, `${name(Mailer)}.js`);

    // Ensure the output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

  }

  if (type === 'messenger') {
    // Handle messenger generation
    console.log('Creating messenger...');
  }

}

function handleHelp() {
  console.log(`

    VALKR - HELP DOCUMENTATION
    VERSION - ${VALKR_VERSION_NUMBER}

    Thank you for choosing to build your application
    with the help of VALKR, we want to give you
    comprehensive generator assistance to quickly
    bootstrap your software.

    We provide the following generators as add-in
    software. You can run a 'generate' command for
    any of the following solutions:

    1. Contact Messenger Generators
        - Transactional Emails - transactional
        - Text Message API (Twilio) - text_messaging

        $ node valkr generate messenger transactional
        $ node valkr generate messenger text_messaging

    2. Managed Resources
        - Posts, Products, Appointments, Etc.

        $ node valkr generate model posts
        $ node valkr generate model products
        $ node valkr generate model appointments
        $ node valkr generate model <name_with_plural_suffix_s>
`);
}

VALKR();