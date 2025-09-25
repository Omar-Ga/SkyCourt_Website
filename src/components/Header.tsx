import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Header = () => {
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
    <header className="fixed top-0 left-0 right-0 z-50 h-16">
      {/* Animated Background Banner */}
      <div
        className={cn(
          'absolute inset-0 h-16 bg-red-700 shadow-lg transition-transform duration-500 ease-in-out',
          isScrolled ? 'translate-y-0' : '-translate-y-full'
        )}
      />

      {/* Persistent Content (Logo & Actions) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <div
              className={cn(
                'font-bold text-2xl tracking-tight transition-colors duration-300',
                isScrolled ? 'text-white' : 'text-red-700'
              )}
            >
              SkyCourt
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button
                variant="ghost"
                className={cn(
                  'transition-colors duration-300 rounded-full',
                  isScrolled
                    ? 'text-white hover:bg-white/10 hover:text-white'
                    : 'text-red-700 hover:bg-red-700/10 hover:text-red-700'
                )}
              >
                Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;