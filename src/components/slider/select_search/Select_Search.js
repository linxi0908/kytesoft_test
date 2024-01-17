import React from "react";
import styled from "styled-components";
import Baths_Select from "../baths_select/Baths_Select";
import Beds_Select from "../beds_select/Beds_Select";
import Price_Widget from "../price_widget/Price_Widget";
import Size_Widget from "../size_widget/Size_Widget";
import { Col, Row } from "react-bootstrap";
import Newsletter from "../newsletter/Newletter";
const StyleSelectSearch = styled.div`
  display: flex;
  position: relative;
  z-index: 3;
  .box1 {
    display: flex;
  }
  .border_line{
    border-bottom: 1px solid var(--gray);
    padding: 5px 0px;
    margin: 0 20px;
    align-items: center;
  }
`;
export default function Select_Search() {
  return (
    <StyleSelectSearch>
      <Row>
        <div className="box1">
          <Col>
            <Row>
              <Col>
                <Baths_Select />
              </Col>
              <Col>
                <Beds_Select />
              </Col>
            </Row>
          </Col>
          <Row>
            <Col>
            <Price_Widget />
            </Col>
            <Col>
            <Size_Widget />
            </Col>
          </Row>
        </div>
        <div className="border_line"></div>
        <div className="box2">
            <Newsletter/>
        </div>
      </Row>
    </StyleSelectSearch>
  );
}
