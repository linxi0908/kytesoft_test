import React from 'react';
import styled from "styled-components";
import { BsPersonLock } from "react-icons/bs";
const StyleLoginRegister = styled.div`
    display:flex;
    margin-right:20px;
    font-family: 'Poppins', sans-serif;
    font-family: 'Rubik', sans-serif;
    font-size: 15px;
    font-weight: 500;
    .icon-login {
        padding-right: 2px;
    }
    .icon-login svg {
        width:25px;
        height:22px;
        color: var(--black);
    }
    .login{
        padding-left: 2px;
        a{
            text-decoration:none;
            color: var(--black);
        }
        :hover{
            color: var(--yellow);
        }
    }
`;
export default function Login_Register(){
    return (
        <StyleLoginRegister>
            <div className="icon-login"><BsPersonLock />
                </div>
                 <div className="login"> <a href="#">Login</a></div>
        </StyleLoginRegister>
    );
}