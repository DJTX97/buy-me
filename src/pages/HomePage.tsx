import Hero from "@/components/core/Hero";
import ProductGrid from "@/components/core/ProductGrid";
import ProductFilterBar from "@/components/ProductFiltering/ProductFilterBar";
import { Product } from "@/utils/globalTypes";

interface HomePageProps {
  data: Product[];
}

export default function HomePage({ data }: HomePageProps) {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <ProductFilterBar />
      <ProductGrid products={data} />
    </div>
  );
}
