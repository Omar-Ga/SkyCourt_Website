import React from 'react';
import './InfiniteScroller.css';

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
  return (
    <div className="scroller" data-direction={direction} data-speed={speed}>
      <div className="scroller__inner">
        {[...items, ...items].map((item, index) => (
          <div className="brand-card" key={index}>
            <img src={item.image} alt={item.name} className="brand-image" />
            <span className="brand-name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroller;
