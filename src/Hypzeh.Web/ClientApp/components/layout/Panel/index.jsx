import React, { useContext } from 'react';
import styled from 'styled-components';

import types from '../../../types';
import media, { breakpoints } from '../../../utils/style/media';
import { TERTIARY } from '../../../utils/style/variables';
import { ViewContext, viewActions } from '../../../contexts/view';
import { useWindowSize } from '../../../hooks';
import { Scroller } from '../../shared';

const propTypes = {
  children: types.children,
};

const defaultProps = {
  children: null,
};

const Wrapper = styled.aside`
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${TERTIARY.background};
  overflow: hidden;
  z-index: 200;

  ${media.medium`
    position: absolute;
    top: 0;
    bottom: 0;
  `}
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 199;
`;

const Panel = ({ children }) => {
  const [{ isPanelOpen }, viewDispatch] = useContext(ViewContext);
  const size = useWindowSize();

  if (size.width <= breakpoints.medium && !isPanelOpen) {
    return null;
  }

  const handleBackdropClick = () => {
    viewDispatch(viewActions.closePanel());
  };

  return (
    <>
      <Wrapper>
        <Scroller width="15rem">
          {children}
        </Scroller>
      </Wrapper>
      {size.width <= breakpoints.medium && (
        <Backdrop onClick={handleBackdropClick} />
      )}
    </>
  );
};

Panel.propTypes = propTypes;
Panel.defaultProps = defaultProps;

export default Panel;
