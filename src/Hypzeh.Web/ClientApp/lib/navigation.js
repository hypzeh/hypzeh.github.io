const insertPage = (name, path, isHidden) => ({ name, path, isHidden });
const insertSocial = (name, url, icon) => ({ name, url, icon });

export const pages = [
  insertPage('home', '/', true),
  insertPage('about', '/about', false),
  insertPage('projects', '/projects', false),
  insertPage('error', '/error', true),
];

export const socials = [
  insertSocial('github', 'https://github.com/hypzeh', 'github'),
  insertSocial('linkedin', 'https://uk.linkedin.com/in/nick-smirnoff', 'linkedin'),
  insertSocial('twitter', 'https://twitter.com/hypzeh', 'twitter'),
];

export const contact = {
  email: 'nick.smirnoff@live.co.uk',
};
