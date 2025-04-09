import styled from "styled-components/macro";
import { QUERIES, WEIGHTS } from "../../constant";
import Form from "../Form";
import { src } from "../../data";

function Hero() {
  return (
    <HeroWrapper>
      <HeroImg>
        <Backdrop></Backdrop>
        <picture>
          <source
            type="image/avif"
            srcSet={
              (`${src.replace(".png", ".avif")} 1x`,
              `${src.replace(".png", "@2x.avif")} 2x`,
              `${src.replace(".png", "@3x.avif")} 3x`)
            }
          />
          <MainImg src={src} alt="woman smiling" />
        </picture>
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
          <picture>
            <source
              type="image/avif"
              srcSet={`
            ${`./img/lady_small.png`.replace(".png", ".avif")} 1x,
            ${`./img/lady_small.png`.replace(".png", "@2x.avif")} 2x,
            ${`./img/lady_small.png`.replace(".png", "@3x.avif")} 3x
            
            `}
            />

            <Img src="./img/lady_small.png" alt="a woman smiling" />
          </picture>
          <picture>
            <source
              type="image/avif"
              srcSet={`
            ${`./img/black_woman.png`.replace(".png", ".avif")} 1x,
            ${`./img/black_woman.png`.replace(".png", "@2x.avif")} 2x,
            ${`./img/black_woman.png`.replace(".png", "@3x.avif")} 3x
            
            `}
            />

            <Img
              src="./img/black_woman.png"
              alt="an african woman in white smiling"
            />
          </picture>
          <picture>
            <source
              type="image/avif"
              srcSet={`
            ${`./img/male.png`.replace(".png", ".avif")} 1x,
            ${`./img/male.png`.replace(".png", "@2x.avif")} 2x,
            ${`./img/male.png`.replace(".png", "@3x.avif")} 3x
            
            `}
            />
            <Img src="./img/male.png" alt="a young african man smiling" />
          </picture>
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

  @media ${QUERIES.tabletAndBigger} {
    display: flex;
    align-items: center;
    gap: 0 32px;
    margin-top: 60px;
  }

  @media ${QUERIES.laptopAndBigger} {
    display: flex;
    align-items: center;
    gap: 0 48px;

    margin-top: 80px;
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

  @media ${QUERIES.tabletAndBigger} {
    padding: 16px 16px 8px 16px;
  }
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
    width: clamp(14.375rem, 3.5479rem + 22.5564vw, 21.875rem);
    bottom: 15px;
  }

  @media ${QUERIES.laptopAndBigger} {
    display: revert;
    right: 0;
    width: 350px;
    bottom: 20px;
  }
`;

const Post = styled.p`
  @media ${QUERIES.tabletAndBigger} {
    font-size: clamp(0.5rem, -0.2218rem + 1.5038vw, 1rem);
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 0.85rem;
  }
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const Name = styled.p`
  color: var(--color-primary-dark);

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.75rem;
  }
`;

const Tag = styled.p`
  color: var(--color-primary);
  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.75rem;
    font-weight: ${WEIGHTS.bold};
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  padding: 0 16px;
`;

const Img = styled.img`
  width: 60px;

  @media ${QUERIES.tabletAndBigger} {
    width: clamp(2.5rem, 0.6955rem + 3.7594vw, 3.75rem);
  }

  @media ${QUERIES.laptopAndBigger} {
    width: 60px;
  }
`;

const HeroContent = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    flex-basis: clamp(16.875rem, -8.6806rem + 53.2407vw, 31.25rem);
  }

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

  @media ${QUERIES.tabletAndBigger} {
    font-size: clamp(2rem, -0.8872rem + 6.015vw, 4rem);
  }
`;

const Paragraph = styled.p`
  font-size: ${18 / 16}rem;
  margin-top: 1.5rem;
`;

export default Hero;
