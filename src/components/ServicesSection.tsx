import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: "/services pics/kids_area.jpeg",
      title: "Safe & Fun Kids Area",
      description: "Enjoy peace of mind with our fully enclosed and supervised play space for your children."
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "24-Hour Supermarket",
      description: "All your needs, anytime. Our supermarket is open 24/7 for your convenience."
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Cafes & Eateries",
      description: "From a quick coffee to a relaxing lunch, choose from our diverse selection of cafes."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {services.map((item) => (
              <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="skycourt-card group cursor-pointer">
                  <div className="relative h-80 overflow-hidden rounded-t-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ServicesSection;