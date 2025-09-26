import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer 
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/footer_image.webp')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          SkyCourt welcomes you
        </h2>
        
        <div className="mt-16 pt-8 border-t border-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="font-bold text-2xl">
              SkyCourt
            </div>
            <div className="text-sm text-gray-300">
              © 2025 SkyCourt. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;