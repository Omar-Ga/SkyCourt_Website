import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher, { LanguageSwitcherProps } from './LanguageSwitcher';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const Header = () => {
  const { t, i18n } = useTranslation();
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
              className="h-[90px] w-auto transition-colors duration-300"
            />
          </div>
          <nav className="hidden lg:flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                className={cn(
                  'font-bold transition-colors duration-300 rounded-full',
                  isScrolled
                    ? 'text-red-700 hover:bg-red-700/10 hover:text-red-700'
                    : 'text-white hover:bg-white/10 hover:text-white'
                )}
              >
                {t('home')}
              </Button>
            </Link>
            <Link to="/dining">
              <Button
                variant="ghost"
                className={cn(
                  'font-bold transition-colors duration-300 rounded-full',
                  isScrolled
                    ? 'text-red-700 hover:bg-red-700/10 hover:text-red-700'
                    : 'text-white hover:bg-white/10 hover:text-white'
                )}
              >
                {t('dining')}
              </Button>
            </Link>
            <LanguageSwitcher isScrolled={isScrolled} />
          </nav>
          {/* Mobile menu */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    'rounded-full transition-colors duration-300',
                    isScrolled
                      ? 'text-red-700 hover:bg-red-700/10 hover:text-red-700'
                      : 'text-white hover:bg-white/10 hover:text-white'
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="!h-10 !w-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side={i18n.language === 'ar' ? 'left' : 'right'} className="flex h-full w-1/2 flex-col p-0">
                <div className="flex-1 p-6">
                  <nav className="space-y-2">
                    <SheetClose asChild>
                      <Link to="/">
                        <Button variant="ghost" className="w-full justify-start text-base">
                          {t('home')}
                        </Button>
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/dining">
                        <Button variant="ghost" className="w-full justify-start text-base">
                          {t('dining')}
                        </Button>
                      </Link>
                    </SheetClose>
                    {/** Future pages go here */}
                  </nav>
                </div>
                <div className="border-t p-6">
                  <LanguageSwitcher isScrolled={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;