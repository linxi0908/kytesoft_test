import React from "react";
import styled from "styled-components";
import { BsPersonLock } from "react-icons/bs";
const StyleLogin = styled.div`
    display:flex;
    margin-top:20px;
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
    .register{
        padding-right:2px;
        a{
            text-decoration:none;
            color: var(--black);
        }
        :hover{
            color: var(--yellow);
        }
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
    @media (max-width: 768px) {
        .register {
        display: none;
        }
    }
`;
export default function Login(){
    return (
        <StyleLogin>
                <div className="icon-login"><BsPersonLock />
                </div> <div className="register"><a href="#">Register <span>/</span></a> </div>
                 <div className="login"> <a href="#">Login</a></div>
        </StyleLogin>
    );
}