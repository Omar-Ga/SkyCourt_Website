import { useEffect, useRef, useState } from "react";
import RotatingText from "./ui/RotatingText";

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-5 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Central Statistics Text */}
        <div className="relative z-10 text-center py-10">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mx-auto">
              Join thousands of visitors and shop around{" "}
              <RotatingText 
                texts={['50+ brands', '50+ centers', '1 unforgettable experience']}
                mainClassName="text-red-700 inline-flex"
                splitBy="words"
                rotationInterval={3000}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;