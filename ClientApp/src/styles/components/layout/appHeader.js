import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AppHeader = {};

AppHeader.Header = styled.header`
  display: flex;
  background: black;
`;

AppHeader.Title = styled.h1`
  width: 100%;
`;

AppHeader.NavigationBar = styled.nav`
  display: flex;
  align-items: center;
`;

AppHeader.Link = styled(Link)`
  padding: 0rem 1rem;
  border: 1px red solid;
`;

export default AppHeader;
