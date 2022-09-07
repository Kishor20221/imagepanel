import PropTypes from "prop-types";

const ImageSection = ({ imageList = {} }) => {
  console.log("inside ImageSection imageList:", imageList);
  const imageArray = [];
  Object.values(imageList).forEach((value) => {
    imageArray.push(...value);
  });
  console.log("inside ImageSection imageArray:", imageArray);

  return (
    <div>
      {imageArray &&
        imageArray.map((val, index) => {
          return <div key={`${val.text}-${index}`}>{val.text}</div>;
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
