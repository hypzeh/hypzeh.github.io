import { lazy } from 'react';

const title = 'Smallify';

const defaultPath = '/smallify';

const routing = [
  {
    path: `${defaultPath}`,
    title: 'Smallify',
    component: lazy(() => import(/* webpackChunkName: "smallify-overview" */ '../../components/sections/smallify/Overview')),
  },
  {
    path: `${defaultPath}/screenshots`,
    title: 'Screenshots',
    component: lazy(() => import(/* webpackChunkName: "smallify-screenshots" */ '../../components/sections/smallify/Screenshots')),
  },
];

const external = [
  { path: 'https://github.com/hypzeh/smallify', title: 'Github' },
  { path: 'https://github.com/hypzeh/smallify/releases', title: 'Download' },
];

export default {
  title,
  defaultPath,
  routing,
  external,
};
