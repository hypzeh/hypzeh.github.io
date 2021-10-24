import { lazy } from 'react';

export default ([
  {
    id: 'home~home',
    url: '/',
    component: () => lazy(() => import(/* webpackChunkName: "ns~home~home" */ './Home')),
  },
]);
