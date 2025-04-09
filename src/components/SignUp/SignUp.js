import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import { QUERIES, WEIGHTS } from "../../constant";

function SignUp() {
  return (
    <Wrapper>
      <Heading>
        Sign up for free. <br /> Start Investing Today.
      </Heading>

      <InputWrapper>
        <Input placeholder="Your Email" />
        <SignUpButton>Sign Up for Free</SignUpButton>
      </InputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 58px 32px;
  border-radius: 8px;
`;

const Heading = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 24px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 1.85rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 2.5rem;
  }
`;

const InputWrapper = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    display: flex;
    gap: 0 32px;
    align-items: center;
    background-color: hsl(0deg 100% 100% / 0.3);
    padding: 16px;
    border-radius: 8px;
  }

  @media ${QUERIES.laptopAndBigger} {
    /* display: flex;
    gap: 0 32px;
    align-items: center;
    background-color: hsl(0deg 100% 100% / 0.3);
    padding: 16px;
    border-radius: 8px; */
  }
`;

const Input = styled.input`
  padding: 16px;
  width: 100%;
  border: none;
  margin-bottom: 16px;
  border-radius: 8px;

  &:focus {
    outline: 2px solid var(--color-white);
    outline-offset: 2px;
  }

  @media ${QUERIES.tabletAndBigger} {
    flex: 1;
    margin-bottom: 0px;
    padding: 12px 16px;
  }
  @media ${QUERIES.laptopAndBigger} {
    margin-bottom: 0px;
    padding: 20px 16px;
  }
`;

const SignUpButton = styled(UnstyledButton)`
  background-color: var(--color-white);
  color: var(--color-primary);
  font-weight: ${WEIGHTS.bold};
  padding: 12px 16px;
  border-radius: 8px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.75rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1rem;
    padding: 20px 16px;
  }
`;

export default SignUp;
