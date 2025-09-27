import { MapPin, Phone, Clock, Mail } from "lucide-react";

const LocationSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Us Today
          </h2>
          <p className="text-lg text-muted-foreground">
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
                <p className="text-muted-foreground">
                  123 Main Street, City Center<br />
                  Cairo, Egypt 12345
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p className="text-muted-foreground">+20 2 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Opening Hours</h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Sunday: 10:00 AM - 11:00 PM</p>
                  <p>Supermarket: 24/7</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-red-700 mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-muted-foreground">info@skycourt.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
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