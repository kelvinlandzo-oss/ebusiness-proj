import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
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

// Extended product list for category page - Clothing Store
const products: Product[] = [
  // TOPS (1-6)
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
    id: 2,
    name: "Silk Blend Blouse",
    category: "Tops",
    price: "GH₵220",
    image: eclipseImage,
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
    image: haloImage,
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
    image: obliqueImage,
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
    image: lintelImage,
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
    image: shadowlineImage,
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
    image: pantheonImage,
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
    image: eclipseImage,
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
    image: haloImage,
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
    image: obliqueImage,
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
    image: lintelImage,
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
    image: shadowlineImage,
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
    image: pantheonImage,
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
    image: eclipseImage,
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
    image: haloImage,
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
    image: obliqueImage,
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
    image: lintelImage,
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
    image: shadowlineImage,
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
    image: pantheonImage,
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
    image: eclipseImage,
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
    image: haloImage,
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
    image: obliqueImage,
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
    image: lintelImage,
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
    image: shadowlineImage,
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

const ProductGrid = () => {
  return (
    <section className="w-full px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
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
          ))}
        </div>
      
      <Pagination />
    </section>
  );
};

export default ProductGrid;