import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarStyled = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: white;
`;

export const Link = styled(NavLink)`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
