const DEFAULT_PATH = '/smallify';
const createRoute = (title, path) => ({ title, path });

const smallify = {
  title: 'Smallify',
  defaultPath: DEFAULT_PATH,
  routing: [
    createRoute('Smallify', `${DEFAULT_PATH}`),
    createRoute('Screenshots', `${DEFAULT_PATH}/screenshots`),
  ],
  external: [
    createRoute('Github', 'https://github.com/hypzeh/smallify'),
    createRoute('Download', 'https://github.com/hypzeh/smallify/releases'),
  ],
};

export default smallify;
