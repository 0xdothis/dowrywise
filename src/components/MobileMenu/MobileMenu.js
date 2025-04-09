import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";

function MobileMenu({ isOpen, onDismiss }) {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" size={32} />
          <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink>
            Personal <Icon id="chevron-down" />
          </NavLink>
          <NavLink>
            Business <Icon id="chevron-down" />
          </NavLink>
          <NavLink>
            Developer <Icon id="chevron-down" />
          </NavLink>
          <NavLink>Learn</NavLink>
        </Nav>
        <Button>
          <Login>Log in</Login>
          <SignUp>Sign Up For Free</SignUp>
        </Button>
      </Content>
    </Overlay>
  );
}

const Overlay = styled(DialogOverlay)`
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background-color: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  padding: 16px;
  right: 10px;
  top: 0px;
`;

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const Filler = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  padding: 8px 0;

  &:hover {
    cursor: pointer;
  }

  display: flex;
  gap: 0 16px;

  color: var(--color-primary-dark);

  @media ${QUERIES.tabletAndBigger} {
    font-size: 1rem;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUp = styled(UnstyledButton)`
  font-size: 1.125rem;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-white);
  text-align: center;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.95rem;
    padding: 12px 16px;
    width: 200px;
  }
`;

const Login = styled(UnstyledButton)`
  font-size: 1.125rem;
  padding: 16px 24px;
  color: var(--color-primary);
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 16px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.95rem;
    padding: 12px 16px;
    width: 200px;
    margin-top: 32px;
  }
`;

export default MobileMenu;
