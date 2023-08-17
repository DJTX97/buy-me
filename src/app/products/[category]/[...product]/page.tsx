import ProductPage from "@/pages/ProductPage";
import { fetchData } from "@/utils/dataFetchingKit";

interface Params {
  category: string;
  product: string[];
}

export default async function Product({ params }: { params: Params }) {
  const data = await fetchData(
    `https://fakestoreapi.com/products/${params.product[0]}`
  );
  //console.log(params);
  return <ProductPage params={params} product={data} />;
}
