/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Content aria-label='Mobile menu'>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Navbar>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </Navbar>
        <Footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0deg 0% 0% / 0.5);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  width: 300px;
  height: 100%;
  padding: 2rem 1.5rem 2rem 2rem;
  background: var(--color-white);
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  border: none;
  padding: 0;
  background-color: var(--color-white);

  svg {
    color: var(--color-gray-900);
    width: 20px;
    height: 20px;
    margin-left: auto;
  }
`;

const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding-block-start: 244px;

  a {
    font-size: 1.1rem;
    font-weight: ${WEIGHTS.medium};
    color: var(--color-gray-900);
    text-decoration: none;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-block-start: auto;
  gap: 14px;

  a {
    color: var(--color-gray-700);
    text-decoration: none;
    font-size: 0.9rem;
  }
`

export default MobileMenu;
