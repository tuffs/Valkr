// VALKR

// This is the easiest script you will ever encounter.
// Quickly: ./valkr + <command> + <argument_a> <argument_b> <argument_c>

// Mailer Creators
// ./valkr mailer transactions

function VALKR() {

  // Assign command line arguments to a variable.
  const args = process.argv.slice(2);

  // Extract command and additional arguments
  const [command, ...additionalArguments] = args;

  // Log The Input Command and Arguments
  console.log(`Command: ${command}.`);
  console.log(`Additional arguments: ${additionalArguments}`);

  // Run the command based function and pass its arguments
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
      console.log(`Version: ${valkrVersionNumber}`);
      break;

    default:
      console.error(`You must provide arguments to 
        this script for it to work. Run: ./valkr help for help!`);
  }

  return null;
}

VALKR();