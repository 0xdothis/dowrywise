import React from "react";
import styled from "styled-components/macro";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { QUERIES, WEIGHTS } from "../../constant";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <Wrapper>
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Filler />

        <DesktopNav>
          <Nav>
            <Link>
              Personal <Icon id="chevron-down" />
            </Link>
            <Link>
              Business <Icon id="chevron-down" />
            </Link>
            <Link>
              Developer <Icon id="chevron-down" />
            </Link>
            <Link>Learn</Link>
          </Nav>
        </DesktopNav>
        <Side />
        <NavButton>
          <Login>Log in</Login>
          <SignUp>Sign Up For Free</SignUp>
        </NavButton>
        <MobileActions>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" size={32} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
      </MainHeader>
      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  );
}

const Wrapper = styled.header``;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 12px;
  padding-right: 16px;
  padding-left: 16px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: var(--color-white);

  @media ${QUERIES.tabletAndBigger} {
    padding-right: 64px;
    padding-left: 64px;
    max-width: 1300px;
    margin: 0 auto;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndBigger} {
    max-width: 170px;
  }
`;

const DesktopNav = styled.div`
  display: none;
  @media ${QUERIES.laptopAndBigger} {
    display: flex;
    /* justify-content: space-between; */
    color: var(--color-primary-dark);
  }
`;

const Nav = styled.div`
  display: none;
  @media ${QUERIES.laptopAndBigger} {
    display: flex;
    font-size: 1.125rem;
    /* gap: 0 16px; */
  }
`;

const Link = styled.a`
  display: none;
  @media ${QUERIES.laptopAndBigger} {
    display: flex;
    padding: 16px;
    gap: 0 16px;
    color: inherit;
  }
`;

const NavButton = styled.div`
  display: none;
  @media ${QUERIES.laptopAndBigger} {
    display: flex;
  }
`;

const SignUp = styled(UnstyledButton)`
  font-size: 1.125rem;
  padding: 16px 24px;
  border-radius: 4px;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const Login = styled(UnstyledButton)`
  font-size: 1.125rem;
  padding: 16px 24px;
  color: var(--color-primary);
  font-weight: ${WEIGHTS.bold};
`;

const MobileActions = styled.div`
  margin-top: -10px;

  @media ${QUERIES.laptopAndBigger} {
    display: none;
  }
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.laptopAndBigger} {
    display: none;
  }
`;

const Side = styled(UnstyledButton)`
  display: none;
  @media ${QUERIES.laptopAndBigger} {
    display: revert;
  }
`;

export default Header;
