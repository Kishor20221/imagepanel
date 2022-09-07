import PropTypes from "prop-types";

import ImageSection from "Components/ImageList/ImageSection";

import "Styles/ImageList/index.css";

const ImageList = ({ imageList }) => (
  <>
    <div className="container">
      <div className="topsection">Top</div>
      <div className="bottomsection">
        <div className="leftsidemenubottomsection">left</div>
        <div className="rightmainbottomsection">
          <ImageSection imageList={imageList} />
        </div>
      </div>
    </div>
  </>
);

ImageList.propTypes = {
  imageList: PropTypes.object,
};
ImageList.defaultProps = {
  imageList: {},
};

export default ImageList;
