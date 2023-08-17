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
  // console.log(params);
  // console.log(product);
  return (
    <div className="flex flex-col border border-black bg-white rounded-xl text-2xl font-semibold">
      <div className="p-8 text-3xl md:text-6xl">{product.title}</div>
      <div className="flex flex-col lg:flex-row">
        <img className="h-80 sm:h-96 md:h-[28rem] lg:w-1/2 m-10 lg:m-5 sm:p-10" src={product.image} alt="image" />
        <div className="flex flex-col gap-5 lg:w-1/2 mx-10 md:my-7 p-5 border-2 border-black rounded-xl">
          <div>
            <b>Category:</b> {product.category}
          </div>
          <div className="md:flex items-center gap-2">
            <b>Rating:</b><ProductRating rating={product.rating.rate} />{" "}
            <div className="flex items-center border-b-2 border-black border-dotted text-lg">
              {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
          <div className="flex gap-3">
            <b>Price:</b>{" "}
            <div className="font-bold text-red-500">${product.price}</div>
          </div>
          <button className="mt-10 w-3/4 p-3 rounded-full bg-black text-white self-center hover:bg-gray-700">
            Add to cart
          </button>
        </div>
      </div>
      <div className="self-center h-[2px] w-11/12 bg-black"></div>
      <div className="flex flex-col gap-3 px-10 my-5 md:mb-5 md:mt-2">
        <b className="text-3xl">Details:</b>
        <div className="font-normal">{product.description}</div>
      </div>
    </div>
  );
}
