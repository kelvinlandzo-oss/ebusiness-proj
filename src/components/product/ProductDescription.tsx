import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewProduct from "./ReviewProduct";

const CustomStar = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={`w-3 h-3 ${filled ? 'text-foreground' : 'text-muted-foreground/30'} ${className}`}
  >
    <path 
      fillRule="evenodd" 
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" 
      clipRule="evenodd" 
    />
  </svg>
);

import { Product } from "../../data/products";

const ProductDescription = ({ product }: { product: Product }) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {/* Description */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Description</span>
          {isDescriptionOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4">
            <p className="text-sm font-light text-muted-foreground leading-relaxed">
              {product.description || `Our ${product.name} is a wardrobe essential made from premium quality ${product.fabric?.toLowerCase() || 'materials'}. With a comfortable ${product.fit} fit, this versatile piece is perfect for everyday wear. The high-quality fabric ensures durability and comfort with every wear.`}
            </p>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Product Details</span>
          {isDetailsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isDetailsOpen && (
          <div className="pb-6 space-y-3">
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">SKU</span>
              <span className="text-sm font-light text-foreground">{product.sku || `SKU-${product.id.toString().padStart(4, '0')}`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Collection</span>
              <span className="text-sm font-light text-foreground">{product.collection || "Essentials"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Fabric Composition</span>
              <span className="text-sm font-light text-foreground">{product.fabric}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-light text-muted-foreground">Fit</span>
              <span className="text-sm font-light text-foreground capitalize">{product.fit}</span>
            </div>
          </div>
        )}
      </div>

      {/* Care Instructions */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsCareOpen(!isCareOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <span>Care & Cleaning</span>
          {isCareOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isCareOpen && (
          <div className="pb-6 space-y-4">
            <ul className="space-y-2">
              {product.careInstructions ? (
                product.careInstructions.map((instruction, index) => (
                  <li key={index} className="text-sm font-light text-muted-foreground">• {instruction}</li>
                ))
              ) : (
                <>
                  <li className="text-sm font-light text-muted-foreground">• Machine wash in cold water with similar colors</li>
                  <li className="text-sm font-light text-muted-foreground">• Use gentle cycle; avoid bleach and fabric softener</li>
                  <li className="text-sm font-light text-muted-foreground">• Lay flat to dry or tumble dry on low heat</li>
                </>
              )}
            </ul>
            <p className="text-sm font-light text-muted-foreground">
              For best results and longevity of your garment, follow these care instructions carefully.
            </p>
          </div>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-light rounded-none"
        >
          <div className="flex items-center gap-3">
            <span>Customer Reviews</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <CustomStar
                  key={star}
                  filled={star <= 4.8}
                />
              ))}
              <span className="text-sm font-light text-muted-foreground ml-1">4.8</span>
            </div>
          </div>
          {isReviewsOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
        {isReviewsOpen && (
          <div className="pb-6 space-y-6">
            {/* Review Product Button */}
            <ReviewProduct />

            {/* Reviews List */}
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={true}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">Sarah M.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "Perfect everyday t-shirt! The fabric quality is amazing and it holds up great after 
                  multiple washes. I love that it comes in so many colors. This is my go-to staple."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={star <= 4}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">Emma T.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "Great quality cotton and comfortable fit. The color is true to what I expected. 
                  Very satisfied with my purchase and would definitely order again."
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <CustomStar
                        key={star}
                        filled={true}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-light text-muted-foreground">Jessica R.</span>
                </div>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
                  "This is the best basic t-shirt I've found. It doesn't shrink, the seams are well-made, 
                  and it looks great even after washing. Highly recommend!"
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;