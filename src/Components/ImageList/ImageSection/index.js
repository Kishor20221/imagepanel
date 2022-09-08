import PropTypes from "prop-types";

import ImageComponent from "Components/Common/Image";
import "Styles/ImageList/index.css";

const ImageSection = ({
  imageList = {},
  selectedCategory = "",
  searchText = "",
  sliderVal = 1,
}) => {
  console.log("inside ImageSection imageList:", imageList);
  console.log("inside ImageSection selectedCategory:", selectedCategory);
  const imageArray = [];
  Object.keys(imageList)
    .filter((key) => (selectedCategory ? key === selectedCategory : true))
    .forEach((key) => {
      imageArray.push(
        ...imageList[key].filter((val) =>
          searchText
            ? val.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1
            : true
        )
      );
    });
  console.log("inside ImageSection imageArray:", imageArray);

  return (
    <div className="imageFlex">
      {imageArray.length === 0 ? (
        <span> No Search Found </span>
      ) : (
        imageArray &&
        imageArray.map((val, index) => {
          const { image, text } = val || {};
          return (
            <div key={`${val.text}-${index}`}>
              <ImageComponent
                imageURL={image}
                imageHeight="400px"
                imageWidth="400px"
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
  searchText: PropTypes.string,
  selectedCategory: PropTypes.string,
  sliderVal: PropTypes.number,
};

ImageSection.defaultProps = {
  imageList: {},
  searchText: "",
  selectedCategory: "",
  sliderVal: 1,
};

export default ImageSection;
