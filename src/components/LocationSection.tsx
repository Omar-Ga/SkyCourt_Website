import { MapPin, Clock, Mail } from "lucide-react";
import LightRays from "@/components/LightRays";

const LocationSection = () => {
  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-black text-white overflow-hidden">
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
            Visit Us Today
          </h2>
          <p className="text-lg text-gray-300">
            Find us in the heart of the city - easily accessible by car or public transport
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Address</h3>
                <p className="text-gray-400">
                  sidi abdelrehman - al sahel al shamaly<br />
                  alexandria road - the 137 kilo road<br />
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
                <div className="text-gray-400 space-y-1">
                  <p>Open 24/7 Saturday through Friday</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">info@skycourt.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;