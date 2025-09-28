import { Calendar, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const NewsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const newsImages = [
    "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
    "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
    "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
  ];
  const news = (t('news', { returnObjects: true }) as { date: string, title: string, excerpt: string }[]).map((item, index) => ({
    ...item,
    image: newsImages[index],
  }));

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 section-animate", { 'in-view': inView })}
    >
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('latest_news')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('stay_informed')}
          </p>
        </div>
        
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {news.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 mx-4">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(item.date)}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-red-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                    <button className="flex items-center text-red-700 font-medium hover:text-red-800 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default NewsSection;