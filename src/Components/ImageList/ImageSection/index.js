import PropTypes from "prop-types";

import ImageComponent from "Components/Common/Image";
import "Styles/ImageList/index.css";

const ImageSection = ({ imageList = {} }) => {
  console.log("inside ImageSection imageList:", imageList);
  const imageArray = [];
  Object.values(imageList).forEach((value) => {
    imageArray.push(...value);
  });
  console.log("inside ImageSection imageArray:", imageArray);

  return (
    <div className="imageFlex">
      {imageArray &&
        imageArray.map((val, index) => {
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
};

ImageSection.defaultProps = {
  imageList: {},
};

export default ImageSection;
