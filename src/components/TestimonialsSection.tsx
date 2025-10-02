import { Star } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const isMobile = useIsMobile();

  const testimonials = t('testimonials', { returnObjects: true }) as { name: string, rating: number, comment: string, location: string }[];

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 section-animate", { 'in-view': inView })}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('what_our_visitors_say')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('hear_from_our_customers')}
          </p>
        </div>
        
        <div className="overflow-hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full px-12"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                    <div className="border-t pt-4 mt-auto">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;