import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CategoryHeader from "../components/category/CategoryHeader";
import FilterSortBar from "../components/category/FilterSortBar";
import ProductGrid from "../components/category/ProductGrid";

export interface Filters {
  categories: string[];
  priceRanges: string[];
  fabrics: string[];
  fits: string[];
  necklines: string[];
  colors: string[];
  sortBy: string;
}

const Category = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRanges: [],
    fabrics: [],
    fits: [],
    necklines: [],
    colors: [],
    sortBy: "featured"
  });

  const handleFilterChange = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-6">
        <CategoryHeader 
          category={category || 'All Products'} 
        />
        
        <FilterSortBar 
          filtersOpen={filtersOpen}
          setFiltersOpen={setFiltersOpen}
          itemCount={24}
          onFilterChange={handleFilterChange}
          currentFilters={filters}
        />
        
        <ProductGrid filters={filters} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Category;