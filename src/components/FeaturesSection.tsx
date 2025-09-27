import { ShoppingBag, MapPin, Clock, Shield, Wifi, Car } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Shopping",
      description: "Discover over 50 premium brands and local favorites all under one roof"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Conveniently located in the heart of the city with easy access"
    },
    {
      icon: Clock,
      title: "Extended Hours",
      description: "Open daily from 10 AM to 11 PM, with 24/7 supermarket access"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "24/7 security and family-friendly atmosphere for peace of mind"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "Stay connected with complimentary high-speed internet throughout"
    },
    {
      icon: Car,
      title: "Free Parking",
      description: "Ample parking spaces available at no cost for all visitors"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose SkyCourt?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience shopping like never before with our world-class amenities and services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4 group-hover:bg-red-200 transition-colors">
                <feature.icon className="w-8 h-8 text-red-700" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;