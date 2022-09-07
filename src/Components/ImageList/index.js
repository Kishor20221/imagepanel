import PropTypes from "prop-types";

import ImageSection from "Components/ImageList/ImageSection";
import LeftSection from "Components/ImageList/LeftSection";
import InputText from "Components/Common/InputText";

import "Styles/ImageList/index.css";

const ImageList = ({
  imageList,
  setSelectedCategory,
  selectedCategory,
  searchText,
  setSearchText,
}) => (
  <>
    <div className="container">
      <div className="topsection">
        <InputText
          placeholder="Search"
          searchText={searchText}
          setSearchText={setSearchText}
        />
      </div>
      <div className="bottomsection">
        <div className="leftsidemenubottomsection">
          <LeftSection
            imageList={imageList}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
        <div className="rightmainbottomsection">
          <ImageSection
            imageList={imageList}
            searchText={searchText}
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
