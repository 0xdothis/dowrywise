import styled from "styled-components/macro";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Hero from "../Hero";

import Header from "../Header";
import CardList from "../CardList";
import BuildWealth from "../BuildWealth";
import Safe from "../Safe";
import Download from "../Download";
import SignUp from "../SignUp/SignUp";
import Footer from "../Footer";
import { QUERIES } from "../../constant";

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Hero />
        <CardList />
        <BuildWealth />
        <Safe />
        <Download />
        <SignUp />
      </Main>
      <Footer />
    </Wrapper>
  );
}

const Wrapper = styled(MaxWidthWrapper)`
  padding: 16px;
  margin: 0 auto;
  background-color: var(--color-white);

  @media ${QUERIES.tabletAndBigger} {
    padding: 0 32px;
  }
`;

const Main = styled.main`
  background-color: var(--color-bg);
  padding: 0 16px;
  margin-inline-start: -16px;
  margin-inline-end: -16px;
`;

export default App;
