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
