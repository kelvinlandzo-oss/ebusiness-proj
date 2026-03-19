import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/tops" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src="/images/elegant-blouses.png" 
                alt="Elegant blouse collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Elegant Blouses
            </h3>
            <p className="text-sm font-light text-foreground">
              Premium silk and refined fabrics for sophisticated style
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/dresses" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden">
              <img 
                src="/images/sophisticated-dresses.png" 
                alt="Sophisticated dresses collection" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Sophisticated Dresses
            </h3>
            <p className="text-sm font-light text-foreground">
              Timeless elegance with contemporary flair for every occasion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;