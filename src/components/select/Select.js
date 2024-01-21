import styled from "styled-components";
import { React, useState } from "react";
import { Form } from "react-bootstrap";

const StyleSelect = styled.div`
  select{
    padding: 10px;
    margin: 5px;
    width: 100%;
    border-radius: 10px;
  }
  option {
    cursor: pointer !important;
    font-weight: 400;
    line-height: 40px;
    min-height: 10px !important;
    outline: none;
    padding-left: 18px;
    padding-right: 29px;
    text-align: left;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    
  }
  option:active {
    color: var(--yellow);
  }
`;
export default function Select({ options, onChange }) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
      const value = event.target.value;
      setSelectedOption(value);
      onChange(value);
    };
  return (
    <StyleSelect>
      <Form.Select aria-label="Default select example" value={selectedOption} onChange={handleSelectChange}>
      {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
            ))}
    </Form.Select>
    </StyleSelect>
  );
}
