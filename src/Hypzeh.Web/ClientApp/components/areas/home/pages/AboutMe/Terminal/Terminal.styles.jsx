import styled from 'styled-components';

import { slideDown } from '~style/animations';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  animation: .5s ease 1 ${slideDown};
`;

const Header = styled.div`
  min-height: 1rem;
  background-color: #cccccc;
  border-radius: .5rem .5rem 0 0;
`;

const Content = styled.div`
  flex: 1 0 auto;
  display: flex;
  max-height: calc(100vh - 10rem);
  background-color: #383737;
  border-radius: 0 0 .5rem .5rem;
  overflow-y: auto;
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,0.5);
  margin-bottom: 2rem;
`;

export default { Wrapper, Header, Content };
