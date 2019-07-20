import { lazy } from 'react';

export const defaultPath = '/';

const routing = [
  {
    path: `${defaultPath}`,
    title: 'Home',
    component: lazy(() => import(/* webpackChunkName: "home" */ '../Home')),
  },
  {
    path: `${defaultPath}about`,
    title: 'About',
    component: lazy(() => import(/* webpackChunkName: "about" */ '../About')),
  },
];

export default routing;
