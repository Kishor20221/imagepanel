import { useState, useEffect } from "react";

import Error from "Components/Common/Error";
import Loader from "Components/Common/Loader";
import { getImageList } from "Helpers/ImageListApiHelper";
import { imageSampleList } from "Stubs/images";

const ImageList = () => {
  const [imageList, setImageList] = useState(null);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  console.log("imageList:", imageList);
  const fetchImageList = () => {
    setIsLoader(true);
    setError(null);
    getImageList()
      .then((response) => {
        setIsLoader(false);
        setImageList(response);
      })
      .catch((error) => {
        setIsLoader(false);
        setError(error);
        console.error("inside fetchImageList error:", error);
      });
  };

  useEffect(() => {
    console.log("inside useEffect");
    if (!imageList) {
      //   fetchImageList();
      setImageList(imageSampleList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoader) return <Loader />;

  if (error) return <Error error={error} />;

  return (
    <>
      <div>ImageList</div>
    </>
  );
};

export default ImageList;
