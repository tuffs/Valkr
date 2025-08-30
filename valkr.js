// VALKR
// To Run Quickly: `$ node valkr <command> <action> <argument_a> <argument_b> <argument_c> ...`

const VALKR_VERSION = '.01';

function VALKR() {

  const args = process.argv.slice(2);
  const [command, ...additionalArguments] = args;

  const additionalArgumentsLength = additionalArguments.length;


  console.log(`Command: ${command}.`);
  console.log(`Additoinal Arguments Length: ${additionalArgumentsLength}`);
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
      console.log(`Version: ${VALKR_VERSION}`);
      break;

    default:
      console.error(`You must provide arguments to 
        this script for it to work. Run: valkr help for help!`);
  }

  return true;
}

function handleGenerate(additionalArgs) {
  console.log(`Generator Called...`);

  if (additionalArgs[0] === 'mailer') {
    console.log(`Mailer Called...`);
  }

  if (additionalArgs[0] === 'anything_else') {
    console.log(`anything_else Called...`)
  }

  return true;
}

function handleHelp() {
  console.log(`

    VALKR - HELP DOCUMENTATION
    VERSION - ${VALKR_VERSION}

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

  return true;
}

VALKR();