const DEFAULT_PATH = '/';
const createRoute = (title, path) => ({ title, path });

const ns = {
  title: 'Nick Smirnoff',
  defaultPath: DEFAULT_PATH,
  routing: [
    createRoute('Home', `${DEFAULT_PATH}`),
    createRoute('About', `${DEFAULT_PATH}about`),
  ],
  external: [
    createRoute('Github', 'https://github.com/Hypzeh'),
    createRoute('LinkedIn', 'https://www.linkedin.com/in/nick-smirnoff'),
    createRoute('Twitter', 'https://twitter.com/Hypzeh'),
    createRoute('Email', 'mailto:nick.smirnoff@live.co.uk'),
  ],
};

export default ns;
