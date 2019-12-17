const createOutput = (command, value, link) => ({
  command,
  value,
  link,
  timestamp: (new Date()).toLocaleTimeString(
    undefined,
    {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    },
  ).toUpperCase(),
});

const execute = (command, print) => {
  switch (command.toLowerCase()) {
    case 'clear':
      print(null, true);
      break;

    case '-h':
    case 'help':
      print(createOutput(
        command,
        'github \t\tDisplays link to my Github profile.'
         + '\nlocation \tDisplays location of where I am currently based.',
      ));
      break;

    case '-gh':
    case 'github':
      print(createOutput(command, 'https://www.github.com/hypzeh', 'https://www.github.com/hypzeh'));
      break;

    case '-l':
    case 'location':
      print(createOutput(command, 'Southampton, UK.'));
      break;

    case '-v':
    case 'version':
      print(createOutput(command, 'v1.0.0-beta'));
      break;

    default:
      print(createOutput(command, 'Unknown command.'));
      break;
  }
};

export default { createOutput, execute };
