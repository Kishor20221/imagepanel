import React from "react";
import PropTypes from "prop-types";

import "Styles/LeftSection/index.css";

const ImageCategory = ({ imageList = {} }) => {
  const imageCategory = [];
  Object.keys(imageList).forEach((value) => {
    imageCategory.push(value);
  });

  return (
    <>
      <ul>
        {imageCategory &&
          imageCategory.map((val, index) => {
            return <li key={`${val}-${index}`}>{val}</li>;
          })}
      </ul>
    </>
  );
};

ImageCategory.propTypes = {
  imageList: PropTypes.object,
};

ImageCategory.defaultProps = {
  imageList: {},
};

export default ImageCategory;
