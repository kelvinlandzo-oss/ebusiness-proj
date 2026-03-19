import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

import { Product, products as allProducts } from "../../data/products";

// Get a subset of products for the carousel (e.g., first 6 items or specific ones)
const products = allProducts.slice(0, 6);

const ProductCarousel = () => {
  const { addToFavorites, removeFromFavorites, isFavorited } = useCart();

  return (
    <section className="w-full mb-16 px-6">
      <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="">
            {products.map((product) => {
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
               <CarouselItem
                 key={product.id}
                 className="basis-1/2 md:basis-1/3 lg:basis-1/4 pr-2 md:pr-4"
               >
                 <Link to={`/product/${product.id}`}>
                  <Card className="border-none shadow-none bg-transparent group">
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
              </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
    </section>
  );
};

export default ProductCarousel;