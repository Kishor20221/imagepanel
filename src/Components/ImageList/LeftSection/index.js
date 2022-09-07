import PropTypes from "prop-types";

import ImageCategory from "Components/ImageList/LeftSection/ImageCategory";
import Slider from "Components/ImageList/LeftSection/Slider";
import "Styles/ImageList/index.css";

const LeftSection = ({
  imageList = {},
  setSelectedCategory,
  selectedCategory,
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
        <Slider />
      </div>
    </>
  );
};

LeftSection.propTypes = {
  imageList: PropTypes.object,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

LeftSection.defaultProps = {
  imageList: {},
  selectedCategory: "",
  setSelectedCategory: () => {},
};

export default LeftSection;
