export const postRequest = async (URL, data) => {
  console.log(data);
  const responseData = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data)
  });
  const responseJson = await responseData.json();
  return responseJson;
};
