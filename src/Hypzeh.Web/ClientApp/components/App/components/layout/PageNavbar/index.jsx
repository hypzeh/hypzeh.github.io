import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PageLink from './components/PageLink';
import ExternalLink from './components/ExternalLink';

const propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  external: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ),
};

const defaultProps = {
  external: [],
};

const Container = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Separator = styled.hr`
  margin-inline-start: .5rem;
  margin-inline-end: .5rem;
`;

const PageNavbar = ({ pages, external }) => (
  <Container>
    {pages.map(({ name, path }) => (
      <PageLink
        key={path}
        name={name}
        path={path}
      />
    ))}
    <Separator />
    {external.map(({ name, path }) => (
      <ExternalLink
        key={path}
        name={name}
        path={path}
      />
    ))}
  </Container>
);

PageNavbar.propTypes = propTypes;
PageNavbar.defaultProps = defaultProps;

export default PageNavbar;
