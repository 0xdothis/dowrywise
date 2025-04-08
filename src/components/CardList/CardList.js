import styled from "styled-components/macro";
import Card from "../Card";

import { data } from "../../data";
import { QUERIES } from "../../constant";

function CardList() {
  return (
    <Wrapper>
      <Heading>Get financial freedom</Heading>
      <Description>
        Plan towards your dream home, fund your kid’s education, travel the
        world, all in one app
      </Description>
      <Container>
        {data.map((card) => (
          <Card key={card.tag} {...card} />
        ))}
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 32px;
`;

const Heading = styled.h2`
  color: var(--color-primary-dark);
  font-size: 1.75rem;
  padding-bottom: 8px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 2rem;
    margin-top: 70px;
  }
  @media ${QUERIES.laptopAndBigger} {
    font-size: 2.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.125rem;
  margin-bottom: 32px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 1.25rem;
    margin-bottom: 70px;
  }

  @media ${QUERIES.laptopAndBigger} {
    margin-bottom: 120px;
  }
`;

const Container = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 32px;
  }
`;

export default CardList;
