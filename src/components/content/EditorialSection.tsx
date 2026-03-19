import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const EditorialSection = () => {
  return <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-normal text-foreground leading-tight md:text-xl">
            Premium Fashion for Modern Living
          </h2>
          <p className="text-sm font-light text-foreground leading-relaxed">Linea was born from the vision of creating timeless clothing that transcends trends. With a focus on quality fabrics and meticulous craftsmanship, our collections reflect a commitment to sustainable fashion that celebrates individuality and style.

        </p>
          <Link to="/about/our-story" className="inline-flex items-center gap-1 text-sm font-light text-foreground hover:text-foreground/80 transition-colors duration-200">
            <span>Read our full story</span>
            <ArrowRight size={12} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64" alt="Linea founders - creating sustainable fashion" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default EditorialSection;