import { apiFetch } from "Helpers/apiutils";
import { imageList } from "Stubs/images";

const BASE_URL = "https://d27a03nbwzxaug.cloudfront.net";
const IMAGE_LIST_URL = `${BASE_URL}/accounts/images/files.json`;

export const getImageList = () => {
  return apiFetch({
    endpoint: IMAGE_LIST_URL,
    requestType: "GET",
  }).then((response) => response);
};
