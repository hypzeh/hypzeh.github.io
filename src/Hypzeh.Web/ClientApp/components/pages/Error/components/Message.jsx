import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

import { PRIMARY } from '../../../../styles/variables';
import media from '../../../../styles/media';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;

  ${media.medium`
    flex-direction: column;
  `}

  a, button {
    width: 10rem;
    height: 2rem;
    padding: 0;
    margin: .5rem;
    background: ${PRIMARY.background};
    border: 1px solid ${PRIMARY.colour};
    color: ${PRIMARY.colour};
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: ${PRIMARY.colour};
      color: ${PRIMARY.hover};
    }
  }
`;

const propTypes = {
  history: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  message: PropTypes.string.isRequired,
};

const Message = ({ history, message }) => (
  <Content>
    <h2>{message}</h2>
    <Actions>
      <button type="button" onClick={history.goBack}>Back</button>
      <Link to="/">Home</Link>
    </Actions>
  </Content>
);

Message.propTypes = propTypes;

export default withRouter(Message);
