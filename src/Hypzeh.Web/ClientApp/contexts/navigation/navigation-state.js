const state = {
  projects: [
    {
      name: 'Nick Smirnoff',
      icon: 'ns',
      path: '/',
      pages: [
        { name: 'Home', path: '/' },
        { name: 'About Me', path: '/about-me' },
      ],
      links: [
        { name: 'Github', path: 'https://github.com/hypzeh' },
        { name: 'LinkedIn', path: 'https://www.linkedin.com/in/nick-smirnoff' },
        { name: 'Twitter', path: 'https://twitter.com/hypzeh' },
        { name: 'Email', path: 'mailto:nick.smirnoff@live.co.uk' },
      ],
    },
    {
      name: 'Smallify',
      icon: 'smallify',
      path: '/project/smallify',
      pages: [
        { name: 'Overview', path: '/project/smallify' },
      ],
      links: [
        { name: 'Github', path: 'https://github.com/hypzeh/smallify' },
        { name: 'Releases', path: 'https://github.com/hypzeh/smallify/releases' },
      ],
    },
  ],
  activeProject: {},
};

export default state;
