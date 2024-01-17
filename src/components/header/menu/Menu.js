import React from "react";
import styled from "styled-components";
import { BsChevronDown, BsChevronRight } from "react-icons/bs";
import { GoArrowDownRight } from "react-icons/go";
const StyledMenu = styled.div`
  .handle_ul {
    display: flex;
    align-items: center;
    font-weight: bold;
    color: var(--black);
    margin-bottom: 0px;
    font-size: 16px;
    padding-bottom: 1px;
    :hover {
      color: var(--yellow);
    }
    :hover .menu2 {
      display: block;
    }
    
  }

  .handle_li {
    list-style: none;
    padding: 20px 0;
    margin-right: 25px;
    cursor: pointer;
    font-weight: bold;
    color: var(--black);
    span svg {
      width: 12px;
      margin: 5px;
      font-weight: bold;
    }
    
  }
  .handle_li.active {
      color: var(--yellow);
  }

  .menu2 {
    position: fixed;
    margin-top: 5px;
    padding-top: 5px;
    padding-left: 30px;
    top: 64px;
    display: none;
    z-index: 3;
    background: var(--white);
    width: 250px;
    list-style: none;
    text-align: left;
    line-height: 39px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    :hover .menu3 {
      display: block;
    }
    :hover .dropdown-detail svg {
      display: block;
    }
    li {
      color: var(--black);
      display: flex;
      padding: 3px 0;
      .dropdown-detail svg {
        width: 20px;
        height: 20px;
        display: none;
        margin-right: 10px;
      }
      .dropdown-btn svg{
        width: 12px;
        position: absolute;
        right: 20px;
        font-weight: bold;
      }
    }
  }

  .menu3 {
    display: none;
    position: absolute;
    background: var(--white);
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    left: 225px;
    width: 270px;
    padding-top: 5px;
    padding-bottom: 5px;
    li{
      color: var(--black);
      display: flex;
      padding: 3px 0;
      .dropdown-detail-second svg {
        width: 20px;
        height: 20px;
        display: none;
        margin-right: 10px;
      }
    }
    :hover .dropdown-detail-second svg {
      display: block;
    }
  }
  @media (max-width: 990px){
        display: none;
    }
  @media (min-width: 990px) and (max-width: 1067px){
    .handle_li{
          margin-right: 5px;
    }
  }
`;

export default function Menu() {
  return (
    <StyledMenu>
      <div className="menu">
        <ul className="handle_ul">
          <li className="handle_li active" >
            Home
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Home Page 01
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Home Page 02
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Home Page 03
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Home Page 04
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Home Page 05
              </li>
            </ul>
          </li>
          <li className="handle_li">
            Property
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Property List{" "}
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Property List
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Property List Sidebar V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Property List Sidebar V2
                  </li>
                </ul>
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>
                Property Grid
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Grid
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Grid Sidebar V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Grid Sidebar V2
                  </li>
                </ul>
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>
                Property Detail{" "}
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Detail V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Detail V2
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Detail V3
                  </li>
                </ul>
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>
                Property Map{" "}
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Half Map V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Half Map V2
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>
                    Property Half Map V3
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="handle_li">
            Page
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                About Us
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Faq's
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Pricing
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Error
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Agents{" "}
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second"> <GoArrowDownRight /></span> Agents
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agents Details
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agents Sidebar V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agents Sidebar V2
                  </li>
                </ul>
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Agencies{" "}
                <span className="dropdown-btn">
                  <BsChevronRight />
                </span>
                <ul className="menu3">
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agencies
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agencies Details
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agencies Sidebar V1
                  </li>
                  <li>
                    <span className="dropdown-detail-second">
                      <GoArrowDownRight />
                    </span>{" "}
                    Agencies Sidebar V2
                  </li>
                </ul>
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                DashBoard
              </li>
            </ul>
          </li>
          <li className="handle_li">
            Blog
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Blog List
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Blog Grid
              </li>
              <li>
                <span className="dropdown-detail">
                  <GoArrowDownRight />
                </span>{" "}
                Blog Detail
              </li>
            </ul>
          </li>
          <li className="handle_li">Contact</li>
        </ul>
      </div>
    </StyledMenu>
  );
}
