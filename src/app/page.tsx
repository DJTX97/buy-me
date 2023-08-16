import HomePage from "@/pages/HomePage";

export const options = {
  next: {
    revalidate: 300,
  },
};

//Async function to fetch data from api endpoint.
const fetchData = async (url: string) => {
  const res = await fetch(url, options);
  if (!res.ok) {
    throw new Error("Failed to fetch resources!");
  }
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await res.json();
  return data;
};


export default async function Home() {

  const data = await fetchData("https://fakestoreapi.com/products");

  return (
    <HomePage data={data}/>
  );
}
