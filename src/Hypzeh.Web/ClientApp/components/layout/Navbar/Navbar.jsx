import React from 'react';
import { useSelector } from 'react-redux';

import Styles from './Navbar.styles';
import areas from './areas';
import NavbarLink from './NavbarLink';
import Scroller from '~components/layout/Scroller';
import { isNavbarEnabled } from '~redux/layout/layout-selectors';

const Navbar = () => {
  const isEnabled = useSelector(isNavbarEnabled);
  if (!isEnabled) return null;

  return (
    <Styles.Wrapper>
      <Scroller>
        <Styles.Links>
          {areas.map((area) => (<NavbarLink key={area.id} to={area.url} icon={area.icon} />))}
        </Styles.Links>
      </Scroller>
    </Styles.Wrapper>
  );
};

export default Navbar;
