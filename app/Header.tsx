import React from 'react';
import { Link } from 'remix';
import styled from 'styled-components';

const StyledHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background-color: #fc5000;
`;

const StyledNavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavListItem = styled.li`
  color: #ffffff;  
  margin: 10px;
`;

const StyledLogo = styled.div`
  color: #ffffff;
  margin: 10px;
`;

const StyledNavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
`;

const Header: React.FunctionComponent = () => (
  <StyledHeaderContainer>
    <StyledLogo>
      Crowdcube UK
    </StyledLogo>
    <nav>
      <StyledNavList>
        <StyledNavListItem>
          <StyledNavLink to={`/`}>Users</StyledNavLink>
        </StyledNavListItem>
      </StyledNavList>
    </nav>
  </StyledHeaderContainer>
);

export default Header;
