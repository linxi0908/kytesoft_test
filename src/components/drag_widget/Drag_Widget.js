import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const StyleDragWidget = styled.div`
  .wg-box3 {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .widget .caption {
    justify-content: space-between;
    align-items: center;
    display: flex;
  }

  .widget .caption span {
    margin-right: 10px;
  }

  .noUi-target {
    width: 100%;
    height: 7px;
    border-radius: 2px;
  }

  .noUi-connect {
    background: var(--yellow);
    -webkit-transition: background 450ms;
    transition: background 450ms;
  }

  .noUi-origin {
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
  }

  .noUi-background {
    background: #d6d7d9;
  }

  .slider-range {
    height: 10px;
    margin-bottom: 20px;
  }

  .slider-labels {
    display: flex;
    justify-content: space-between;
  }

  .slider-labels input {
    display: block;
  }

  .slider-labels input[type="hidden"] {
    display: none;
  }
`;

export default function Drag_Widget({ minValue, maxValue, range, onRangeChange, type }) {
  const sliderRef = useRef(null);

  const formatValue = (value) => {
    const formattedValue = `${value.toLocaleString()}`;
    return formattedValue;
  };

  useEffect(() => {
    const slider = noUiSlider.create(sliderRef.current, {
        start: range,
        connect: true,
        range: {
          min: minValue,
          max: maxValue,
        },
        format: {
          to: (value) => formatValue(parseFloat(value)),
          from: (value) => parseFloat(value.replace("$", "").replace(",", "")),
        },
      });

    slider.on("update", (values) => {
      const [minValue, maxValue] = values;
      onRangeChange(minValue, maxValue);
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <StyleDragWidget>
      <div className="form-group wg-box3">
        <div className="widget widget-price">
          <div className="caption flex-two">
            <div>
              <span className="fw-6">{type}</span>
              <span id="slider-range-value1">{range[0]}</span>
              <span id="slider-range-value2">{range[1]}</span>
            </div>
          </div>
          <div ref={sliderRef} className="slider-range"></div>
          <div className="slider-labels">
            <div>
              <input type="hidden" name="min-value" value={range[0]} />
              <input type="hidden" name="max-value" value={range[1]} />
            </div>
          </div>
        </div>
      </div>
    </StyleDragWidget>
  );
}