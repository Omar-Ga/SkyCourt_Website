import InfiniteScroller from "./InfiniteScroller";
import { brands } from "@/data/brands";

const BrandsSection = () => {
  const firstRow = brands.slice(0, 10);
  const secondRow = brands.slice(10, 20);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Iconic brands at SkyCourt
        </h2>
        
        <div className="flex flex-col gap-6">
          <InfiniteScroller
            items={firstRow}
            direction="right"
            speed="normal"
          />
          <InfiniteScroller
            items={secondRow}
            direction="left"
            speed="normal"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;