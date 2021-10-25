import shortid from 'shortid';

const createOutput = (command, value, link) => ({
  id: shortid.generate(),
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
    case '-h':
    case 'help':
      print(createOutput(
        command,
        'contact \tLists options to contact me.'
        + '\neducation \tLists details about my education.'
        + '\nexperience \tLists details about my experience.'
        + '\ngithub \t\tDisplays link to my Github profile.'
        + '\nlinkedin \tDisplays link to my LinkedIn profile.'
        + '\nlocation \tDisplays location of where I am currently based.'
        + '\ntwitter \tDisplays link to my Twitter profile.',
      ));
      break;

    case 'clr':
    case 'clear':
      print(null, true);
      break;

    case '-c':
    case 'contact':
      print(createOutput(command, 'nick.smirnoff@live.co.uk', 'mailto:nick.smirnoff@live.co.uk'));
      break;

    case '-e':
    case 'education':
      print(createOutput(
        command,
        'The University of Hull (2013 - 2017)'
        + '\n\tMaster of Engineering'
        + '\n\tMEng Computer Science'
        + '\n\t2:1'
        + '\n'
        + '\nWilberforce College (2011 - 2013)'
        + '\n\tBTEC Level 3 Extended Diploma'
        + '\n\tTriple Distinction (Star)',
      ));
      break;

    case '-exp':
    case '-xp':
    case 'experience':
      print(createOutput(
        command,
        'Netwrix (2020 - Present)'
        + '\n\tSoftware Engineer'
        + '\n\tSouthampton, United Kingdom'
        + '\n'
        + '\nZupa (2018 - 2020)'
        + '\n\tSoftware Engineer'
        + '\n\tSouthampton, United Kingdom'
        + '\n'
        + '\nAPD Communications (2017 - 2018)'
        + '\n\tSoftware Engineer'
        + '\n\tHull, United Kingdom'
        + '\n'
        + '\nSeed Software (2016 - 2017)'
        + '\n\tPart-Time Software Engineer'
        + '\n\tHull, United Kingdom',
      ));
      break;

    case '-gh':
    case 'github':
      print(createOutput(command, 'https://www.github.com/hypzeh', 'https://www.github.com/hypzeh'));
      break;

    case '-li':
    case 'linkedin':
      print(createOutput(command, 'https://www.linkedin.com/in/nick-smirnoff', 'https://www.linkedin.com/in/nick-smirnoff'));
      break;

    case '-l':
    case 'location':
      print(createOutput(command, 'Southampton, United Kingdom.'));
      break;

    case '-t':
    case 'twitter':
      print(createOutput(command, 'https://twitter.com/hypzeh', 'https://twitter.com/hypzeh'));
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
