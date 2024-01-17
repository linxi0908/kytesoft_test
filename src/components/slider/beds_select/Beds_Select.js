import React from "react";
import styled from "styled-components";
import Select from "../../select/Select";

const StyleBedsSelect = styled.div`
`;
export default function Beds_Select() {
    const options = [
        { value: "any", label: "Beds: Any" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5", label: "5" },
        { value: "6", label: "6" },
        { value: "7", label: "7" },
        { value: "8", label: "8" },
        { value: "9", label: "9" },
        { value: "10", label: "10" },
      ];
      const handleSelectChange = () => {
        
      };
  return (
    <StyleBedsSelect>
      <Select options={options} onChange={handleSelectChange}/>
    </StyleBedsSelect>
  );
}