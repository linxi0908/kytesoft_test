import React from 'react';
import styled from "styled-components";
import Button_Sell from '../button_sell/Button_Sell';
import Login from '../login_register/Login_Register';
import Toggle from '../toggle/Toggle';
const StyleNavButton = styled.div`
    display: flex;
    padding-right: 20px;
    justify-content: flex-end;

    @media (max-width: 767px) {
    #custom-button {
      display: none;
    }
  }
`;
export default function Nav_button (){
    return(
        <StyleNavButton>
            <Login/>
            <div id="custom-button"><Button_Sell /></div>
            <Toggle />
        </StyleNavButton>
    );
}