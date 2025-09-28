import InfiniteScroller from "./InfiniteScroller";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const BrandsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const brandImages = [
    "/brands/ammar auto edited.webp",
    "/brands/b tech edited.webp",
    "/brands/balbaa village edited.webp",
    "/brands/blaban edited.webp",
    "/brands/bright store edited.webp",
    "/brands/dream 2000 edited.webp",
    "/brands/fathalla edited.webp",
    "/brands/feterty edited.webp",
    "/brands/gambary edited.webp",
    "/brands/hamed luxury edited.webp",
    "/brands/hans edited.webp",
    "/brands/hardees edited.webp",
    "/brands/KFC edited.webp",
    "/brands/khatab edited.webp",
    "/brands/pizza hut edited.webp",
    "/brands/ragab edited.webp",
    "/brands/raya edited.webp",
    "/brands/smart edited.webp",
    "/brands/tahrir edited.webp",
    "/brands/zizo edited.webp",
  ];
  const brands = (t('brands', { returnObjects: true }) as { name: string }[]).map((brand, index) => ({
    ...brand,
    image: brandImages[index],
  }));

  const firstRow = brands.slice(0, 10);
  const secondRow = brands.slice(10, 20);

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-muted/30 section-animate", { 'in-view': inView })}
    >
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('iconic_brands')}
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