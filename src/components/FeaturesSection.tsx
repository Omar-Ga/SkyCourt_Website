import { ShoppingBag, MapPin, Clock, Shield, Car, Sparkles } from "lucide-react";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const featureIcons = [ShoppingBag, MapPin, Clock, Shield, Sparkles, Car];
  const features = t('features', { returnObjects: true }) as { title: string, description: string }[];

  return (
    <section 
      ref={ref}
      className={cn("py-16 px-4 sm:px-6 lg:px-8 bg-background section-animate", { 'in-view': inView })}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('why_choose_skycourt')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience_shopping')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = featureIcons[index];
            return (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors">
                  <Icon className="w-8 h-8 text-red-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;