export const options = {
  method: "GET",
  next: {
    revalidate: 300,
  },
};

//Async function to fetch data from api endpoint.
export const fetchData = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch resources!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};
