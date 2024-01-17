import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { RiMailSendLine } from "react-icons/ri";
const StyleMobileContact = styled.div`
  border-top: 1px solid var(--gray);
  .row {
    padding: 0px !important;
    border-top: 1px solid var(--gray);
    h4 {
      font-size: 18px;
      text-align: left;
      font-weight: bold;
      padding-top: 10px;
    }
    .box {
        padding-top: 10px;
      display: flex;
      .icon {
        margin-right: 10px;
        width: 50px;
        svg {
          width: 40px;
          height: 40px;
          color: var(--gray);
        }
      }
    }
    .detail{
        align-items: center;
        h5{
            font-size:15px;
            text-align: left;
            color: #777;
        }
        p{
            font-size:15px;
            line-height: 13px;
            text-align: left;
            font-weight: bold;
        }
    }
  }
`;
export default function Mobile_Contact() {
  return (
    <StyleMobileContact>
      <Row>
      <h4>Contact</h4>
        <div className="box">
          <div className="icon">
            <LiaPhoneVolumeSolid />
          </div>
          <div className="detail">
            <h5>Call us:</h5>
            <p>(201) 555-0124</p>
          </div>
        </div>
      </Row>
      <Row>
        <div className="box">
          <div className="icon">
            <RiMailSendLine />
          </div>
          <div className="detail">
            <h5>Email:</h5>
            <p>themesflat@gmail.com</p>
          </div>
        </div>
      </Row>
    </StyleMobileContact>
  );
}
