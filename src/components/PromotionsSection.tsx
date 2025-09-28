import { Store, Utensils, Mountain } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const PromotionsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const promotionIcons = [Store, Utensils, Mountain];
  const promotions = t('promotions', { returnObjects: true }) as { title: string, description: string, validity: string }[];

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-background section-animate", { 'in-view': inView })}
    >
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('mall_highlights')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('discover_the_best')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {promotions.map((promo, index) => {
            const Icon = promotionIcons[index];
            const colors = ["bg-blue-100 text-blue-700", "bg-green-100 text-green-700", "bg-purple-100 text-purple-700"];
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-700 hover:shadow-xl transition-shadow">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${colors[index]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-3">{promo.description}</p>
                <p className="text-sm text-muted-foreground italic">{promo.validity}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;