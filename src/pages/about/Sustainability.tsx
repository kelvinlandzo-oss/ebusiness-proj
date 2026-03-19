import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import AboutSidebar from "../../components/about/AboutSidebar";

const Sustainability = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Sustainability" 
          subtitle="Creating beautiful fashion while protecting our planet and communities for future generations"
        />
        
        <ContentSection title="Our Environmental Commitment">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Sustainable Fabrics</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're committed to using sustainable and eco-friendly fabrics in our collections. From organic cotton to recycled polyester and innovative plant-based materials, every fabric is chosen for its environmental impact and quality.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Ethical Manufacturing</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our manufacturing partners provide safe working conditions, fair wages, and respect workers' rights. We conduct regular audits to ensure compliance with international labor standards.
              </p>
            </div>
          </div>

          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-2xl font-light text-foreground mb-6">Our Impact Goals</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-light text-primary mb-2">80%</div>
                <p className="text-sm text-muted-foreground">Sustainable fabric collection by 2025</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Recycled and biodegradable packaging</p>
              </div>
              <div>
                <div className="text-3xl font-light text-primary mb-2">Carbon</div>
                <p className="text-sm text-muted-foreground">Neutral shipping by 2024</p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Circular Fashion">
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in extending the life of our garments through durability, repairability, and recycling programs. Our goal is to create clothing that lasts and has value beyond its first owner.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Quality & Durability</h3>
                <p className="text-muted-foreground">
                  We craft our pieces to last. Premium fabrics, reinforced seams, and timeless designs mean your clothes stay relevant and wearable for years.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Take-Back Program</h3>
                <p className="text-muted-foreground">
                  Return your worn Cloth pieces to us. We repair, resell, or responsibly recycle them, keeping textiles out of landfills.
                </p>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Certifications & Partnerships">
          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed">
              Our commitment to sustainability is verified through partnerships with leading organizations and certifications that hold us accountable to the highest environmental and social standards.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">GOTS Certified</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">Fair Trade</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">B Corp</span>
              </div>
              <div className="h-16 w-32 bg-muted/10 rounded-lg flex items-center justify-center">
                <span className="text-xs text-muted-foreground">OEKO-TEX</span>
              </div>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Sustainability;