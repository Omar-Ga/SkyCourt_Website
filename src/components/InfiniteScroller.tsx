import React from 'react';
import './InfiniteScroller.css';
import { useTranslation } from 'react-i18next';

interface Brand {
  name: string;
  image: string;
}

interface InfiniteScrollerProps {
  items: Brand[];
  direction: 'left' | 'right';
  speed: 'slow' | 'normal' | 'fast';
}

const InfiniteScroller: React.FC<InfiniteScrollerProps> = ({ items, direction, speed }) => {
  const { i18n } = useTranslation();

  return (
    <div className="scroller" data-direction={direction} data-speed={speed} data-lang={i18n.language}>
      <div className="scroller__inner">
        {[...items, ...items].map((item, index) => (
          <div className="w-[400px] h-[400px] flex flex-col items-center justify-center p-4 m-2 bg-card rounded-lg shadow-lg" key={index}>
            <img src={item.image} alt={item.name} className="w-full h-[90%] object-cover rounded-lg" />
            <span className="mt-4 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
