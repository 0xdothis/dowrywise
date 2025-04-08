import React from "react";

import styled from "styled-components/macro";

import {
  Twitter,
  Facebook,
  Youtube,
  ChevronDown,
  Menu,
  X,
  ChevronRight,
} from "react-feather";

const icons = {
  twitter: Twitter,
  facebook: Facebook,
  youtube: Youtube,
  menu: Menu,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  close: X,
};

function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;

export default Icon;
