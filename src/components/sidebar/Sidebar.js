import React from "react";
import styled from "styled-components";
import Logo from "../header/logo/Logo";
import imageUrl from "../images/logo.png";
import Mobile_Login_Register from "./mobile_login_register/Mobile_Login_Register";
import Mobile_Menu from "./mobile_menu/Mobile_Menu";
import { Row } from "react-bootstrap";
import { AppContext } from "../../AppContext";
import { useContext } from "react";
import Button_Sell from "../header/button_sell/Button_Sell";
import Mobile_Contact from "./mobile_contact/Mobile_Contact";
const StyleSidebar = styled.div`
  .container {
    max-width: 300px;
    position: fixed;
    z-index: 3;
    left: 0;
    overflow-y: scroll;
    top: 0;
    padding: 0;
    height: 100%;
    background-color: var(--white);
    .row {
      padding: 10px 10px;
      margin: 0 auto;
      max-width: 300px;
      .custom-button {
        padding: 14px 3px 5px;
        border-top: 1px solid var(--gray);
      }
    }
  }
  .container::-webkit-scrollbar {
    width: 15px;
  }
  .container::-webkit-scrollbar-track {
    background-color: var(--gray);
  }
  .container::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background: #87858582;
  }
  .left_side {
    width: 300px;
    position: fixed;
    z-index: 4;
    top: 0;
    height: 100vh;
    padding: 0;
    transform: translateX(-100%);
    transition: 1s;
  }
  .left_side.active {
    transform: translateX(0%) ;
    transition: 1s;
  }
  #bar1 {
    transform: translateY(15px) rotate(-45deg);
    z-index: 5;
  }
  #bar2 {
    transform: translateY(13px) rotate(45deg);
    z-index: 5;
  }
  .back_drop {
    background: #00000087;
    width: 100%;
    position: fixed;
    z-index: 4;
    top: 0;
    height: 100vh;
    transform: translateX(-100%) ;
    transition: 0.05s;
    .toggle {
      position: fixed;
      right: 37px;
      top: 5px;
      width: 30px;
      height: 30px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 5;
    }
    .bars {
      width: 100%;
      height: 2px;
      background: var(--white);
      z-index: 5;
    }
  }
  .back_drop.active {
    transform: translateX(0%);
    transition: 0.05s;
  }
  @media (max-width: 990px) {
    display: block;
  }
`;
export default function Sidebar() {
  const { toggle, handle_toggle } = useContext(AppContext);
  return (
    <StyleSidebar>
      <div className={`back_drop ${toggle ? "active" : ""}`}>
        <label className="toggle" onClick={handle_toggle}>
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
        </label>
      </div>
      <div className={`left_side ${toggle ? "active" : ""}`}>
        <div className="container">
          <Row>
            <Logo src={imageUrl} />
          </Row>
          <Row>
            <Mobile_Login_Register />
          </Row>
          <Row>
            <Mobile_Menu />
          </Row>
          <Row>
            <div className="custom-button">
              <Button_Sell />
            </div>
          </Row>
          <Row>
            <Mobile_Contact />
          </Row>
        </div>
      </div>
    </StyleSidebar>
  );
}
