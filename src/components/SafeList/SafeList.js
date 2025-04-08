import styled from "styled-components/macro";
import { WEIGHTS } from "../../constant";

function SafeList({ title, description }) {
  return (
    <Wrapper>
      <Bullet />
      <ContentWrapper>
        <Heading>{title}</Heading>
        <DescriptionText>{description}</DescriptionText>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 42px;
  display: flex;
  align-items: baseline;
  gap: 0 16px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Bullet = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 2px;
  background-color: var(--color-white);
  position: relative;

  /* Create additional box */
  &::before {
    content: "";
    width: 15px;
    height: 15px;
    position: absolute;
    top: 3px;
    right: -3px;
    background-color: var(--color-white);
    opacity: 0.5;
  }
`;

const Heading = styled.h3`
  font-size: 1.25rem;
  font-weight: ${WEIGHTS.bold};
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  font-size: 1.125rem;
`;

export default SafeList;
