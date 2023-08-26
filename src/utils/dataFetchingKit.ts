const options = {
  method: "GET",
  next: {
    revalidate: 3600,
  },
};

//Async function to fetch data from api endpoint.
export const fetchData = async (url: string, extraData = {}) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch resources!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = await res.json();
  
  if (Object.keys(extraData).length > 0) {
    data = { ...data, ...extraData };
  }

  return data;
};



