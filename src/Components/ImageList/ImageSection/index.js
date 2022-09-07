import PropTypes from "prop-types";

import ImageComponent from "Components/Common/Image";
import "Styles/ImageList/index.css";

const ImageSection = ({
  imageList = {},
  selectedCategory = "",
  searchText = "",
}) => {
  console.log("inside ImageSection imageList:", imageList);
  console.log("inside ImageSection selectedCategory:", selectedCategory);
  const imageArray = [];
  Object.keys(imageList)
    .filter((key) => (selectedCategory ? key === selectedCategory : true))
    .forEach((key) => {
      imageArray.push(...imageList[key]);
    });
  console.log("inside ImageSection imageArray:", imageArray);

  return (
    <div className="imageFlex">
      {imageArray &&
        imageArray
          .filter((val) =>
            searchText ? val.text.indexOf(searchText) > -1 : true
          )
          .map((val, index) => {
            const { image, text } = val || {};
            return (
              <div key={`${val.text}-${index}`}>
                <ImageComponent
                  imageURL={image}
                  imageHeight="400px"
                  imageWidth="400px"
                  imageText={text}
                />
              </div>
            );
          })}
    </div>
  );
};

ImageSection.propTypes = {
  imageList: PropTypes.object,
  searchText: PropTypes.string,
  selectedCategory: PropTypes.string,
};

ImageSection.defaultProps = {
  imageList: {},
  searchText: "",
  selectedCategory: "",
};

export default ImageSection;
