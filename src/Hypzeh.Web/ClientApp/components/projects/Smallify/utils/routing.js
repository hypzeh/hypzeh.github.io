import { Overview, Screenshots } from '../pages';

const DEFAULT_PATH = '/smallify';

export const internal = [
  {
    name: 'Overview',
    path: `${DEFAULT_PATH}`,
    component: Overview,
  },
  {
    name: 'Screenshots',
    path: `${DEFAULT_PATH}/screenshots`,
    component: Screenshots,
  },
];

export const external = [
  {
    name: 'Github',
    path: 'https://github.com/hypzeh/smallify',
  },
  {
    name: 'Download',
    path: 'https://github.com/hypzeh/smallify/releases',
  },
];
