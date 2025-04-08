import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import SafeList from "../SafeList";
import { safes } from "../../data";
import { QUERIES } from "../../constant";

function Safe() {
  return (
    <Wrapper>
      <Heading>Keeping your money safe is our business</Heading>
      <Paragraph>
        trust is our currency. we are committed to the security of your money
        and the protection of your account
      </Paragraph>

      <ActionButton>
        <Text>Learn More</Text>
        <Icon id="chevron-right" />
      </ActionButton>

      <SafeContent>
        {safes.map((safe) => (
          <SafeList {...safe} key={Math.random() * 100} />
        ))}
      </SafeContent>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-primary);
  margin-right: -16px;
  margin-left: -16px;
  padding: 72px 16px;
  color: var(--color-white);

  @media ${QUERIES.tabletAndBigger} {
    margin-right: -64px;
    margin-left: -64px;
    padding-left: 64px;
    padding-right: 64px;
  }
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 2rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 2.5rem;
  }
`;

const Paragraph = styled.p`
  text-transform: capitalize;
  font-size: 1.125rem;
  margin-bottom: 8px;
`;

const ActionButton = styled(UnstyledButton)`
  display: flex;
  padding: 16px 0;
`;

const Text = styled.p`
  margin-right: 8px;
`;

const SafeContent = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 32px;
  }
`;

export default Safe;
