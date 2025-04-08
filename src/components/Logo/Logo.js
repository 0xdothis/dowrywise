import styled from "styled-components/macro";

function Logo({ props }) {
  return (
    <Link href="/">
      <Wrapper src="./img/logo.png" alt="back to home" />
    </Link>
  );
}

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.img`
  width: 100%;
`;

export default Logo;
