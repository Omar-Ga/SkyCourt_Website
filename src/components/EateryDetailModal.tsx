import { useRef, useLayoutEffect, useState } from 'react';
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
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const calculatePosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      x: Math.cos(angle) * CARD_RADIUS,
      y: Math.sin(angle) * CARD_RADIUS
    };
  };

  // Reveal the details section only after the shared layout animation settles
  const handleLayoutDone = () => {
    setIsDetailsVisible(true);
  };

  // Measure the details content height once visible, then lock to that height
  useLayoutEffect(() => {
    if (isDetailsVisible && contentRef.current) {
      const { height } = contentRef.current.getBoundingClientRect();
      // Ceil to avoid subpixel rounding causing tiny snaps
      setMeasuredHeight(Math.ceil(height));
    } else {
      setMeasuredHeight(null);
    }
  }, [isDetailsVisible, eatery.id]);

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
          className="relative z-20 flex flex-col overflow-hidden justify-start items-center rounded-3xl bg-white shadow-2xl ring-4 ring-white/20"
          onLayoutAnimationComplete={handleLayoutDone}
        >
          <div className="w-48 h-48 flex items-center justify-center p-6">
            <img
              src={eatery.logoUrl}
              alt={eatery.name}
              className="h-full w-full object-contain"
            />
          </div>
          {isDetailsVisible && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: measuredHeight ?? 0, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 120, damping: 18 }}
              className="w-full overflow-hidden"
            >
              <div ref={contentRef} className="w-full flex flex-col items-center px-6 pb-6">
                <h2 className="text-2xl leading-tight font-bold text-gray-900 mb-2 text-center">{eatery.name}</h2>
                <a
                  href={`tel:${eatery.phone}`}
                  className="inline-flex items-center justify-center gap-2 h-10 rounded-lg bg-lime-100 px-4 text-base leading-none font-medium text-lime-800 transition-colors hover:bg-lime-200"
                >
                  <Phone className="h-4 w-4" />
                  <span>{eatery.phone}</span>
                </a>
              </div>
            </motion.div>
          )}
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


      </div>
    </motion.div>
  );
};
