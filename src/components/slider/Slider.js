import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";
import img_Slider from "../images/bg-slider-1.png";
import slider from "../images/slider-1.png";
import Property_Select from "./property_select/Property_Select";
import Location_Select from "./location_select/Location_Select";
import Select_Search from "./select_search/Select_Search";
import { HiOutlineAdjustmentsVertical } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
const StyleSlider = styled.section`
  position: relative;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  .slide_item {
     position: relative;
    .img_slider {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      img {
        transform: scale(1);
        vertical-align: middle;
      }
    }
    .container {
      position: relative;
      display: flex;
    }

    .flat_tabs{
      position: absolute;
      left: 0;
      margin-right: 50px;
    }
    .find_select{
      display: flex;
      justify-content: space-around;
      background-color: var(--white);
      width: 100% !important;
      border-radius: 10px;
      margin-bottom: 20px;
      padding: 15px 10px;
      .inner_group{
        display: flex;
      }
    }
    .find_select_search{
      width: 100% !important;
      background-color: var(--white);
      border-radius: 10px;
      padding: 20px;
    }
    .col{
      display:flex;
    }

    .images{
      width: 46%;
    }
  }
`;
export default function Slider() {
  return (
    <StyleSlider className="slider">
      <div className="slide_item">
        <div className="img_slider">
          <img className="img_item" src={img_Slider} />
        </div>
        <div className="container">
          <Row >
            <Col>
              <div className="content">
                <div className="heading">
                  <h1>We will find a perfect home for you</h1>
                  <p>
                    Find a variety of properties that suit you very easily,
                    forget all difficulties in finding a residence for you
                  </p>
                </div>
                <div className="flat_tabs">
                  <div className="box_tab">
                    <ul className="menu_tab">
                      <li className="item_title">
                        <h4 className="inner">Rent</h4>
                      </li>
                      <li className="item_title">
                        <h4 className="inner">Buy</h4>
                      </li>
                    </ul>
                  </div>
                  <div className="content_tab">
                    <div className="content-inner">
                      <div className="form">
                        <form method="">
                          <div className="find_select">
                            <div className="inner_group">
                              <div className="form_group">
                                <input
                                  type="search"
                                  className="search-field"
                                  placeholder="Type keyword..."
                                  title="Search for"
                                  required
                                ></input>
                              </div>
                              <div className="form_group">
                                <div className="group_select">
                                  <Property_Select />
                                </div>
                              </div>
                              <div className="form_group">
                                <Location_Select />
                              </div>
                            </div>
                            <div className="form_group">
                              <a href="#" className="btn"><HiOutlineAdjustmentsVertical /></a>
                            </div>
                            <div className="btn_search">
                            <a href="#" className="btn"><span>Search now</span><IoMdSearch /></a>
                            </div>
                          </div>
                          <div className="find_select_search">
                            <Select_Search/>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="themes_count"></div>
              </div>
              <div className="images">
                <div className="images">
                  <img className="img_item" src={slider} />
                </div>
              </div>
              <div className="curved_group"></div>
            </Col>
          </Row>
        </div>
      </div>
    </StyleSlider>
  );
}
