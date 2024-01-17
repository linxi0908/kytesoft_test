import React from "react";
import styled from "styled-components";
import Select from "../../select/Select";

const StylePropertySelect = styled.div`
`;
export default function Property_Select() {
    const options = [
        { value: "propertytype", label: "Property Type" },
        { value: "bungalow", label: "Bungalow" },
        { value: "apartment", label: "Apartment" },
        { value: "house", label: "House" },
      ];
      const handleSelectChange = () => {
        
      };
  return (
    <StylePropertySelect>
      <Select options={options} onChange={handleSelectChange}/>
    </StylePropertySelect>
  );
}
