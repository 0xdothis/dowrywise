import styled from "styled-components/macro";
import { buildContent } from "../../data";
import { QUERIES, WEIGHTS } from "../../constant";
import UnstyledButton from "../UnstyledButton";

function BuildWealth() {
  return (
    <Wrapper>
      <AppImg src="./img/mobile_app.png" />
      <BuildWrapper>
        <Heading>Start building wealth in 5 minutes</Heading>
        {buildContent.map((content) => (
          <Content key={content.id}>
            <Bullet>
              <Number>{content.id}</Number>
              <Line />
            </Bullet>
            <ContentWrapper>
              <Title>{content.title}</Title>
              <DescriptionText>{content.description}</DescriptionText>
            </ContentWrapper>
          </Content>
        ))}
        <SignUpButton>Sign Up Now</SignUpButton>
      </BuildWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-bottom: 72px;
  color: var(--color-primary);

  @media ${QUERIES.tabletAndBigger} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 0px 32px;
    margin-top: 40px;
    margin-bottom: 32px;
  }

  @media ${QUERIES.laptopAndBigger} {
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;

const AppImg = styled.img`
  width: 100%;
`;

const BuildWrapper = styled.div`
  margin-top: 24px;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  padding-top: 16px;
  margin-bottom: 16px;
  color: var(--color-primary);

  @media ${QUERIES.laptopAndBigger} {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`;
const Content = styled.div`
  display: flex;
  font-size: 1.25rem;
  border-bottom: 1px dotted;
  padding: 16px 0;

  &:nth-child(4) {
    border: 0;

    span {
      display: none;
    }
  }

  @media ${QUERIES.tabletAndBigger} {
    border: 0;
    padding: 0;
  }

  @media ${QUERIES.laptopAndBigger} {
    width: 450px;
    font-size: 1.35rem;
  }
`;

const ContentWrapper = styled.div``;

const Bullet = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
  align-items: center;
  font-weight: ${WEIGHTS.bold};
`;

const Title = styled.h3`
  font-size: 1.25rem;

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.5rem;
  }
`;
const DescriptionText = styled.p`
  color: var(--color-text);

  @media ${QUERIES.tabletAndBigger} {
    font-size: 1rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.25rem;
  }
`;

const Number = styled.h3`
  color: inherit;
  font-size: 1.125rem;

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.5rem;
  }
`;

const SignUpButton = styled(UnstyledButton)`
  background-color: var(--color-primary);
  color: var(--color-white);
  font-weight: ${WEIGHTS.bold};
  border-radius: 4px;
  padding: 8px 16px;
  width: 100%;
  margin: 16px auto;
  text-align: center;
  font-size: 1.125rem;

  @media ${QUERIES.tabletAndBigger} {
    margin: 32px 0 0;
    width: fit-content;
    font-size: 0.95rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    width: 200px;
  }
`;

const Line = styled.span`
  /* Uncomment the display to show styled line on smaller mobile */
  display: none;
  width: 5px;
  height: 150px;
  background-color: var(--color-primary);

  @media ${QUERIES.tabletAndBigger} {
    display: revert;
  }
`;

export default BuildWealth;
