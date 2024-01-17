import React from "react";
import styled from "styled-components";
import Select from "../../select/Select";

const StyleLocationSelect = styled.div`
`;
export default function Location_Select() {
    const options = [
        { value: "location", label: "Location" },
        { value: "japan", label: "Japan" },
        { value: "america", label: "America" },
        { value: "england", label: "England" },
        { value: "belgium", label: "Belgium" },
        { value: "france", label: "France" },
        { value: "vietnam", label: "VietNam" },
      ];
      const handleSelectChange = () => {
        
      };
  return (
    <StyleLocationSelect>
      <Select options={options} onChange={handleSelectChange}/>
    </StyleLocationSelect>
  );
}
