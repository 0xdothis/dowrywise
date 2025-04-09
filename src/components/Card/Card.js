import styled from "styled-components/macro";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { QUERIES } from "../../constant";

function Card({
  tag,
  title,
  imgUrl,
  alt,
  description,
  buttonText,
  bgColor,
  color,
}) {
  return (
    <Wrapper
      style={{
        "--color-card-bg": bgColor,
        "--color-card": color ? color : undefined,
      }}
    >
      <ListWrapper>
        <Tag>{tag}</Tag>
        <Heading description={description}>{title}</Heading>
        <DescriptionText>{description}</DescriptionText>
        <Link>
          <CallToAction>{buttonText}</CallToAction>
          <Icon id="chevron-right" size={20} />
        </Link>
      </ListWrapper>
      <picture>
        <source
          type="image/avif"
          srcSet={`
        ${imgUrl.replace(".png", ".avif")} 1x,
        ${imgUrl.replace(".png", "@2x.avif")} 2x,
        ${imgUrl.replace(".png", "@3x.avif")} 3x

        `}
        />
        <ImgWrapper src={imgUrl} alt={alt} />
      </picture>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border-radius: 16px;
  margin-bottom: 24px;
  background-color: var(--color-card-bg);
  color: var(--color-card);
  overflow: hidden;

  &:last-child {
    margin-bottom: 0px;
  }

  @media ${QUERIES.tabletAndBigger} {
    &:nth-child(even) {
      margin-top: -60px;
      margin-bottom: 100px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const ListWrapper = styled.div`
  padding: 32px;
`;

const Tag = styled.span`
  display: block;
  text-transform: capitalize;
  font-size: 0.85rem;
  color: var(--color-accent-006);
  color: var(--color-card);
`;

const Heading = styled.h3`
  font-size: clamp(1.25rem, 0.697rem + 2.281vw, 1.5rem);
  margin-top: 8px;
  margin-bottom: ${(p) => !!p.description && "8px"};

  @media ${QUERIES.tabletAndBigger} {
    font-size: 1.15rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.75rem;
  }
`;
const DescriptionText = styled.p`
  font-size: 1rem;
  color: var(--color-primary-dark);
  color: var(--color-card);

  &::first-letter {
    text-transform: uppercase;
  }

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.95rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.5rem;
  }
`;

const ImgWrapper = styled.img`
  width: 100%;
  display: block;
`;

const Link = styled.a`
  display: flex;
  gap: 8px;
  color: var(--color-primary);
  color: var(--color-card);
  font-size: 0.8rem;
  padding: 16px;
  margin-left: -16px;

  @media ${QUERIES.tabletAndBigger} {
    font-size: 0.65rem;
  }

  @media ${QUERIES.laptopAndBigger} {
    font-size: 1.125rem;
  }
`;

const CallToAction = styled(UnstyledButton)`
  text-transform: uppercase;
`;
export default Card;
