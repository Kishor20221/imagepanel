import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

import ImageSection from "Components/ImageList/ImageSection";
import LeftSection from "Components/ImageList/LeftSection";
import InputText from "Components/Common/InputText";
import { debounce } from "Helpers";

import "Styles/ImageList/index.css";

const ImageList = ({
  imageList,
  setSelectedCategory,
  selectedCategory,
  searchText,
  setSearchText,
  sliderVal,
  setSliderVal,
}) => {
  const [aryImageDisplay, setAryImageDisplay] = useState([]);
  console.log("inside ImageList imageList:", imageList);
  console.log("inside ImageList aryImageDisplay:", aryImageDisplay);
  console.log("inside ImageList selectedCategory:", selectedCategory);

  useEffect(() => {
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
    setAryImageDisplay(imageArray);
  }, [selectedCategory]);

  const debouncedSearch = useCallback(
    debounce((searchWord, imageDisplayList) => {
      console.log(
        "inside ImageSection debouncedSave imageDisplayList:",
        imageDisplayList
      );
      console.log("inside ImageSection debouncedSave searchWord:", searchWord);

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
      setAryImageDisplay(imageArray);
      console.log("inside ImageSection debouncedSave imageArray:", imageArray);
    }, 1000),
    [] // will be created only once initially
  );

  useEffect(() => {
    debouncedSearch(searchText, imageList);
  }, [searchText]);
  // useEffect(() => {

  // }, []);

  console.log("inside ImageList aryImageDisplay2:", aryImageDisplay);
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
            <ImageSection
              imageArray={aryImageDisplay}
              // imageList={imageList}
              // searchText={searchText}
              // selectedCategory={selectedCategory}
              sliderVal={sliderVal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ImageList.propTypes = {
  imageList: PropTypes.object,
  selectedCategory: PropTypes.string,
  setSelectedCategory: PropTypes.func,
  sliderVal: PropTypes.number,
  setSliderVal: PropTypes.func,
};
ImageList.defaultProps = {
  imageList: {},
  selectedCategory: "",
  setSelectedCategory: () => {},
  sliderVal: 1,
  setSliderVal: () => {},
};

export default ImageList;
