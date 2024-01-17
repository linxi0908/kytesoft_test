import React from "react";
import styled from "styled-components";
import imageUrl from "../images/logo.png";
import Logo from "./logo/Logo";
import Menu from "./menu/Menu";
import Nav_button from "./nav_button/Nav_button";
const HeaderStyle = styled.div`
  width: 100%;
  margin: 0 auto !important;
  display: flex;
  position: relative;
  justify-content: space-between;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  font-family: "Poppins", sans-serif;
  font-family: "Rubik", sans-serif;
`;
export default function Header() {
  return (
    <HeaderStyle>
        <Logo src={imageUrl} />
        <Menu /> <Nav_button />
    </HeaderStyle>
  );
}
