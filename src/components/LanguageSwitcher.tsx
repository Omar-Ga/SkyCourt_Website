import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher = ({ isScrolled }: LanguageSwitcherProps) => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages
            className={cn(
              'h-[1.2rem] w-[1.2rem] transition-colors duration-300',
              isScrolled ? 'text-white' : 'text-red-700'
            )}
          />
          <span className="sr-only">{t('toggle_language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage('en')}>
          <span className="mr-2">🇺🇸</span>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage('ar')}>
          <span className="mr-2">🇸🇦</span>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;