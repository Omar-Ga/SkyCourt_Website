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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-32 pb-16 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            {t('dining_title')}
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            {t('dining_subtitle')}
          </p>
        </div>

        <EateryLogoGrid
          eateries={eateries}
          onEateryClick={setSelectedEatery}
        />
      </main>

      <Footer />

      <AnimatePresence>
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
