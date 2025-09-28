import { MapPin, Clock, Mail } from "lucide-react";
import LightRays from "@/components/LightRays";
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const LocationSection = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <section 
      ref={ref}
      className={cn("relative py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden section-animate", { 'in-view': inView })}
    >
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="absolute inset-0 w-full h-full z-10"
      />
      <div className="relative max-w-7xl mx-auto z-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('visit_us_today')}
          </h2>
          <p className="text-lg text-gray-300">
            {t('find_us_in_the_heart')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t('address')}</h3>
                <p className="text-gray-400" dangerouslySetInnerHTML={{ __html: t('address_details') }} />
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t('opening_hours')}</h3>
                <div className="text-gray-400 space-y-1">
                  <p>{t('opening_hours_details')}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{t('email')}</h3>
                <p className="text-gray-400">{t('email_details')}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>{t('interactive_map_coming_soon')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;