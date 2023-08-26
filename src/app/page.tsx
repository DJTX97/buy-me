import HomePage from "@/pages/HomePage";
import { fetchData } from "@/utils/dataFetchingKit";

export default async function Home() {
  const data = await fetchData("https://fakestoreapi.com/products");

  return <HomePage data={data} />;
}
