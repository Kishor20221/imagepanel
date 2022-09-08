import React from "react";
import PropTypes from "prop-types";

import "Styles/Common/image.css";

const ImageComponent = ({
  imageURL,
  imageHeight = "100px",
  imageWidth = "100px",
  imageText = "",
  opacity = 1,
}) => {
  return (
    <>
      <div>
        <img
          src={imageURL}
          className="imagestyle"
          style={{ "--opacity": opacity }}
        />
      </div>
      <div>{imageText}</div>
    </>
  );
};

ImageComponent.propTypes = {
  imageURL: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  imageText: PropTypes.string,
  opacity: PropTypes.number,
};

ImageComponent.defaultProps = {
  imageURL: "",
  imageHeight: "100px",
  imageWidth: "100px",
  imageText: "",
  opacity: 1,
};

export default ImageComponent;
