import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const Header = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Section = styled.section`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  background: rgba(33,33,33,.95);
  padding: 0 1rem;
  z-index: 1;

  &:first-of-type {
    box-shadow: 0 -4rem 3rem -4rem rgba(33,33,33, 0.6);
  }

  &:last-of-type {
    flex-grow: 1;
  }
`;

const propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
};

const Page = ({ children, name }) => (
  <React.Fragment>
    <Helmet>
      <title>{name}</title>
    </Helmet>
    {children}
  </React.Fragment>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
export { Header, Section };
