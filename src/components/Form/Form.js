import React from "react";
import styled from "styled-components/macro";
import Input from "../Input";
import UnstyledButton from "../UnstyledButton";
import { QUERIES } from "../../constant";

function Form() {
  const [input, setInput] = React.useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (input === "") return;

    alert(
      `This is a test to show that the input is working as expected ${input}`
    );

    setInput("");
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <Input
        value={input}
        handleChange={handleChange}
        placeholder="Your email"
      />

      <InvestButton>Start Investing</InvestButton>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 2rem 0 4rem;
`;

const InvestButton = styled(UnstyledButton)`
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 16px 16px;
  font-size: 1.125rem;
  border-radius: 4px;
  text-align: center;

  @media ${QUERIES.laptopAndBigger} {
    width: 200px;
  }
`;

export default Form;
