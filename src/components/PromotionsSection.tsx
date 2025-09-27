import { Tag, Gift, Percent } from "lucide-react";

const PromotionsSection = () => {
  const promotions = [
    {
      icon: Percent,
      title: "Weekend Sale",
      description: "Up to 50% off on selected fashion brands",
      validity: "Valid until Jan 31, 2025",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Gift,
      title: "Family Package",
      description: "Spend 500 EGP and get a free kids meal",
      validity: "Valid on weekends",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Tag,
      title: "New Customer Offer",
      description: "10% discount on your first purchase",
      validity: "Show this offer at checkout",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Current Promotions
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't miss out on these amazing deals and offers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-700 hover:shadow-xl transition-shadow">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 ${promo.color}`}>
                <promo.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
              <p className="text-gray-600 mb-3">{promo.description}</p>
              <p className="text-sm text-muted-foreground italic">{promo.validity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;