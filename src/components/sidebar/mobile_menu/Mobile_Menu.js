import React from "react";
import styled from "styled-components";
import { AppContext } from "../../../AppContext";
import { useContext } from "react";
import { BsChevronDown } from "react-icons/bs";
const StyleMobileMenu = styled.div`
  .menu_box {
    z-index:4;
    align-items: center;
    font-weight: bold;
    color: var(--black);
    font-size: 16px;
    padding-left: 10px;
    padding-top: 15px;
    text-align: left;
    border-top: 1px solid var(--gray);
    :hover {
      color: var(--yellow);
    }
    .active .menu2 {
      display: block;
    }
  }
  .handle_li_second.active .menu3 {
    display: block;
  }
  .handle_li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    padding: 10px 0;
    cursor: pointer;
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
    margin-top: 10px;
    padding: 10px 15px;
    display: none;
    z-index: 3;
    background: var(--orange);
    border-radius: 10px;
    width: 250px;
    list-style: none;
    text-align: left;
    line-height: 35px;
    li {
      color: var(--black);
      font-weight: 500;
      .dropdown-btn svg {
        width: 12px;
        position: absolute;
        right: 35px;
      }
    }
  }
  .menu3 {
    display: none;
    background: var(--orange);
    z-index: 3;
    padding-left: 20px;
    li {
      color: var(--black);
      display: flex;
    }
  }
  @media (min-width: 990px){
        display: none;
  }
`;
export default function Mobile_Menu() {
  const { activeItem, activeSubItem, handleItemClick } = useContext(AppContext);
  return (
    <StyleMobileMenu>
      <div className="mobile-menu">
        <div className="menu_box">
          <li
            className={`handle_li ${activeItem === "home" ? "active" : ""}`}
            onClick={() => handleItemClick("home")}
          >
            Home
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>Home Page 01</li>
              <li>Home Page 02</li>
              <li>Home Page 03</li>
              <li>Home Page 04</li>
              <li>Home Page 05</li>
            </ul>
          </li>
          <li
            className={`handle_li ${activeItem === "property" ? "active" : ""}`}
            onClick={() => handleItemClick("property")}
          >
            Property
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li
                className={`handle_li_second ${
                  activeSubItem === "propertyList" ? "active" : ""
                }`}
                onClick={() => handleItemClick("property", "propertyList")}
              >
                Property List
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul
                  className={`menu3 ${
                    activeSubItem === "propertyList" ? "active" : ""
                  }`}
                >
                  <li>Property List</li>
                  <li>Property List Sidebar V1</li>
                  <li>Property List Sidebar V2</li>
                </ul>
              </li>
              <li
                className={`handle_li_second ${
                  activeSubItem === "propertyGrid" ? "active" : ""
                }`}
                onClick={() => handleItemClick("property", "propertyGrid")}
              >
                Property Grid
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul
                  className={`menu3 ${
                    activeSubItem === "propertyGrid" ? "active" : ""
                  }`}
                >
                  <li>Property Grid</li>
                  <li>Property Grid Sidebar V1</li>
                  <li>Property Grid Sidebar V2</li>
                </ul>
              </li>
              <li
                className={`handle_li_second ${
                  activeSubItem === "propertyDetail" ? "active" : ""
                }`}
                onClick={() => handleItemClick("property", "propertyDetail")}
              >
                Property Detail
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul
                  className={`menu3 ${
                    activeSubItem === "propertyDetail" ? "active" : ""
                  }`}
                >
                  <li>Property Detail V1</li>
                  <li>Property Detail V2</li>
                  <li>Property Detail V3</li>
                </ul>
              </li>
              <li className={`handle_li_second ${
                  activeSubItem === "propertyMap" ? "active" : ""
                }`}
                onClick={() => handleItemClick("property", "propertyMap")}>
                Property Map
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul className={`menu3 ${
                    activeSubItem === "propertyMap" ? "active" : ""
                  }`}>
                  <li>Property Half Map V1</li>
                  <li>Property Half Map V2</li>
                  <li>Property Half Map V3</li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            className={`handle_li ${activeItem === "page" ? "active" : ""}`}
            onClick={() => handleItemClick("page")}
          >
            Page
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>About Us</li>
              <li>Faq's</li>
              <li>Pricing</li>
              <li>Error</li>
              <li className={`handle_li_second ${
                  activeSubItem === "agents" ? "active" : ""
                }`}
                onClick={() => handleItemClick("page", "agents")}>
                Agents
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul className={`menu3 ${
                    activeSubItem === "agents" ? "active" : ""
                  }`}>
                  <li>Agents</li>
                  <li>Agents Details</li>
                  <li>Agents Sidebar V1</li>
                  <li>Agents Sidebar V2</li>
                </ul>
              </li>
              <li className={`handle_li_second ${
                  activeSubItem === "agencies" ? "active" : ""
                }`}
                onClick={() => handleItemClick("page", "agencies")}>
                Agencies
                <span className="dropdown-btn">
                  <BsChevronDown />
                </span>
                <ul className={`menu3 ${
                    activeSubItem === "agencies" ? "active" : ""
                  }`}>
                  <li>Agencies</li>
                  <li>Agencies Details</li>
                  <li>Agencies Sidebar V1</li>
                  <li>Agencies Sidebar V2</li>
                </ul>
              </li>
              <li>DashBoard</li>
            </ul>
          </li>
          <li
            className={`handle_li ${activeItem === "blog" ? "active" : ""}`}
            onClick={() => handleItemClick("blog")}
          >
            Blog
            <span>
              <BsChevronDown />
            </span>
            <ul className="menu2">
              <li>Blog List</li>
              <li>Blog Grid</li>
              <li>Blog Detail</li>
            </ul>
          </li>
          <li className="handle_li">Contact</li>
        </div>
      </div>
    </StyleMobileMenu>
  );
}
