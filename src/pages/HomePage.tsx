import Hero from "@/components/core/Hero";
import ProductGrid from "@/components/core/ProductGrid";
import ProductFilterBar from "@/components/ProductFiltering/ProductFilterBar";

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
      <ProductGrid data={data} />
    </div>
  );
}
