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
          {areas.map((area) => (area.id.startsWith('seperator')
            ? (<Styles.Seperator key={area.id} />)
            : (
              <NavbarLink key={area.id} to={area.to}>
                <area.iconComponent size={50} />
              </NavbarLink>
            )
          ))}
        </Styles.Links>
      </Scroller>
    </Styles.Wrapper>
  );
};

export default Navbar;
