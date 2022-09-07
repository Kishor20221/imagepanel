export const apiFetch = ({ endpoint, requestType = "GET", requestBody }) => {
  const requestSettings = {
    method: requestType,
    headers: {},
  };

  if (requestBody) {
    requestSettings.body = JSON.stringify(requestBody);
  }

  return fetch(endpoint, requestSettings)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};
