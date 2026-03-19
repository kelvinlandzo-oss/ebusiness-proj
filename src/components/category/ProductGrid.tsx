import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import Pagination from "./Pagination";
import { useCart } from "@/contexts/CartContext";
import type { Filters } from "@/pages/Category";

interface ColorOption {
  name: string;
  hex: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  fabric: string;
  sizes: string[];
  colors: ColorOption[];
  fit: "regular" | "slim" | "loose";
  neckline?: string;
  isNew?: boolean;
}

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

// Extended product list for category page - Clothing Store
const products: Product[] = [
  // TOPS (1-6)
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Tops",
    price: "GH₵85",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "White", hex: "#FFFFFF" },
      { name: "Navy", hex: "#001F3F" },
    ],
    fit: "regular",
    neckline: "Crew",
    isNew: true,
  },
  {
    id: 2,
    name: "Silk Blend Blouse",
    category: "Tops",
    price: "GH₵220",
    image: "https://images.unsplash.com/photo-1525572614472-0ff3a63fff71",
    fabric: "Silk",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Blush", hex: "#FFB6C1" },
    ],
    fit: "regular",
    neckline: "V-Neck",
  },
  {
    id: 3,
    name: "Wool Sweater",
    category: "Tops",
    price: "GH₵280",
    image: "https://images.unsplash.com/photo-1543163521-9effc05b9f54",
    fabric: "Wool",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Gray", hex: "#808080" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Cream", hex: "#FFFDD0" },
    ],
    fit: "regular",
    neckline: "Crew",
    isNew: true,
  },
  {
    id: 4,
    name: "Linen Summer Top",
    category: "Tops",
    price: "GH₵120",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
    fabric: "Linen",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Khaki", hex: "#F0E68C" },
      { name: "Terracotta", hex: "#E2725B" },
    ],
    fit: "loose",
    neckline: "Crew",
  },
  {
    id: 5,
    name: "Formal Polyester Shirt",
    category: "Tops",
    price: "GH₵150",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Light Blue", hex: "#ADD8E6" },
      { name: "Burgundy", hex: "#800020" },
    ],
    fit: "slim",
    neckline: "Crew",
  },
  {
    id: 6,
    name: "Organic Cotton Tank",
    category: "Tops",
    price: "GH₵75",
    image: "https://images.unsplash.com/photo-1575521520904-742c3f6b60ca",
    fabric: "Organic Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Forest Green", hex: "#228B22" },
    ],
    fit: "regular",
    neckline: "Crew",
  },

  // BOTTOMS (7-12)
  {
    id: 7,
    name: "Classic Blue Jeans",
    category: "Bottoms",
    price: "GH₵320",
    image: "https://images.unsplash.com/photo-1542272604-787c62d465d1",
    fabric: "Cotton Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Dark Blue", hex: "#00008B" },
      { name: "Light Blue", hex: "#87CEEB" },
      { name: "Black", hex: "#000000" },
    ],
    fit: "regular",
  },
  {
    id: 8,
    name: "Tailored Trousers",
    category: "Bottoms",
    price: "GH₵250",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001F3F" },
      { name: "Gray", hex: "#808080" },
    ],
    fit: "slim",
  },
  {
    id: 9,
    name: "Casual Chinos",
    category: "Bottoms",
    price: "GH₵180",
    image: "https://images.unsplash.com/photo-1602293589411-07134e71a2a9",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Khaki", hex: "#F0E68C" },
      { name: "Tan", hex: "#D2B48C" },
      { name: "Olive", hex: "#808000" },
    ],
    fit: "regular",
  },
  {
    id: 10,
    name: "Linen Shorts",
    category: "Bottoms",
    price: "GH₵140",
    image: "https://images.unsplash.com/photo-1591195853591-40cf7dd5ffd4",
    fabric: "Linen",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Sand", hex: "#C2B280" },
    ],
    fit: "loose",
  },
  {
    id: 11,
    name: "Leather Skirt",
    category: "Bottoms",
    price: "GH₵450",
    image: "https://images.unsplash.com/photo-1577794534644-17a7bab87f4e",
    fabric: "Faux Leather",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
    ],
    fit: "slim",
  },
  {
    id: 12,
    name: "Pleated Midi Skirt",
    category: "Bottoms",
    price: "GH₵200",
    image: "https://images.unsplash.com/photo-1597589243854-2c4ee3a96342",
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Navy", hex: "#001F3F" },
      { name: "Gray", hex: "#808080" },
      { name: "Black", hex: "#000000" },
    ],
    fit: "regular",
  },

  // DRESSES (13-18)
  {
    id: 13,
    name: "Casual Day Dress",
    category: "Dresses",
    price: "GH₵280",
    image: "https://images.unsplash.com/photo-1595889951946-c74c6f7ad1db",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "White", hex: "#FFFFFF" },
      { name: "Floral", hex: "#FF69B4" },
      { name: "Navy", hex: "#001F3F" },
    ],
    fit: "regular",
    neckline: "Crew",
    isNew: true,
  },
  {
    id: 14,
    name: "Flowing Maxi Dress",
    category: "Dresses",
    price: "GH₵380",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
    fabric: "Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Burgundy", hex: "#800020" },
      { name: "Deep Purple", hex: "#663399" },
    ],
    fit: "loose",
    neckline: "V-Neck",
  },
  {
    id: 15,
    name: "Elegant Cocktail Dress",
    category: "Dresses",
    price: "GH₵520",
    image: "https://images.unsplash.com/photo-1572804419762-99192248c385",
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Emerald", hex: "#50C878" },
    ],
    fit: "slim",
    neckline: "V-Neck",
  },
  {
    id: 16,
    name: "Summer Sundress",
    category: "Dresses",
    price: "GH₵160",
    image: "https://images.unsplash.com/photo-1566174053391-be6e7a681b95",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Yellow", hex: "#FFFF00" },
      { name: "Coral", hex: "#FF7F50" },
      { name: "Mint", hex: "#98FF98" },
    ],
    fit: "loose",
    neckline: "Crew",
  },
  {
    id: 17,
    name: "Office Work Dress",
    category: "Dresses",
    price: "GH₵290",
    image: "https://images.unsplash.com/photo-1564257631626-f90000647b55",
    fabric: "Polyester Blend",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Taupe", hex: "#B38B6D" },
    ],
    fit: "slim",
    neckline: "Crew",
  },
  {
    id: 18,
    name: "Bohemian Print Dress",
    category: "Dresses",
    price: "GH₵210",
    image: "https://images.unsplash.com/photo-1612336307429-8a88e8d08dbb",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Multicolor", hex: "#FF6347" },
      { name: "Earth Tone", hex: "#8B4513" },
    ],
    fit: "loose",
    neckline: "V-Neck",
  },

  // OUTERWEAR (19-24)
  {
    id: 19,
    name: "Cotton Blazer",
    category: "Outerwear",
    price: "GH₵420",
    image: "https://images.unsplash.com/photo-1591047990979-856eb60639c4",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Navy", hex: "#001F3F" },
      { name: "Cream", hex: "#FFFDD0" },
    ],
    fit: "slim",
  },
  {
    id: 20,
    name: "Denim Jacket",
    category: "Outerwear",
    price: "GH₵280",
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5",
    fabric: "Cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Dark Blue", hex: "#00008B" },
      { name: "Light Blue", hex: "#87CEEB" },
    ],
    fit: "regular",
  },
  {
    id: 21,
    name: "Wool Coat",
    category: "Outerwear",
    price: "GH₵680",
    image: "https://images.unsplash.com/photo-1539533057144-d814f0f4e5da",
    fabric: "Wool",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Charcoal", hex: "#36454F" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Navy", hex: "#001F3F" },
    ],
    fit: "regular",
  },
  {
    id: 22,
    name: "Casual Baseball Jacket",
    category: "Outerwear",
    price: "GH₵190",
    image: "https://images.unsplash.com/photo-1551482260-ff92038f1994",
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Gray", hex: "#808080" },
      { name: "Navy", hex: "#001F3F" },
    ],
    fit: "loose",
  },
  {
    id: 23,
    name: "Leather Jacket",
    category: "Outerwear",
    price: "GH₵850",
    image: "https://images.unsplash.com/photo-1551028719-00167b16ebc5",
    fabric: "Faux Leather",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Brown", hex: "#8B4513" },
    ],
    fit: "slim",
  },
  {
    id: 24,
    name: "Lightweight Cardigan",
    category: "Outerwear",
    price: "GH₵240",
    image: "https://images.unsplash.com/photo-1591195849676-8530823e5b6d",
    fabric: "Merino",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Gray", hex: "#808080" },
      { name: "Blush", hex: "#FFB6C1" },
    ],
    fit: "regular",
  },
];

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