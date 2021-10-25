import layouts from './layouts';

export default {
  ...layouts.DEFAULT,
  sidebar: {
    ...layouts.DEFAULT.sidebar,
    collapsed: true,
  },
};
