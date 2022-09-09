import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import ImageSection from "Components/ImageList/ImageSection";
import LeftSection from "Components/ImageList/LeftSection";
import InputText from "Components/Common/InputText";
import { debounce } from "Helpers";

import "Styles/ImageList/index.css";

const getFilteredList = (imageDisplayList, selectedCategory, searchWord) => {
  const imageArray = [];
  Object.keys(imageDisplayList)
    .filter((key) => (selectedCategory ? key === selectedCategory : true))
    .forEach((key) => {
      imageArray.push(
        ...imageDisplayList[key].filter((val) =>
          searchWord
            ? val.text.toLowerCase().indexOf(searchWord.toLowerCase()) > -1
            : true
        )
      );
    });

  return imageArray;
};

const ImageList = ({
  imageList,
  setSelectedCategory,
  selectedCategory,
  searchText = "",
  setSearchText,
  sliderVal,
  setSliderVal,
}) => {
  const [aryImageDisplay, setAryImageDisplay] = useState([]);

  useEffect(() => {
    setAryImageDisplay(
      getFilteredList(imageList, selectedCategory, searchText)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  // eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce(
      (searchWord, selectedCategory, imageDisplayList) =>
        setAryImageDisplay(
          getFilteredList(imageDisplayList, selectedCategory, searchWord)
        ),
      1000
    ),
    // eslint-disable-line react-hooks/exhaustive-deps
    []
  );

  useEffect(() => {
    debouncedSearch(searchText, selectedCategory, imageList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
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
              sliderVal={sliderVal}
              setSliderVal={setSliderVal}
            />
          </div>
          <div className="rightmainbottomsection">
            <ImageSection imageArray={aryImageDisplay} sliderVal={sliderVal} />
          </div>
        </div>
      </div>
    </>
  );
};

ImageList.propTypes = {
  imageList: PropTypes.object,
  selectedCategory: PropTypes.string,
  searchText: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  sliderVal: PropTypes.number,
  setSliderVal: PropTypes.func,
  setSearchText: PropTypes.func,
};
ImageList.defaultProps = {
  imageList: {},
  selectedCategory: "",
  searchText: "",
  setSelectedCategory: () => {},
  sliderVal: 1,
  setSliderVal: () => {},
  setSearchText: () => {},
};

export default ImageList;
