import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const serviceImages = [
    "/services pics/kids_area.jpeg",
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];
  const services = t('services', { returnObjects: true }) as { title: string, description: string }[];

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-background section-animate", { 'in-view': inView })}
    >
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('our_services')}
        </h2>
        
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {services.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 mx-4">
                <div className="skycourt-card group cursor-pointer">
                  <div className="relative h-80 overflow-hidden rounded-t-lg">
                    <img
                      src={serviceImages[index]}
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