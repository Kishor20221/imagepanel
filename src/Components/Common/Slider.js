import PropTypes from "prop-types";

import "Styles/Common/slider.css";

const Slider = ({ sliderVal, setSliderVal }) => {
  console.log("sliderVal:", sliderVal);
  return (
    <>
      <div className="sliderlabel">
        Opacity ({Number(sliderVal).toFixed(2)})
      </div>
      <input
        data-testid="slider"
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={Number(sliderVal)}
        onChange={(e) => {
          setSliderVal(e.target.value);
        }}
      />
    </>
  );
};

Slider.propTypes = {
  sliderVal: PropTypes.number,
  setSliderVal: PropTypes.func,
};

Slider.defaultProps = {
  sliderVal: 0,
  setSliderVal: () => {},
};

export default Slider;
