import PropTypes from "prop-types";

import ImageCategory from "Components/ImageList/LeftSection/ImageCategory";
import Slider from "Components/ImageList/LeftSection/Slider";
import "Styles/ImageList/index.css";

const LeftSection = ({ imageList = {} }) => {
  return (
    <>
      <div className="lefttopsidemenu">
        <ImageCategory imageList={imageList} />
      </div>
      <div className="leftbottomslider">
        <Slider />
      </div>
    </>
  );
};

LeftSection.propTypes = {
  imageList: PropTypes.object,
};

LeftSection.defaultProps = {
  imageList: {},
};

export default LeftSection;
