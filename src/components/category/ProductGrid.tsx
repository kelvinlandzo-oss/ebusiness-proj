import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Pagination from "./Pagination";
import { useCart } from "@/contexts/CartContext";
import type { Filters } from "@/pages/Category";

import { Product, ColorOption, products } from "../../data/products";

// Helper function to parse price from string "GH₵85"
const parsePrice = (priceStr: string): number => {
  const match = priceStr.match(/\d+/);
  return match ? parseInt(match[0]) : 0;
};

// Helper function to check if price is in range
const isPriceInRange = (price: number, range: string): boolean => {
  if (range === "GH₵50 - GH₵300") return price >= 50 && price <= 300;
  if (range === "GH₵300 - GH₵800") return price >= 300 && price <= 800;
  if (range === "GH₵800 - GH₵2,000") return price >= 800 && price <= 2000;
  return false;
};

const ProductGrid = ({ filters }: { filters: Filters }) => {
  const { addToFavorites, removeFromFavorites, isFavorited } = useCart();

  // Apply filters to products
  let filteredProducts = products.filter((product) => {
    // Category filter
    if (filters.categories.length > 0 && !filters.categories.includes(product.category)) {
      return false;
    }

    // Price filter
    if (filters.priceRanges.length > 0) {
      const productPrice = parsePrice(product.price);
      const matchesPriceRange = filters.priceRanges.some(range => isPriceInRange(productPrice, range));
      if (!matchesPriceRange) return false;
    }

    // Fabric filter
    if (filters.fabrics.length > 0 && !filters.fabrics.includes(product.fabric)) {
      return false;
    }

    // Fit filter
    if (filters.fits.length > 0 && !filters.fits.includes(product.fit)) {
      return false;
    }

    // Neckline filter
    if (filters.necklines.length > 0 && product.neckline && !filters.necklines.includes(product.neckline)) {
      return false;
    }

    // Color filter
    if (filters.colors.length > 0) {
      const productHasColor = product.colors.some(color => filters.colors.includes(color.name));
      if (!productHasColor) return false;
    }

    return true;
  });

  // Apply sorting
  switch (filters.sortBy) {
    case "price-low":
      filteredProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      break;
    case "price-high":
      filteredProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      break;
    case "newest":
      filteredProducts.sort((a, b) => {
        const aNew = a.isNew ? 0 : 1;
        const bNew = b.isNew ? 0 : 1;
        return aNew - bNew;
      });
      break;
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default: // featured
      // Keep original order
      break;
  }

  return (
    <section className="w-full px-6 mb-16">
      {filteredProducts.length === 0 ? (
        <div className="col-span-full text-center py-16">
          <p className="text-sm font-light text-muted-foreground">
            No products found. Try adjusting your filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => {
              const isFav = isFavorited(product.id);
              const handleFavoriteClick = (e: React.MouseEvent) => {
                e.preventDefault();
                if (isFav) {
                  removeFromFavorites(product.id);
                } else {
                  addToFavorites({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                  });
                }
              };

              return (
              <div key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <Card 
                    className="border-none shadow-none bg-transparent group cursor-pointer"
                  >
                    <CardContent className="p-0">
                      <div className="aspect-square mb-3 overflow-hidden bg-muted/10 relative">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/[0.03]"></div>
                        
                        {/* Heart Icon */}
                        <button
                          onClick={handleFavoriteClick}
                          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-all duration-200 z-10"
                          aria-label="Add to favorites"
                        >
                          <Heart 
                            size={18}
                            className={isFav ? "fill-red-500 text-red-500" : "text-foreground"}
                          />
                        </button>

                        {product.isNew && (
                          <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium text-black">
                            NEW
                          </div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-light text-foreground">
                          {product.category}
                        </p>
                        <div className="flex justify-between items-center">
                          <h3 className="text-sm font-medium text-foreground">
                            {product.name}
                          </h3>
                          <p className="text-sm font-light text-foreground">
                            {product.price}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
              );
            })}
          </div>
        </>
      )}
      
      <Pagination />
    </section>
  );
};

export default ProductGrid;