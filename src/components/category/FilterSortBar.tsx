import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import type { Filters } from "@/pages/Category";

interface FilterSortBarProps {
  filtersOpen: boolean;
  setFiltersOpen: (open: boolean) => void;
  itemCount: number;
  onFilterChange: (filters: Filters) => void;
  currentFilters: Filters;
}

const FilterSortBar = ({ filtersOpen, setFiltersOpen, itemCount, onFilterChange, currentFilters }: FilterSortBarProps) => {
  const [localFilters, setLocalFilters] = useState<Filters>(currentFilters);

  const categories = ["Tops", "Bottoms", "Dresses", "Outerwear"];
  const priceRanges = ["GH₵50 - GH₵300", "GH₵300 - GH₵800", "GH₵800 - GH₵2,000"];
  const fabrics = ["Cotton", "Polyester", "Blend", "Silk", "Wool", "Linen", "Nylon", "Spandex", "Cashmere", "Merino", "Organic"];
  const fits = ["Regular", "Slim", "Loose"];
  const necklines = ["Crew", "V-Neck", "Hooded", "Scoop"];
  const colors = ["Black", "White", "Navy", "Red", "Blue", "Green", "Pink", "Purple", "Gray", "Brown"];

  const toggleFilter = (filterType: keyof Omit<Filters, 'sortBy'>, value: string) => {
    const updatedArray = localFilters[filterType].includes(value)
      ? localFilters[filterType].filter(item => item !== value)
      : [...localFilters[filterType], value];
    
    const newFilters = { ...localFilters, [filterType]: updatedArray };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSortChange = (value: string) => {
    const newFilters = { ...localFilters, sortBy: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    const clearedFilters: Filters = {
      categories: [],
      priceRanges: [],
      fabrics: [],
      fits: [],
      necklines: [],
      colors: [],
      sortBy: "featured"
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <>
      <section className="w-full px-6 mb-8 border-b border-border pb-4">
        <div className="flex justify-between items-center">
          <p className="text-sm font-light text-muted-foreground">
            {itemCount} items
          </p>
          
          <div className="flex items-center gap-4">
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="font-light hover:bg-transparent"
                >
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background border-none shadow-none overflow-y-auto">
                <SheetHeader className="mb-6 border-b border-border pb-4">
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-lg font-light">Filters</SheetTitle>
                    {(localFilters.categories.length > 0 || localFilters.priceRanges.length > 0 || 
                      localFilters.fabrics.length > 0 || localFilters.fits.length > 0 || 
                      localFilters.necklines.length > 0 || localFilters.colors.length > 0) && (
                      <button
                        onClick={clearAllFilters}
                        className="text-xs font-light text-foreground hover:text-muted-foreground transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </SheetHeader>
                
                <div className="space-y-8">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-3">
                          <Checkbox 
                            id={category} 
                            checked={localFilters.categories.includes(category)}
                            onCheckedChange={() => toggleFilter('categories', category)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={category} className="text-sm font-light text-foreground cursor-pointer">
                            {category}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  {/* Price Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Price</h3>
                    <div className="space-y-3">
                      {priceRanges.map((range) => (
                        <div key={range} className="flex items-center space-x-3">
                          <Checkbox 
                            id={range} 
                            checked={localFilters.priceRanges.includes(range)}
                            onCheckedChange={() => toggleFilter('priceRanges', range)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={range} className="text-sm font-light text-foreground cursor-pointer">
                            {range}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  {/* Fabric Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Fabric</h3>
                    <div className="space-y-3">
                      {fabrics.map((fabric) => (
                        <div key={fabric} className="flex items-center space-x-3">
                          <Checkbox 
                            id={fabric} 
                            checked={localFilters.fabrics.includes(fabric)}
                            onCheckedChange={() => toggleFilter('fabrics', fabric)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={fabric} className="text-sm font-light text-foreground cursor-pointer">
                            {fabric}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  {/* Fit Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Fit</h3>
                    <div className="space-y-3">
                      {fits.map((fit) => (
                        <div key={fit} className="flex items-center space-x-3">
                          <Checkbox 
                            id={fit} 
                            checked={localFilters.fits.includes(fit)}
                            onCheckedChange={() => toggleFilter('fits', fit)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={fit} className="text-sm font-light text-foreground cursor-pointer">
                            {fit}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  {/* Neckline Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Neckline</h3>
                    <div className="space-y-3">
                      {necklines.map((neckline) => (
                        <div key={neckline} className="flex items-center space-x-3">
                          <Checkbox 
                            id={neckline} 
                            checked={localFilters.necklines.includes(neckline)}
                            onCheckedChange={() => toggleFilter('necklines', neckline)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={neckline} className="text-sm font-light text-foreground cursor-pointer">
                            {neckline}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  {/* Color Filter */}
                  <div>
                    <h3 className="text-sm font-light mb-4 text-foreground">Color</h3>
                    <div className="space-y-3">
                      {colors.map((color) => (
                        <div key={color} className="flex items-center space-x-3">
                          <Checkbox 
                            id={color} 
                            checked={localFilters.colors.includes(color)}
                            onCheckedChange={() => toggleFilter('colors', color)}
                            className="border-border data-[state=checked]:bg-foreground data-[state=checked]:border-foreground" 
                          />
                          <Label htmlFor={color} className="text-sm font-light text-foreground cursor-pointer">
                            {color}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator className="border-border" />

                  <div className="flex flex-col gap-2 pt-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setFiltersOpen(false)}
                      className="w-full border-none hover:bg-transparent hover:underline font-normal text-left justify-start"
                    >
                      Show Results
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Select value={localFilters.sortBy} onValueChange={handleSortChange}>
              <SelectTrigger className="w-auto border-none bg-transparent text-sm font-light shadow-none rounded-none pr-2">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="shadow-none border-none rounded-none bg-background">
                <SelectItem value="featured" className="hover:bg-transparent hover:underline data-[state=checked]:bg-transparent data-[state=checked]:underline pl-2 [&>span:first-child]:hidden">Featured</SelectItem>
                <SelectItem value="price-low" className="hover:bg-transparent hover:underline data-[state=checked]:bg-transparent data-[state=checked]:underline pl-2 [&>span:first-child]:hidden">Price: Low to High</SelectItem>
                <SelectItem value="price-high" className="hover:bg-transparent hover:underline data-[state=checked]:bg-transparent data-[state=checked]:underline pl-2 [&>span:first-child]:hidden">Price: High to Low</SelectItem>
                <SelectItem value="newest" className="hover:bg-transparent hover:underline data-[state=checked]:bg-transparent data-[state=checked]:underline pl-2 [&>span:first-child]:hidden">Newest</SelectItem>
                <SelectItem value="name" className="hover:bg-transparent hover:underline data-[state=checked]:bg-transparent data-[state=checked]:underline pl-2 [&>span:first-child]:hidden">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>
    </>
  );
};

export default FilterSortBar;