import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex space-x-2">
      <Button 
        variant={i18n.language === 'en' ? 'secondary' : 'ghost'}
        onClick={() => changeLanguage('en')}
      >
        English
      </Button>
      <Button 
        variant={i18n.language === 'ar' ? 'secondary' : 'ghost'}
        onClick={() => changeLanguage('ar')}
      >
        العربية
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
