import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Size Guide" 
          subtitle="Find your perfect fit with our comprehensive sizing guide"
        />
        
        <ContentSection title="Clothing Size Chart">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">How to Take Your Measurements</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Chest/Bust</h4>
                  <p className="text-muted-foreground">Measure around the fullest part of your chest, keeping the tape relaxed and parallel to the ground.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Waist</h4>
                  <p className="text-muted-foreground">Measure around your natural waistline, where your pants typically sit. Keep the tape comfortable, not tight.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Length</h4>
                  <p className="text-muted-foreground">For tops, measure from the shoulder seam to desired length. For bottoms, measure from waist to ankle.</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">Size</th>
                    <th className="border border-border p-3 text-left font-light">Chest (cm)</th>
                    <th className="border border-border p-3 text-left font-light">Waist (cm)</th>
                    <th className="border border-border p-3 text-left font-light">Length (cm)</th>
                    <th className="border border-border p-3 text-left font-light">Fit Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { size: "XS", chest: "79-84", waist: "61-66", length: "62-65", notes: "Extra small, petite fit" },
                    { size: "S", chest: "84-89", waist: "66-71", length: "65-68", notes: "Small, classic fit" },
                    { size: "M", chest: "89-94", waist: "71-76", length: "68-71", notes: "Medium, regular fit" },
                    { size: "L", chest: "94-99", waist: "76-81", length: "71-74", notes: "Large, relaxed fit" },
                    { size: "XL", chest: "99-104", waist: "81-86", length: "74-77", notes: "Extra large, loose fit" },
                    { size: "XXL", chest: "104-109", waist: "86-91", length: "77-80", notes: "Double extra large" }
                  ].map((sizeRow, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3 font-medium">{sizeRow.size}</td>
                      <td className="border border-border p-3">{sizeRow.chest}</td>
                      <td className="border border-border p-3">{sizeRow.waist}</td>
                      <td className="border border-border p-3">{sizeRow.length}</td>
                      <td className="border border-border p-3 text-sm text-muted-foreground">{sizeRow.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Fit Guide">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Regular Fit</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our regular fit provides a classic, comfortable silhouette. Perfect for everyday wear and layering.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Relaxed through the body</li>
                  <li>✓ Standard armhole placement</li>
                  <li>✓ Versatile for all body types</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Slim Fit</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our slim fit follows the natural contours of the body for a tailored look.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Fitted through shoulders</li>
                  <li>✓ Tapered at waist</li>
                  <li>✓ Modern, streamlined look</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Loose Fit</h3>
              <div className="space-y-3">
                <p className="text-muted-foreground">
                  Our loose fit offers maximum comfort and freedom of movement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Relaxed throughout</li>
                  <li>✓ Generous fit</li>
                  <li>✓ Comfortable and effortless</li>
                </ul>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Still unsure about your size? Our style consultants are here to help. You can download our printable size guide or reach out to our customer care team for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download PDF Guide
              </Button>
              <Button className="rounded-none">
                Contact Customer Care
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;