import { lazy } from 'react';

const title = 'Nick Smirnoff';

const defaultPath = '/';

const routing = [
  {
    path: `${defaultPath}`,
    title: 'Home',
    component: lazy(() => import(/* webpackChunkName: "ns-home" */ '../../components/sections/ns/Home')),
  },
  {
    path: `${defaultPath}about`,
    title: 'About',
    component: lazy(() => import(/* webpackChunkName: "ns-about" */ '../../components/sections/ns/About')),
  },
];

const external = [
  { path: 'https://github.com/Hypzeh', title: 'Github' },
  { path: 'https://www.linkedin.com/in/nick-smirnoff', title: 'LinkedIn' },
  { path: 'https://twitter.com/Hypzeh', title: 'Twitter' },
  { path: 'mailto:nick.smirnoff@live.co.uk', title: 'Email' },
];

export default {
  title,
  defaultPath,
  routing,
  external,
};
