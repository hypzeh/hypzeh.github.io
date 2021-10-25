import React from 'react';

import Sidebar, {
  SidebarContent,
  SidebarFooter,
  SidebarLink,
} from '~components/layout/Sidebar';

const SmallifySidebar = () => (
  <Sidebar>
    <SidebarContent>
      <SidebarLink title="Overview" to="/smallify" exact />
    </SidebarContent>
    <SidebarFooter>
      <SidebarLink title="Releases" to="https://github.com/hypzeh/smallify/releases" openInNewTab icon="rocket" />
      <SidebarLink title="View on GitHub" to="https://github.com/hypzeh/smallify" openInNewTab icon="github" iconPrefix="fab" />
    </SidebarFooter>
  </Sidebar>
);

export default SmallifySidebar;
