import React from "react";
import PropTypes from "prop-types";

import "Styles/Common/image.css";

const ImageComponent = ({
  imageURL,
  imageHeight = "100px",
  imageWidth = "100px",
  imageText = "",
}) => {
  return (
    <div
      className="imagestyle"
      //   style={{ "--imageHeight": imageHeight, "--imageWidth": imageWidth }}
    >
      <img src={imageURL} width={imageHeight} height={imageWidth} />
      <div>{imageText}</div>
    </div>
  );
};

ImageComponent.propTypes = {
  imageURL: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  imageText: PropTypes.string,
};

ImageComponent.defaultProps = {
  imageURL: "",
  imageHeight: "100px",
  imageWidth: "100px",
  imageText: "",
};

export default ImageComponent;
