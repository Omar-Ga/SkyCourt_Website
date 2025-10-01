import { cn } from '@/lib/utils';
import RotatingText from "@/components/RotatingText";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

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
            <motion.p 
              layout
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mx-auto flex items-center justify-center"
            >
              <motion.span layout>{t('join_thousands')}{" "}</motion.span>
              <RotatingText 
                texts={rotatingTexts}
                mainClassName="bg-red-700 text-white px-2 py-1 rounded-md inline-flex justify-center overflow-hidden"
                splitLevelClassName="overflow-hidden"
                splitBy="characters"
                staggerDuration={0.025}
                rotationInterval={3000}
              />
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default StatsSection;