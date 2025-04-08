export const COLORS = {
  primary: { normal: "215deg 100% 48%", dark: "216deg 96% 21%" },
  secondary: "0 100% 95%",
  white: "0deg 0% 97%",
  accents: {
    1: "228deg 86% 94%",
    2: "37deg 87% 91%",
    3: "198deg 100% 94%",
    4: "342deg 71% 97%",
    5: "228deg 45% 96%",
    6: "216deg 23% 53%",
  },
  bg: "0deg 0% 96%",
  black: "0deg 0% 13%",
  text: "0deg 0% 27%",
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 750,
  laptop: 1300,
};

export const QUERIES = {
  tabletAndBigger: `(min-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndBigger: `(min-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const WEIGHTS = {
  normal: 400,
  medium: 500,
  bold: 700,
  black: 900,
};
