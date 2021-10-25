import { lazy } from 'react';

export default ([
  {
    id: 'smallify~overview',
    root: true,
    url: '/smallify',
    component: () => lazy(() => import(/* webpackChunkName: "ns~smallify~overview" */ './Overview')),
  },
]);
