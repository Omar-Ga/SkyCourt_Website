import InfiniteScroller from "./InfiniteScroller";

const BrandsSection = () => {
  const brands = [
    { name: "Ammar Auto", image: "/brands/ammar auto edited.png" },
    { name: "B-Tech", image: "/brands/b tech edited.png" },
    { name: "Balbaa Village", image: "/brands/balbaa village edited.png" },
    { name: "Blaban", image: "/brands/blaban edited.png" },
    { name: "Bright Store", image: "/brands/bright store edited.png" },
    { name: "Dream 2000", image: "/brands/dream 2000 edited.png" },
    { name: "Fathalla Market", image: "/brands/fathalla edited.png" },
    { name: "Ftirty", image: "/brands/feterty edited.png" },
    { name: "Donia El Gambary", image: "/brands/gambary edited.png" },
    { name: "Hamed El Basiony", image: "/brands/hamed luxury edited.png" },
    { name: "Hans", image: "/brands/hans edited.png" },
    { name: "Hardees", image: "/brands/hardees edited.png" },
    { name: "KFC", image: "/brands/KFC edited.png" },
    { name: "Khatab", image: "/brands/khatab edited.png" },
    { name: "Pizza Hut", image: "/brands/pizza hut edited.png" },
    { name: "Ragab Perfumes", image: "/brands/ragab edited.png" },
    { name: "Raya", image: "/brands/raya edited.png" },
    { name: "Smart Furniture", image: "/brands/smart edited.png" },
    { name: "El Tahrir", image: "/brands/tahrir edited.png" },
    { name: "Zizo & Lavish", image: "/brands/zizo edited.png" },
  ];

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