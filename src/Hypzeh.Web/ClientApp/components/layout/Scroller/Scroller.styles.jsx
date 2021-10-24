import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  position: relative;
  min-height: 0;
  max-height: ${({ maxHeight }) => (maxHeight || '100%')};
  width: ${({ width }) => (width || '100%')};
  height: ${({ height }) => (height || '100%')};
  contain: ${({ contain }) => (contain || 'layout paint style')};
`;

const Content = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => (padding || 0)};
  min-height: 0;
  overflow-x: hidden;
  overflow-y: ${({ overflow }) => (overflow || 'auto')};
`;

export default { Wrapper, Content };
