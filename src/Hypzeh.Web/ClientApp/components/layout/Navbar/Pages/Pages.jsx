import React, { useContext } from 'react';
import styled from 'styled-components';

import { TERTIARY } from '../../../../utils/style/variables';
import media, { breakpoints } from '../../../../utils/style/media';
import { ViewContext, viewActions } from '../../../../contexts/view';
import { NavigationContext } from '../../../../contexts/navigation';
import { useWindowSize } from '../../../../hooks';
import Scroller from '../../../shared/Scroller';
import Separator from '../../../shared/Separator';
import Backdrop from '../../../shared/Backdrop';

const Wrapper = styled.div`
  flex-shrink: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -15rem;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  flex-direction: column;
  background-color: ${TERTIARY.background};
  overflow: hidden;

  ${media.medium`
    position: static;
    display: flex;
  `}
`;

const PageLinks = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ExternalLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pages = () => {
  const [{ isPagesPanelVisible }, viewDispatch] = useContext(ViewContext);
  const [{ activeProject }] = useContext(NavigationContext);
  const size = useWindowSize();

  if (isPagesPanelVisible && size.width > breakpoints.medium) {
    viewDispatch(viewActions.hidePagesPanel());
  }

  return (
    <>
      {isPagesPanelVisible && (
        <Backdrop onClick={() => viewDispatch(viewActions.hidePagesPanel())} />
      )}
      <Wrapper isVisible={isPagesPanelVisible}>
        <Scroller width="15rem">
          <PageLinks>
            {activeProject.pages && activeProject.pages.map((page) => (<div key={page.path}>{page.name}</div>))}
          </PageLinks>
          <Separator />
          <ExternalLinks>
            {activeProject.links && activeProject.links.map((page) => (<div key={page.path}>{page.name}</div>))}
          </ExternalLinks>
        </Scroller>
      </Wrapper>
    </>
  );
};

export default Pages;
