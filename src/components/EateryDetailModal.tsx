import { motion } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Eatery } from '@/data/eateries';

interface EateryDetailModalProps {
  eatery: Eatery;
  onClose: () => void;
}

const CARD_RADIUS = 320;

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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 rounded-full bg-white/10 p-3 text-white transition-all hover:bg-white/20 hover:scale-110"
        aria-label="Close"
      >
        <X className="h-7 w-7" />
      </button>

      <div className="relative flex items-center justify-center min-h-[600px]" onClick={(e) => e.stopPropagation()}>
        <motion.div
          layoutId={`logo-${eatery.id}`}
          className="relative z-20 flex h-56 w-56 items-center justify-center rounded-3xl bg-white p-8 shadow-2xl ring-4 ring-white/20"
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
                staggerChildren: 0.12,
                delayChildren: 0.3
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
                    scale: 0.3,
                    x: 0,
                    y: 0
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    x: x - 140,
                    y: y - 160
                  }
                }}
                transition={{
                  type: 'spring',
                  stiffness: 120,
                  damping: 18
                }}
              >
                <Card className="h-[320px] w-[280px] overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow">
                  <img
                    src={detail.imageUrl}
                    alt={t(detail.descriptionKey)}
                    className="h-[200px] w-full object-cover"
                  />
                  <div className="p-5 bg-white">
                    <p className="text-sm leading-relaxed text-gray-700 font-medium">
                      {t(detail.descriptionKey)}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 120 }}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2"
        >
          <a
            href={`tel:${eatery.phone}`}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-lime-600 to-lime-700 px-8 py-4 text-base font-bold text-white shadow-2xl transition-all hover:scale-105 hover:shadow-lime-500/50 min-w-[280px] justify-center"
          >
            <Phone className="h-5 w-5" />
            <span className="whitespace-nowrap">{eatery.phone}</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};
