import { createGlobalStyle } from "styled-components/macro";
import { COLORS } from "../../constant";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.
  */
  isolation: isolate;
}

html {
/* Colors */
--color-primary: hsl(${COLORS.primary.normal});
--color-primary-dark: hsl(${COLORS.primary.dark});
--color-secondary: hsl(${COLORS.secondary});
--color-bg: hsl(${COLORS.bg});
--color-black: hsl(${COLORS.black});
--color-text: hsl(${COLORS.text});
--color-white: hsl(${COLORS.white});
--color-accent-001: hsl(${COLORS.accents[1]});
--color-accent-002: hsl(${COLORS.accents[2]});
--color-accent-003: hsl(${COLORS.accents[3]});
--color-accent-004: hsl(${COLORS.accents[4]});
--color-accent-005: hsl(${COLORS.accents[5]});
--color-accent-006: hsl(${COLORS.accents[6]});
--color-backdrop: hsl(${COLORS.black} / 0.6);

font-family: Tahoma;


  /*
    Silence the warning about missing Reach Dialog styles
  */
  --reach-dialog: 1;
}

html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
