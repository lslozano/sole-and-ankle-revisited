import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  const handleOpenMenu = () => setShowMobileMenu(true);
  const handleCloseMenu = () => setShowMobileMenu(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <IconsWrapper>
          <Icon id="shopping-bag" />
          <Icon id="search" />
          <MenuButton onClick={handleOpenMenu}>
            <Icon id="menu" />
          </MenuButton>
        </IconsWrapper>
      </MainHeader>

      <MobileMenu isOpen={showMobileMenu} onDismiss={handleCloseMenu} />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--color-gray-300);

  @media ${QUERIES.tabletAndDown} {
    padding: 20px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 14vw - 7.5rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const IconsWrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 40px;
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 20px;
  }
`;

const MenuButton = styled.button`
  border: none;
  padding: 0;
  background-color: var(--color-white);
`;

export default Header;
