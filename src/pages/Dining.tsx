import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';
import { EateryLogoGrid } from '@/components/EateryLogoGrid';
import { EateryDetailModal } from '@/components/EateryDetailModal';
import { eateries, Eatery } from '@/data/eateries';

const Dining = () => {
  const { t } = useTranslation();
  const [selectedEatery, setSelectedEatery] = useState<Eatery | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-lime-50/30">
      <Header startScrolled />

      <main className="mx-auto max-w-7xl px-6 pt-36 pb-20 sm:px-8 lg:px-12">
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
            {t('dining_title')}
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-600 md:text-2xl font-light">
            {t('dining_subtitle')}
          </p>
          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-lime-500 to-lime-600"></div>
        </div>

        <EateryLogoGrid
          eateries={eateries}
          onEateryClick={setSelectedEatery}
        />
      </main>

      <Footer />

      <AnimatePresence initial={false}>
        {selectedEatery && (
          <EateryDetailModal
            eatery={selectedEatery}
            onClose={() => setSelectedEatery(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dining;
