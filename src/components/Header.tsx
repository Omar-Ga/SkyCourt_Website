import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-24">
      {/* Animated Background Banner */}
      <div
        className={cn(
          'absolute inset-0 h-24 bg-gradient-to-r from-[#65a30d] to-[#581c87] shadow-lg transition-transform duration-500 ease-in-out',
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        )}
      />

      {/* Persistent Content (Logo & Actions) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <img 
              src="/logo/skycourt_logo.svg" 
              alt="SkyCourt Logo" 
              className="h-[120px] w-auto transition-colors duration-300"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                className={cn(
                  'font-bold transition-colors duration-300 rounded-full',
                  isScrolled
                    ? 'text-white hover:bg-white/10 hover:text-white'
                    : 'text-red-700 hover:bg-red-700/10 hover:text-red-700'
                )}
              >
                {t('home')}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;