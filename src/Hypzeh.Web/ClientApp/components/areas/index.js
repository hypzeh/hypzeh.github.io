import { lazy } from 'react';

export default ([
  {
    id: 'area~home',
    urls: ['/', '/about-me'],
    component: () => lazy(() => import(/* webpackChunkName: "ns~area~home" */ './home/Router')),
  },
  {
    id: 'area~smallify',
    url: '/smallify',
    component: () => lazy(() => import(/* webpackChunkName: "ns~area~smallify" */ './smallify/Router')),
  },
  {
    id: 'area~global-router',
    disableExactMatch: true,
    component: () => lazy(() => import(/* webpackChunkName: "ns~area~global" */ './global/Router')),
  },
]);
