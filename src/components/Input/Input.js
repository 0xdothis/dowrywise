import styled from "styled-components/macro";
import { QUERIES } from "../../constant";

function Input({ value, handleChange, ...delegated }) {
  return (
    <TextInput
      type="text"
      value={value}
      onChange={handleChange}
      {...delegated}
    />
  );
}

const TextInput = styled.input`
  padding: 14px 16px;
  min-width: 200px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--color-primary);

  &:focus {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  @media ${QUERIES.tabletAndBigger} {
    padding: 8px 16px;
  }
`;

export default Input;
