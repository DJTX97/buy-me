import HomePage from "@/pages/HomePage";
import { fetchData } from "@/utils/dataFetchingKit";

export default async function Home() {
  const data = await fetchData("https://dummyjson.com/products?limit=100");

  return <HomePage data={data.products} />;
}
