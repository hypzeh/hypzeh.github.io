import { lazy } from 'react';

export default ([
  {
    id: 'global~not-found',
    disableExactMatch: true,
    component: () => lazy(() => import(/* webpackChunkName: "ns~global~not-found" */ './NotFound')),
  },
]);
