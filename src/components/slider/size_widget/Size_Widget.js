import React, { useState } from "react";
import styled from "styled-components";
import Drag_Widget from "../../drag_widget/Drag_Widget";

const StyleSizeWidget = styled.div``;

export default function Size_Widget() {
  const [priceRange, setPriceRange] = useState([0, 50000000]);

  const handleRangeChange = (minValue, maxValue) => {
    setPriceRange([minValue, maxValue]);
  };

  return (
    <StyleSizeWidget>
      <Drag_Widget
        type="Size"
        minValue={0}
        maxValue={50000}
        range={priceRange}
        onRangeChange={handleRangeChange}
      />
    </StyleSizeWidget>
  );
}
