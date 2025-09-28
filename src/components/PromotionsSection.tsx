import { Store, Utensils, Mountain } from "lucide-react";

const PromotionsSection = () => {
  const promotions = [
    {
      icon: Store,
      title: "Diverse Retailers",
      description: "Explore a wide array of international and local brands.",
      validity: "Always something new to discover",
      color: "bg-blue-100 text-blue-700"
    },
    {
      icon: Utensils,
      title: "Culinary Delights",
      description: "Savor exquisite flavors from around the world.",
      validity: "Open daily for your enjoyment",
      color: "bg-green-100 text-green-700"
    },
    {
      icon: Mountain,
      title: "Scenic Views & Ambiance",
      description: "Enjoy breathtaking views and a relaxing atmosphere throughout the mall.",
      validity: "Perfect for a leisurely day out",
      color: "bg-purple-100 text-purple-700"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mall Highlights
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover the best of SkyCourt
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
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