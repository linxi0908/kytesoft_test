import React, { useState } from "react";
import styled from "styled-components";
import Drag_Widget from "../../drag_widget/Drag_Widget";

const StylePriceWidget = styled.div``;

export default function Price_Widget() {
  const [priceRange, setPriceRange] = useState([100, 1000000]);

  const handleRangeChange = (minValue, maxValue) => {
    setPriceRange([minValue, maxValue]);
  };

  return (
    <StylePriceWidget>
      <Drag_Widget
        type="Form"
        range={priceRange}
        minValue={100}
        maxValue={1000000}
        onRangeChange={handleRangeChange}
      />
    </StylePriceWidget>
  );
}
