import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';
import { RotatingText } from '@/components/ui/shadcn-io/rotating-text';

const StatsSection = () => {
  const { t } = useTranslation();
  const rotatingTexts = t('rotating_texts', { returnObjects: true }) as string[];

  return (
    <section 
      className={cn("relative py-5 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden")}
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Central Statistics Text */}
        <div className="relative z-10 text-center py-10">
          <div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mx-auto">
              {t('join_thousands')}{" "}
              <RotatingText text={rotatingTexts} className="text-red-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;