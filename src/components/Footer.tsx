import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-red-700 font-bold text-2xl">
              SkyCourt
            </div>
            <div className="text-sm text-white">
              © 2025 SkyCourt. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };