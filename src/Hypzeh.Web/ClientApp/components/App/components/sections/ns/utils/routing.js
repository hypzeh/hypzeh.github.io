import { lazy } from 'react';

export const defaultPath = '/';

const routing = [
  {
    path: `${defaultPath}`,
    title: 'Home',
    component: lazy(() => import(/* webpackChunkName: "ns-home" */ '../Home')),
  },
  {
    path: `${defaultPath}about`,
    title: 'About',
    component: lazy(() => import(/* webpackChunkName: "ns-about" */ '../About')),
  },
];

export default routing;
