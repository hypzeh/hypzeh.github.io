const state = {
  projects: [
    {
      name: 'Nick Smirnoff',
      path: '/',
      pages: [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about' },
      ],
      links: [
        { name: 'Github', path: 'https://github.com/hypzeh' },
      ],
    },
    {
      name: 'Smallify',
      path: '/project/smallify',
      pages: [
        { name: 'Smallify', path: '/project/smallify' },
        { name: 'Screenshots', path: '/project/smallify/screenshots' },
      ],
      links: [
        { name: 'Github', path: 'https://github.com/hypzeh/smallify' },
      ],
    },
  ],
  activeProject: {},
};

export default state;
