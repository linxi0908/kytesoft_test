import React from 'react';
import styled from "styled-components";
const StyledLogo = styled.div`
box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  img {
  width: 200px;
  padding: 10px;
  }
`;

export default function Logo({ src }) {
  return (
    <StyledLogo>
      <img src={src} alt="logo" />
    </StyledLogo>
  );
}
