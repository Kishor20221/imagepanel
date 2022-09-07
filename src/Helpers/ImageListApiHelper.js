import { apiFetch } from "Components/Helpers/apiutils";

const BASE_URL = "https://d27a03nbwzxaug.cloudfront.net";
const IMAGE_LIST_URL = `${BASE_URL}/accounts/images/files.json`;

export const getBucketList = () => {
  return apiFetch({
    endpoint: IMAGE_LIST_URL,
    requestType: "GET",
  }).then((response) => response);
};
