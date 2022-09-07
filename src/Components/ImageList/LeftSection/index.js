import PropTypes from "prop-types";

import ImageCategory from "Components/ImageList/LeftSection/ImageCategory";
import Slider from "Components/ImageList/LeftSection/Slider";
import "Styles/ImageList/index.css";

const LeftSection = ({ imageList = {}, setSelectedCategory }) => {
  return (
    <>
      <div className="lefttopsidemenu">
        <ImageCategory
          imageList={imageList}
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
  setSelectedCategory: PropTypes.func,
};

LeftSection.defaultProps = {
  imageList: {},
  setSelectedCategory: () => {},
};

export default LeftSection;
