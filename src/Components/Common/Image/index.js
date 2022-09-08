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
    <div
      className="imagestyle"
      //   style={{ "--imageHeight": imageHeight, "--imageWidth": imageWidth }}
    >
      <img
        src={imageURL}
        width={imageHeight}
        height={imageWidth}
        className="imageopacity"
        style={{ "--opacity": opacity }}
      />
      <div>{imageText}</div>
    </div>
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
