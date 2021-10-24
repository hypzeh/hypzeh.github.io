import { lazy } from 'react';

export default ([
  {
    id: 'area~home',
    url: '/',
    component: () => lazy(() => import(/* webpackChunkName: "ns~area~home" */ './home/Router')),
  },
  {
    id: 'area~global-router',
    disableExactMatch: true,
    component: () => lazy(() => import(/* webpackChunkName: "ns~area~global" */ './global/Router')),
  },
]);