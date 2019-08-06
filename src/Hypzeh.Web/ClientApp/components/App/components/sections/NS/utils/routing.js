import { lazy } from 'react';

export const internal = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import(/* webpackChunkName: "ns-home" */ '../components/pages/Home')),
  },
  {
    name: 'About',
    path: '/about',
    component: lazy(() => import(/* webpackChunkName: "ns-about" */ '../components/pages/About')),
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
