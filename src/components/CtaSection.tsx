import MagnetLines from "@/components/ui/MagnetLines";

const CtaSection = () => {
  return (
    <section 
      className="relative py-96 px-4 sm:px-6 lg:px-8 text-white overflow-hidden bg-black"
    >
      <MagnetLines
        className="absolute inset-0 w-full h-full opacity-40"
        rows={20}
        columns={20}
        containerSize="100%"
        lineColor="white"
        lineWidth="0.5vmin"
        lineHeight="3vmin"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          SkyCourt welcomes you
        </h2>
      </div>
    </section>
  );
};

export { CtaSection };
