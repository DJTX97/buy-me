import ProductRating from "@/components/ProductRating";

interface ProductPageProps {
  params: {
    category: string;
    product: Array<string>;
  };
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };
}

export default function ProductPage({ params, product }: ProductPageProps) {
  console.log(params);
  console.log(product);
  return (
    <div className="border border-black bg-white rounded-xl text-2xl font-semibold">
      <div className="p-5 text-5xl">{product.title}</div>
      <div className="flex gap-5">
        <img className="h-[28rem] w-1/2 p-10" src={product.image} alt="image" />
        <div className="flex flex-col gap-3 w-1/2 p-10">
          <div className="lg:flex gap-2">
            Rating: <ProductRating rating={product.rating.rate} />{" "}
            <div className="border-b-2 border-black border-dotted">
              {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
          <div className="flex gap-3">
            Price:{" "}
            <div className="font-bold text-red-500">${product.price}</div>
          </div>
          <button className="mt-14 w-3/4 p-5 rounded-full bg-black text-white self-center hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
      <div className="flex flex-col px-10 pb-3 font-bold">
        Details:
        <div className="font-semibold">{product.description}</div>
      </div>
    </div>
  );
}
