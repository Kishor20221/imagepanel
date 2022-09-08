import PropTypes from "prop-types";

import ImageCategory from "Components/ImageList/LeftSection/ImageCategory";
import Slider from "Components/ImageList/LeftSection/SliderSection";
import "Styles/ImageList/index.css";

const LeftSection = ({
  imageList = {},
  setSelectedCategory,
  selectedCategory,
  sliderVal,
  setSliderVal,
}) => {
  return (
    <>
      <div className="lefttopsidemenu">
        <ImageCategory
          imageList={imageList}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className="leftbottomslider">
        <Slider sliderVal={sliderVal} setSliderVal={setSliderVal} />
      </div>
    </>
  );
};

LeftSection.propTypes = {
  imageList: PropTypes.object,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  sliderVal: PropTypes.number,
  setSliderVal: PropTypes.func,
};

LeftSection.defaultProps = {
  imageList: {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  sliderVal: 1,
  setSliderVal: () => {},
};

export default LeftSection;
