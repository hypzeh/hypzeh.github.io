import routing, { defaultPath } from '../../../components/sections/ns/utils/routing';

const ns = {
  title: 'Nick Smirnoff',
  defaultPath,
  internal: routing,
  external: [
    { path: 'http://www.google.co.uk', title: 'Google' },
  ],
};

export default ns;
