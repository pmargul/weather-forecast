
export const getApi = async (uri) => {
    let response = await fetch(uri, {
      method: "GET",  
    })
    const json = await response.json();
    return json;
};
export const postApi = async (uri,data) => {
  let response = await fetch(uri, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  const json = await response.json();
  
  return json;
};

