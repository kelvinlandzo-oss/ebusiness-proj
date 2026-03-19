const LargeHero = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="w-full aspect-[16/9] mb-3 overflow-hidden">
        <img 
          src="/images/large-hero.png" 
          alt="Fashion collection showcase" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="">
        <h2 className="text-sm font-normal text-foreground mb-1">
          New Collection
        </h2>
        <p className="text-sm font-light text-foreground">
          Discover our latest editorial selections and seasonal highlights
        </p>
      </div>
    </section>
  );
};

export default LargeHero;