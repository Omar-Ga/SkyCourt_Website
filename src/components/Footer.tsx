import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-red-700">
          SkyCourt welcomes you
        </h2>
        
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-red-700 font-bold text-2xl">
              SkyCourt
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 SkyCourt. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;