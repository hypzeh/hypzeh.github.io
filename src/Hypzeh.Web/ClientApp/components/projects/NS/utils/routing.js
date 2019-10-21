import { Home, AboutMe } from '../pages';

const DEFAULT_PATH = '/';

export const internal = [
  {
    name: 'Home',
    path: `${DEFAULT_PATH}`,
    component: Home,
  },
  {
    name: 'About Me',
    path: `${DEFAULT_PATH}about`,
    component: AboutMe,
  },
];

export const external = [
  {
    name: 'Github',
    path: 'https://github.com/Hypzeh',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/in/nick-smirnoff',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/Hypzeh',
  },
  {
    name: 'Email',
    path: 'mailto:nick.smirnoff@live.co.uk',
  },
];
