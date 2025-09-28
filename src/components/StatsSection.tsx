import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import RotatingText from "./ui/RotatingText";
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  const rotatingTexts = t('rotating_texts', { returnObjects: true }) as string[];

  return (
    <section 
      ref={ref}
      className={cn("relative py-5 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden section-animate", { 'in-view': inView })}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Central Statistics Text */}
        <div className="relative z-10 text-center py-10">
          <div>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mx-auto">
              {t('join_thousands')}{" "}
              <RotatingText 
                texts={rotatingTexts}
                mainClassName="text-red-700 inline-flex"
                splitBy="words"
                rotationInterval={3000}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;