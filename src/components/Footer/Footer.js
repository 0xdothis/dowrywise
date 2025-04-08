import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constant";

import { footers } from "../../data";

function Footer() {
  return (
    <Wrapper>
      <LinkWrapper>
        {footers.map(({ title, links }) => (
          <ContentWrapper key={`${Math.random() * 100}`}>
            <Heading>{title}</Heading>
            {links.map((link) => (
              <Nav key={`${Math.random() * 100}`}>
                <NavLink href={`/${link.replace(" ", "_").toLowerCase()}`}>
                  {link}
                </NavLink>
              </Nav>
            ))}
          </ContentWrapper>
        ))}
      </LinkWrapper>

      <Address>
        <p>5C reverend ogunbiyi street, ikeja gRA, lagos nigeria.</p>
        <p>2261 market street,#4817 san francisco, CA 94114</p>
      </Address>

      <DescriptionText>
        <p>
          cowrywise financial technology limited (‘’cowrywise’’) is a find
          manager duly licensed by the securities and exchange commission (SEC)
          of nigeria.
        </p>
        <p>
          our mutual funds are managed by our fund management partner and made
          available to our clients through our web and mobile applications. the
          fund manager for each mutual fundis diclosed on every mutual funds
          profile page. any historial returns or expected returns ae
          hypothetical in nature and may not refleet actual future performance.
          <a href="/">
            {" "}
            view full list of available mutual funds on cowrywise.
          </a>
        </p>
        <p>
          Stash account is a 10-digit virtual bank account number in line with
          the nigeria uniform bank account number (NUBAN) ,numering system. the
          NUBAN accounts are generated with the names of selected banks through
          your payment partners,in order for a user to be eligible for stash
          account number, they must have completed thier KYC and added their
          bank verificatio number (BVN). stash is used for the purpose of
          recieving money transfers in place of a regulatr debit card ,it also
          receives the proceeds from the sales of any mutual fund on cowrywise.
        </p>
        <p>
          The content on this website does no constitute a complete description
          of cowrywise’s offerings and services. by using this website, you
          accept our terms of use and privacy policy
        </p>
        <p>
          Google play and the google play logo are trademark of google LLC,
          applle, the apple logo and iphone ae trademark of apple inc.
          registered in US.
        </p>
        <p>@2022 cowrywise financial technology. all rights reseved.</p>
      </DescriptionText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 72px 0px 36px 0;

  margin: 0 auto;
  /* max-width: 50%; */
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${QUERIES.laptopAndBigger} {
    justify-content: space-between;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  margin-bottom: 32px;
  /* flex-basis: 150px; */

  @media ${QUERIES.laptopAndBigger} {
    width: max-content;
  }
`;

const Heading = styled.h3`
  font-size: 1.5rem;
  text-transform: capitalize;
  color: var(--color-primary-dark);
  margin-bottom: 8px;
`;

const Nav = styled.li`
  list-style: none;
  /* font-size: 1.125rem; */
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &::first-letter {
    text-transform: uppercase;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-text);
`;

const Address = styled.div`
  margin: 16px 0;

  & > p:last-of-type {
    margin-top: 16px;
  }
`;

const DescriptionText = styled.div`
  font-size: 0.85rem;
  text-transform: capitalize;

  & > p {
    margin: 16px 0;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    font-weight: ${WEIGHTS.bold};
  }
`;

export default Footer;
