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
  .box1 {
    display: flex;
    justify-content: space-around;
    .row{
      display: flex;
      justify-content: space-around;
      width: 100%;
    }
    }
  .border_line {
    border-bottom: 1px solid var(--gray);
    padding: 5px 10px;
    margin: 0 auto;
    align-items: center;
  }
`;
export default function Select_Search() {
  return (
    <StyleSelectSearch>
      <Row>
        <div className="box1">
          <Row>
            <Col md={6} lg={3}>
              <Baths_Select />
            </Col>
            <Col md={6} lg={3}>
              <Beds_Select />
            </Col>
            <Col md={6} lg={3}>
              <Price_Widget />
            </Col>
            <Col md={6} lg={3}>
              <Size_Widget />
            </Col>
          </Row>
        </div>
        <div className="border_line"></div>
        <div className="box2">
          <Newsletter />
        </div>
      </Row>
    </StyleSelectSearch>
  );
}
