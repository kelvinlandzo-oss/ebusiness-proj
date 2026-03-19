import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import pantheonImage from "@/assets/pantheon.jpg";
import eclipseImage from "@/assets/eclipse.jpg";
import haloImage from "@/assets/halo.jpg";
import obliqueImage from "@/assets/oblique.jpg";
import lintelImage from "@/assets/lintel.jpg";
import shadowlineImage from "@/assets/shadowline.jpg";
import organicEarring from "@/assets/organic-earring.png";
import linkBracelet from "@/assets/link-bracelet.png";

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

const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    category: "Tops",
    price: "GH₵85",
    image: pantheonImage,
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
    id: 7,
    name: "Classic Blue Jeans",
    category: "Bottoms",
    price: "GH₵320",
    image: eclipseImage,
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
    id: 13,
    name: "Casual Day Dress",
    category: "Dresses",
    price: "GH₵280",
    image: haloImage,
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
    id: 19,
    name: "Cotton Blazer",
    category: "Outerwear",
    price: "GH₵420",
    image: obliqueImage,
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
    id: 3,
    name: "Wool Sweater",
    category: "Tops",
    price: "GH₵280",
    image: lintelImage,
    fabric: "Wool",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: [
      { name: "Gray", hex: "#808080" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Cream", hex: "#FFFDD0" },
    ],
    fit: "regular",
    neckline: "Crew",
  },
  {
    id: 15,
    name: "Elegant Cocktail Dress",
    category: "Dresses",
    price: "GH₵520",
    image: shadowlineImage,
    fabric: "Polyester",
    sizes: ["XS", "S", "M", "L"],
    colors: [
      { name: "Black", hex: "#000000" },
      { name: "Emerald", hex: "#50C878" },
    ],
    fit: "slim",
    neckline: "V-Neck",
  },
];

const ProductCarousel = () => {
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
            {products.map((product) => (
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
            ))}
          </CarouselContent>
        </Carousel>
    </section>
  );
};

export default ProductCarousel;