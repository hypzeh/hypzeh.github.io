import React from 'react';

import Sidebar, {
  SidebarContent,
  SidebarFooter,
  SidebarLink,
} from '~components/layout/Sidebar';

const HomeSidebar = () => (
  <Sidebar>
    <SidebarContent>
      <SidebarLink title="Home" to="/" icon="hashtag" exact />
      <SidebarLink title="About Me" to="/about-me" icon="hashtag" />
    </SidebarContent>
    <SidebarFooter>
      <SidebarLink title="GitHub" to="https://github.com/hypzeh" openInNewTab icon="github" iconPrefix="fab" />
      <SidebarLink title="LinkedIn" to="https://www.linkedin.com/in/nick-smirnoff/" openInNewTab icon="linkedin" iconPrefix="fab" />
      <SidebarLink title="Twitter" to="https://twitter.com/hypzeh" openInNewTab icon="twitter" iconPrefix="fab" />
      <SidebarLink title="Email" to="mailto:nick.smirnoff@live.co.uk" openInNewTab icon="envelope" />
    </SidebarFooter>
  </Sidebar>
);

export default HomeSidebar;
