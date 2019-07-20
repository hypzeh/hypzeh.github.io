import { lazy } from 'react';

export const defaultPath = '/smallify';

const routing = [
  {
    path: `${defaultPath}`,
    title: 'Smallify',
    component: lazy(() => import(/* webpackChunkName: "smallify-overview" */ '../Overview')),
  },
  {
    path: `${defaultPath}/screenshots`,
    title: 'Screenshots',
    component: lazy(() => import(/* webpackChunkName: "smallify-screenshots" */ '../Screenshots')),
  },
];

export default routing;
