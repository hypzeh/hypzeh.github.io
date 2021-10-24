import { lazy } from 'react';

export default ([
  {
    id: 'home~home',
    url: '/',
    component: () => lazy(() => import(/* webpackChunkName: "ns~home~home" */ './Home')),
  },
  {
    id: 'home~about-me',
    url: '/about-me',
    component: () => lazy(() => import(/* webpackChunkName: "ns~home~about-me" */ './AboutMe')),
  },
]);
