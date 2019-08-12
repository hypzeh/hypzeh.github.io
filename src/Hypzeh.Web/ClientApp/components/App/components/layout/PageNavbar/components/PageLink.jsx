import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ViewContext, viewActions } from '../../../../contexts/view';

const propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const Link = styled(NavLink)`
  border-radius: .5rem 0 0 .5rem;
  padding: .5rem;
  margin-left: .25rem;
  color: white;
  text-decoration: none;

  &:hover {
    background-color: #181818;
  }

  &.active {
    background-color: #212121;
  }
`;

const PageLink = ({ name, path }) => {
  const [, viewDispatch] = useContext(ViewContext);

  const handleLinkClick = () => {
    viewDispatch(viewActions.closePanel());
  };

  return (
    <Link
      exact
      to={path}
      onClick={handleLinkClick}
    >
      {name}
    </Link>
  );
};

PageLink.propTypes = propTypes;

export default PageLink;
