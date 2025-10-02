import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Eatery } from '@/data/eateries';

interface EateryLogoGridProps {
  eateries: Eatery[];
  onEateryClick: (eatery: Eatery) => void;
}

export const EateryLogoGrid = ({ eateries, onEateryClick }: EateryLogoGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {eateries.map((eatery) => (
        <motion.div
          key={eatery.id}
          layoutId={`logo-${eatery.id}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onEateryClick(eatery)}
          className="cursor-pointer"
        >
          <Card className="group aspect-square overflow-hidden bg-white p-4 transition-shadow hover:shadow-xl">
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={eatery.logoUrl}
                alt={eatery.name}
                className="h-full w-full object-contain transition-transform group-hover:scale-110"
              />
            </div>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
