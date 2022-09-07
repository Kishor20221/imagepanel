import React from "react";
import PropTypes from "prop-types";

import "Styles/LeftSection/index.css";

const ImageCategory = ({ imageList = {}, setSelectedCategory }) => {
  const imageCategory = [];
  Object.keys(imageList).forEach((value) => {
    imageCategory.push(value);
  });

  return (
    <>
      <ul>
        {imageCategory &&
          imageCategory.map((val, index) => {
            return (
              <li
                key={`${val}-${index}`}
                onClick={() => setSelectedCategory(val)}
              >
                {val}
              </li>
            );
          })}
      </ul>
    </>
  );
};

ImageCategory.propTypes = {
  imageList: PropTypes.object,
  setSelectedCategory: PropTypes.func,
};

ImageCategory.defaultProps = {
  imageList: {},
  setSelectedCategory: () => {},
};

export default ImageCategory;
