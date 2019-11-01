import { lazy } from 'react';

const ns = {
  title: 'Nick Smirnoff',
  defaultPath: '/',
  icon: 'ns',
  component: lazy(() => import(/* webpackChunkName: "ns" */ '../components/projects/NS')),
};

export default {
  active: ns,
  home: ns,
  projects: [],
};
