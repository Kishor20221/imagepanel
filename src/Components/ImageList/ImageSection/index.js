import PropTypes from "prop-types";

import ImageComponent from "Components/Common/Image";
import "Styles/ImageList/index.css";
import "Styles/Common/image.css";

const ImageSection = ({ sliderVal = 1, imageArray = [] }) => {
  return (
    <div className="imageFlex">
      {imageArray.length === 0 ? (
        <span> No Search Found </span>
      ) : (
        imageArray &&
        imageArray.map((val, index) => {
          const { image, text } = val || {};
          return (
            <div
              key={`${val.text}-${index}`}
              className="imageparent"
              style={{ "--imageWidth": "25%" }}
            >
              <ImageComponent
                imageURL={image}
                imageText={text}
                opacity={sliderVal}
              />
            </div>
          );
        })
      )}
    </div>
  );
};

ImageSection.propTypes = {
  imageList: PropTypes.object,
  sliderVal: PropTypes.number,
};

ImageSection.defaultProps = {
  imageList: {},
  sliderVal: 1,
};

export default ImageSection;
