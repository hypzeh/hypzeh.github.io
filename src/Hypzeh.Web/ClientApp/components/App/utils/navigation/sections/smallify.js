import routing, { defaultPath } from '../../../components/sections/smallify/utils/routing';

const smallify = {
  title: 'Smallify',
  defaultPath,
  internal: routing,
  external: [
    { path: 'https://github.com/hypzeh/smallify', title: 'Github' },
    { path: 'https://github.com/hypzeh/smallify/releases', title: 'Download' },
  ],
};

export default smallify;
