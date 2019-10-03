import { lazy } from 'react';

const DEFAULT_PATH = '/smallify';

export const internal = [
  {
    name: 'Home',
    path: `${DEFAULT_PATH}`,
    component: lazy(() => import(/* webpackChunkName: "smallify-home" */ '../components/pages/Home')),
  },
  {
    name: 'Screenshots',
    path: `${DEFAULT_PATH}/screenshots`,
    component: lazy(() => import(/* webpackChunkName: "smallify-screenshots" */ '../components/pages/Screenshots')),
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
