import PropTypes from "prop-types";

import ImageSection from "Components/ImageList/ImageSection";
import LeftSection from "Components/ImageList/LeftSection";

import "Styles/ImageList/index.css";

const ImageList = ({ imageList, setSelectedCategory, selectedCategory }) => (
  <>
    <div className="container">
      <div className="topsection">Top</div>
      <div className="bottomsection">
        <div className="leftsidemenubottomsection">
          <LeftSection
            imageList={imageList}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="rightmainbottomsection">
          <ImageSection
            imageList={imageList}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  </>
);

ImageList.propTypes = {
  imageList: PropTypes.object,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
};
ImageList.defaultProps = {
  imageList: {},
  selectedCategory: "",
  setSelectedCategory: () => {},
};

export default ImageList;
