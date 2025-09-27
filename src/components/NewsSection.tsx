import { Calendar, ArrowRight } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      date: "2025-01-15",
      title: "New Fashion Brands Coming to SkyCourt",
      excerpt: "We're excited to announce the arrival of three new international fashion brands this spring.",
      image: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      date: "2025-01-10",
      title: "Extended Weekend Hours",
      excerpt: "Starting this month, we're extending our weekend hours to better serve our customers.",
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    },
    {
      date: "2025-01-05",
      title: "Kids Zone Expansion Complete",
      excerpt: "Our newly expanded kids area now features more activities and enhanced safety measures.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest News & Updates
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay informed about the latest happenings at SkyCourt
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {formatDate(item.date)}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <button className="flex items-center text-red-700 font-medium hover:text-red-800 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;