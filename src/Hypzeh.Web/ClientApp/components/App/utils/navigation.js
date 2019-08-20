import { lazy } from 'react';

const ns = {
  title: 'Nick Smirnoff',
  defaultPath: '/',
  icon: 'ns',
  component: lazy(() => import(/* webpackChunkName: "ns" */ '../components/projects/NS')),
};

const smallify = {
  title: 'Smallify',
  defaultPath: '/smallify',
  icon: 'smallify',
  component: lazy(() => import(/* webpackChunkName: "smallify" */ '../components/projects/Smallify')),
};

const navigation = {
  active: ns,
  projects: [
    ns,
    smallify,
  ],
};

export default navigation;
