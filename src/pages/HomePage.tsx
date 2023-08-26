import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

interface HomePageProps {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
}

export default function HomePage({ data }: { data: HomePageProps[] }) {
  return (
    <div className="flex flex-col items-center">
      <Hero/>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
}
