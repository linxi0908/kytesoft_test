import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../../../AppContext";
const StyleToggle = styled.div`
    display: none;
    z-index: 2;
    padding: 0px 15px;
    margin-top:20px;
  .pressdrop {
    padding: 5px 5px;
    cursor: pointer;
    background-color: unset;
    border: none;
    .burger {
      position: relative;
      width: 25px;
      height: 20px;
      background: transparent;
      cursor: pointer;
      display: block;
      input {
        display: none;
      }
      }
      span {
        display: block;
        position: absolute;
        height: 2.5px;
        width: 100%;
        background:var(--yellow);
        border-radius: 10px;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: 0.25s ease-in-out;
      }
        span:nth-of-type(1) {
          top: 0px;
          transform-origin: left center;
        }
        span:nth-of-type(2) {
          top: 50%;
          transform: translateY(-50%);
          transform-origin: left center;
        }
        span:nth-of-type(3) {
          top: 100%;
          transform-origin: left center;
          transform: translateY(-100%);
        }
    }
    @media (max-width: 990px){
        display: block;
    }
`;
export default function Toggle() {
  const { toggle, handle_toggle } = useContext(AppContext);
  return (
    <StyleToggle>
      <button className="pressdrop">
        <label className="burger" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={!toggle}
            onChange={handle_toggle}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
    </StyleToggle>
  );
}
