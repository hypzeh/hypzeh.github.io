import { lazy } from 'react';

const ns = {
  title: 'Nick Smirnoff',
  defaultPath: '/',
  component: lazy(() => import(/* webpackChunkName: "ns" */ '../../components/sections/NS')),
};

const smallify = {
  title: 'Smallify',
  defaultPath: '/smallify',
  component: lazy(() => import(/* webpackChunkName: "smallify" */ '../../components/sections/Smallify')),
};

const state = {
  active: ns,
  sections: [
    smallify,
    ns,
  ],
};

export default state;
