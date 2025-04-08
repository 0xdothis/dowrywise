import styled from "styled-components/macro";
import { reviews } from "../../data";
import { QUERIES, WEIGHTS } from "../../constant";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import StarRating from "../StarRating";

function Download() {
  return (
    <Wrapper>
      <QuestionText>why cowrywise ?</QuestionText>
      <Heading>
        Convinced? <span>Sign Up Now</span>
      </Heading>

      <DownlaodWrapper>
        {reviews.map(({ comment, title, rating, store, imgUrl, alt }) => (
          <ReviewWrapper key={imgUrl}>
            <Banner>
              <RatingData>
                <RatingText>
                  <Rate>{rating}</Rate>/5
                </RatingText>
                <StarRating
                  maxRating={5}
                  rating={Math.floor(rating)}
                  size={24}
                />
              </RatingData>
              <AppBanner>
                <AppLogo src={imgUrl} alt={alt} />
                <BannerWrapper>
                  <BannerText>Get it on</BannerText>
                  <BannerStore>{store}</BannerStore>
                </BannerWrapper>
              </AppBanner>
            </Banner>

            <Title>{title}</Title>
            <Comment>{comment}</Comment>

            <CallToAction>
              <Text>download now</Text>
              <Icon id="chevron-right" size={20} />
            </CallToAction>
          </ReviewWrapper>
        ))}
      </DownlaodWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 72px 0;
`;

const QuestionText = styled.p`
  text-transform: uppercase;
  color: var(--color-primary-dark);
`;

const Heading = styled.h2`
  margin: 16px 0;
  font-size: 1.75rem;
  color: var(--color-accent-006);
  font-weight: ${WEIGHTS.bold};
  padding-bottom: 16px;

  span {
    color: var(--color-primary-dark);
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 2.5rem;
  }
`;

const DownlaodWrapper = styled.div`
  @media ${QUERIES.tabletAndBigger} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 32px;
  }
`;

const ReviewWrapper = styled.div`
  padding: 16px 32px;
  border-radius: 8px;
  background-color: var(--color-whte);
  box-shadow: 1px 12px 24px hsl(0deg 0% 50% / 0.5);
`;

const Banner = styled.div`
  /* display: flex;
  justify-content: space-between; */
  margin-bottom: 24px;
`;

const RatingData = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

const RatingText = styled.p`
  color: var(--color-accent-006);
`;

const Rate = styled.span`
  color: var(--color-primary-dark);
  font-weight: ${WEIGHTS.bold};
  font-size: 1.75rem;
`;

const AppBanner = styled.div`
  display: flex;
  padding: 8px 16px;
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  align-items: center;
  gap: 16px;
  border-radius: 8px;
  width: max-content;
`;

const AppLogo = styled.img`
  height: 30px;
  /* padding: 0; */
  /* object-fit: cover; */
`;

const BannerWrapper = styled.div`
  /* flex: 1; */
`;

const BannerText = styled.p`
  font-size: 0.75rem;
`;

const BannerStore = styled.p`
  font-weight: ${WEIGHTS.bold};
`;

const Title = styled.h3`
  color: var(--color-primary-dark);
  font-size: 1.25rem;
  margin-bottom: 8px;
`;

const Comment = styled.p`
  font-size: 0.85rem;
  margin-bottom: 32px;
`;

const CallToAction = styled(UnstyledButton)`
  display: flex;
  font-size: 0.75rem;
  align-items: center;
  gap: 8px;
  color: var(--color-primary);

  @media ${QUERIES.tabletAndBigger} {
    width: 200px;
  }
`;

const Text = styled.p`
  text-transform: uppercase;
`;

export default Download;
