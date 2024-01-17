import React from "react";
import styled, { keyframes } from "styled-components";
import { TbHomeDollar } from "react-icons/tb";
import { animated } from "@react-spring/web";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
const StyleButton = styled.div`
  height: 50px;
  background: var(--yellow);
  border-radius: 10px;
  justify-content: center;
  padding: 12px 10px;
  color: var(--white);
  margin-top: 8px;
  cursor: pointer;
  display:flex;
  a {
    text-align: center;
    text-decoration: none;
    color: var(--black);
    padding-left: 10px;
    color: var(--white);
    font-family: "Poppins", sans-serif;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    border: none;
  }
  svg {
    width: 35px;
    height: 25px;
  }
  span {
    opacity: 0.3;
  }
`;
export default function Button_sell() {
const { animationProps, handleMouseEnter, handleMouseLeave} = useContext(AppContext);
        

  return (
    <StyleButton onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <animated.div style={animationProps}>
        <TbHomeDollar />
      </animated.div>
      <span>|</span> <a href="#">Sell Property</a>
    </StyleButton>
  );
}
