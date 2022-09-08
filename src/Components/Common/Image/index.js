import PropTypes from "prop-types";

import "Styles/Common/image.css";

const ImageComponent = ({ imageURL, imageText = "", opacity = 1 }) => (
  <>
    <div>
      <img
        src={imageURL}
        className="imagestyle"
        style={{ "--opacity": opacity }}
      />
    </div>
    <div className="imagetext">{imageText}</div>
  </>
);

ImageComponent.propTypes = {
  imageURL: PropTypes.string,
  imageText: PropTypes.string,
  opacity: PropTypes.number,
};

ImageComponent.defaultProps = {
  imageURL: "",
  imageText: "",
  opacity: 1,
};

export default ImageComponent;
