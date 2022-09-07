import React from "react";
import PropTypes from "prop-types";

import "Styles/LeftSection/index.css";

const ImageCategory = ({
  imageList = {},
  setSelectedCategory,
  selectedCategory,
}) => {
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
                onClick={() =>
                  setSelectedCategory((prevState) => {
                    if (prevState === val) return "";
                    return val;
                  })
                }
                className={selectedCategory === val ? "active" : null}
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
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};

ImageCategory.defaultProps = {
  imageList: {},
  selectedCategory: "",
  setSelectedCategory: () => {},
};

export default ImageCategory;
