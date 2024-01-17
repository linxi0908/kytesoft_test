import styled from "styled-components";
import { React, useState } from "react";

const StyleSelect = styled.div`
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
      <select value={selectedOption} onChange={handleSelectChange}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        ))}
      </select>
    </StyleSelect>
  );
}
