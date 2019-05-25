import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

const PageHeader = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const PageSection = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: rgba(33,33,33,.95);
  box-shadow: 0 0 3rem 0 rgba(33, 33, 33, 0.6);
  padding: 0 1rem;
  z-index: 1;

  &:not(:last-child) {
    content: '';
    flex-grow: 0;
  }
`;

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
};

const Page = ({ children, title }) => (
  <React.Fragment>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </React.Fragment>
);

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
export { PageHeader, PageSection };
