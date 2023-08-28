import Hero from "@/components/core/Hero";
import ProductCard from "@/components/core/ProductCard";
import ProductFilterBar from "@/components/ProductFilterBar";

interface HomePageProps {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
  rating: number;
}

export default function HomePage({ data }: { data: HomePageProps[] }) {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <ProductFilterBar />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 2xl:gap-0">
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      P</div>
    </div>
  );
}
