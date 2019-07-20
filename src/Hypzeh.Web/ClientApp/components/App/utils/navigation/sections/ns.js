import routing, { defaultPath } from '../../../components/sections/ns/utils/routing';

const ns = {
  title: 'Nick Smirnoff',
  defaultPath,
  internal: routing,
  external: [
    { path: 'https://github.com/Hypzeh', title: 'Github' },
    { path: 'https://www.linkedin.com/in/nick-smirnoff', title: 'LinkedIn' },
    { path: 'https://twitter.com/Hypzeh', title: 'Twitter' },
    { path: 'mailto:nick.smirnoff@live.co.uk', title: 'Email' },
  ],
};

export default ns;
