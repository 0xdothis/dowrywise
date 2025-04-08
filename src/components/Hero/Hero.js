import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constant";
import Form from "../Form";

function Hero() {
  return (
    <HeroWrapper>
      <HeroImg>
        <Backdrop></Backdrop>
        <MainImg src="./img/lady_1.png" alt="woman smiling" />
        <PostWrapper>
          <Post>
            I’ve become more conscoius of how i spend my monet and also about
            investing. no, i feel comfprtable spending knowing my cowrywise
            account is there.
          </Post>
          <PostFooter>
            <Name>Wuraola F</Name>
            <Tag>@wuwu</Tag>
          </PostFooter>
        </PostWrapper>
        <ImgWrapper>
          <Img src="./img/lady_small.png" alt="a woman smiling" />
          <Img
            src="./img/black_woman.png"
            alt="an african woman in white smiling"
          />
          <Img src="./img/male.png" alt="a young african man smiling" />
        </ImgWrapper>
      </HeroImg>

      <HeroContent>
        <Heading>
          Put your <br /> money to work.
        </Heading>
        <Paragraph>
          Build discipline, acess financial tools that steadily grow your
          finances
        </Paragraph>
        <Form />
      </HeroContent>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  padding: 16px 0;
  margin-top: 60px;

  @media ${QUERIES.laptopAndBigger} {
    display: flex;
    align-items: center;
    gap: 0 48px;
  }
`;
const HeroImg = styled.div`
  position: relative;
  margin-left: -16px;
  padding-bottom: 16px;

  @media ${QUERIES.tabletAndBigger} {
    flex: 1;
  }
`;

const Backdrop = styled.div`
  background-color: var(--color-secondary);
  width: 90%;
  height: 100%;
  position: absolute;
  margin-left: -64px;

  @media ${QUERIES.tabletAndBigger} {
    margin-left: -48px;
  }

  @media ${QUERIES.laptopAndBigger} {
    margin-left: 0px;
  }
`;

const MainImg = styled.img`
  width: 100%;
  position: relative;
  padding: 16px;
`;

const PostWrapper = styled.div`
  display: none;
  background-color: var(--color-white);
  padding: 16px;
  font-size: 0.65rem;
  position: absolute;
  border-radius: 8px;
  /* bottom: 0; */

  @media ${QUERIES.tabletAndBigger} {
    display: revert;
    right: 0;
    width: 300px;
    bottom: 30px;
  }
`;

const Post = styled.p``;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Name = styled.p`
  color: var(--color-primary-dark);
`;

const Tag = styled.p`
  color: var(--color-primary);
`;

const ImgWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  /* bottom: 0; */
  padding: 0 16px;
  /* margin-left: 16px; */
`;

const Img = styled.img`
  width: 60px;
`;

const HeroContent = styled.div`
  @media ${QUERIES.laptopAndBigger} {
    flex: 1;
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  width: 80vw;
  max-width: max-content;
  padding-top: 2rem;
  color: var(--color-primary-dark);
  font-weight: ${WEIGHTS.black};
`;

const Paragraph = styled.p`
  font-size: ${18 / 16}rem;
  margin-top: 1.5rem;
`;

export default Hero;
