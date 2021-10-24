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
      <SidebarLink title="new" to="/test/new" icon="plus-circle" />
    </SidebarFooter>
  </Sidebar>
);

export default HomeSidebar;
