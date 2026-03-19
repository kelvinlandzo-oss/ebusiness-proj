import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/dresses" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1595889951946-c74c6f7ad1db" 
                alt="Casual dresses collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Casual Dresses
            </h3>
            <p className="text-sm font-light text-foreground">
              Comfortable and stylish dresses perfect for everyday wear
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/outerwear" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551028719-00167b16ebc5" 
                alt="Premium outerwear" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Chain Collection
            </h3>
            <p className="text-sm font-light text-foreground">
              Refined links and connections in precious metals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;