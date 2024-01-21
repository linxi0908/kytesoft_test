import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

const StyleNewletter = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 0 !important;
  width: 100% !important;
  padding: 20px 5px;
  .row{
    display: flex;
    justify-content: space-around;
    width: 100% !important;
  }
  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
      margin: 8px;
      width: 18px;
      height: 18px;
      
    }
    input:checked {
    background-color: #FFA920;
    border: 1px solid #FFA920;
  }
  }
`;
export default function Newsletter() {
  return (
    <StyleNewletter>
      <Row>
        <Col xs={6} sm={6} md={6} lg={3}>
          <div className="form-group">
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Swimming pool</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Garage</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Alarm system</span>
            </label>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <div className="form-group">
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Balcony</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Outdoor area</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Broadband</span>
            </label>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <div className="form-group">
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Ensuite</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Built in robes</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Gym</span>
            </label>
          </div>
        </Col>
        <Col xs={6} sm={6} md={6} lg={3}>
          <div className="form-group">
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Tenis court</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Study</span>
            </label>
            <label>
              <input name="newsletter" type="checkbox" />
              <span className="fs-13">Outdoor spa</span>
            </label>
          </div>
        </Col>
      </Row>
    </StyleNewletter>
  );
}
