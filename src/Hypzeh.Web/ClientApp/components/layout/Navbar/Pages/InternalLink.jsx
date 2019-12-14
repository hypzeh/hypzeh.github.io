import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ViewContext, viewActions } from '../../../../contexts/view';

const propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

const Wrapper = styled(NavLink)`
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

const InternalLink = ({ name, to }) => {
  const [, viewDispatch] = useContext(ViewContext);

  const handleClick = () => {
    viewDispatch(viewActions.hidePagesPanel());
  };

  return (
    <Wrapper exact to={to} onClick={handleClick}>
      {name}
    </Wrapper>
  );
};

InternalLink.propTypes = propTypes;

export default InternalLink;
