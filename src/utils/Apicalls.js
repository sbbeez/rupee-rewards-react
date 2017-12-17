export const postRequest = async (URL, data) => {
  const responseData = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data)
  });
  if (responseData.status !== 200) {
    return null;
  }
  const responseJson = await responseData.json();
  return responseJson;
};

const getHeaders = () => {
  let authorization = localStorage.getItem("access_token");
  return { authorization };
};

export const getRequest = async URL => {
  let headers = getHeaders();
  const responseData = await fetch(URL, {
    method: "GET",
    headers
  });
  const responseJson = await responseData.json();
  return responseJson;
};
