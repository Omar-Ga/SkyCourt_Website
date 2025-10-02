import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Eatery } from '@/data/eateries';

interface EateryDetailModalProps {
  eatery: Eatery;
  onClose: () => void;
}

const CARD_RADIUS = 280;

export const EateryDetailModal = ({ eatery, onClose }: EateryDetailModalProps) => {
  const { t } = useTranslation();

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * CARD_RADIUS,
      y: Math.sin(angle) * CARD_RADIUS
    };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 z-50 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <motion.div
          layoutId={`logo-${eatery.id}`}
          className="relative z-10 flex h-48 w-48 items-center justify-center rounded-2xl bg-white p-6 shadow-2xl"
        >
          <img
            src={eatery.logoUrl}
            alt={eatery.name}
            className="h-full w-full object-contain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
        >
          {eatery.details.map((detail, index) => {
            const { x, y } = calculatePosition(index, eatery.details.length);

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%'
                }}
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5,
                    x: 0,
                    y: 0
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    x: x - 120,
                    y: y - 140
                  }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 100,
                  damping: 15
                }}
              >
                <Card className="h-[280px] w-[240px] overflow-hidden shadow-xl">
                  <img
                    src={detail.imageUrl}
                    alt={t(detail.descriptionKey)}
                    className="h-[180px] w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{t(detail.descriptionKey)}</p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 text-center"
        >
          <a
            href={`tel:${eatery.phone}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-lg font-semibold text-gray-900 shadow-lg transition-transform hover:scale-105"
          >
            <span>{t('phone')}:</span>
            <span className="text-lime-700">{eatery.phone}</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
