import { useState, useEffect } from "react";

import ImageListComponent from "Components/ImageList";
// import Error from "Components/Common/Error";
// import Loader from "Components/Common/Loader";
// import { getImageList } from "Helpers/ImageListApiHelper";
import { imageSampleList } from "Stubs/images";

const ImageList = () => {
  const [imageList, setImageList] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [sliderVal, setSliderVal] = useState(1);
  //   const [isLoader, setIsLoader] = useState(false);
  //   const [error, setError] = useState(null);
  console.log("ImageListContainer imageList:", imageList);
  console.log("ImageListContainer selectedCategory:", selectedCategory);
  //   const fetchImageList = () => {
  //     setIsLoader(true);
  //     setError(null);
  //     getImageList()
  //       .then((response) => {
  //         setIsLoader(false);
  //         setImageList(response);
  //       })
  //       .catch((error) => {
  //         setIsLoader(false);
  //         setError(error);
  //         console.error("inside fetchImageList error:", error);
  //       });
  //   };

  useEffect(() => {
    console.log("inside useEffect");
    if (!imageList) {
      //   fetchImageList();
      setImageList(imageSampleList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   if (isLoader) return <Loader />;

  //   if (error) return <Error error={error} />;

  return (
    <>
      <div>
        {imageList && (
          <ImageListComponent
            imageList={imageList}
            searchText={searchText}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSearchText={setSearchText}
            sliderVal={sliderVal}
            setSliderVal={setSliderVal}
          />
        )}
      </div>
    </>
  );
};

export default ImageList;
