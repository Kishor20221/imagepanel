import PropTypes from "prop-types";

import SliderComponent from "Components/Common/Slider";
import "Styles/Common/slider.css";

const SliderSection = ({ sliderVal, setSliderVal }) => {
  console.log("inside sliderVal:", sliderVal);
  return (
    <div>
      <div className="sliderlabel">
        Opacity ({Number(sliderVal).toFixed(2)})
      </div>
      <SliderComponent sliderVal={sliderVal} setSliderVal={setSliderVal} />
    </div>
  );
};

SliderSection.propTypes = {
  sliderVal: PropTypes.number,
  setSliderVal: PropTypes.func,
};

SliderSection.defaultProps = {
  sliderVal: 0,
  setSliderVal: () => {},
};

export default SliderSection;
