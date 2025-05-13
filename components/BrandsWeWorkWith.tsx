"use client";
import React, { useEffect, useRef, useState } from 'react';

const BrandsWeWorkWith = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const brands = [
    { name: 'Brand 1', logo: '/logo1 (1).png' },
    { name: 'Brand 2', logo: '/logo1 (2).png' },
    { name: 'Brand 3', logo: '/logo1 (3).png' },
    { name: 'Brand 4', logo: '/logo1 (4).png' },
    { name: 'Brand 5', logo: '/logo1 (5).png' },
    { name: 'Brand 5', logo: '/logo1 (6).png' },
    { name: 'Brand 5', logo: '/logo1 (7).png' },
    { name: 'Brand 5', logo: '/logo1 (8).png' },
    { name: 'Brand 5', logo: '/logo1 (9).png' },
    { name: 'Brand 5', logo: '/logo1 (10).png' },
    { name: 'Brand 5', logo: '/logo1 (11).png' },
    { name: 'Brand 5', logo: '/logo1 (12).png' },
    // Add more logos
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-gray-100">
    <h2 className="text-2xl mb-6 py-6">
      These brands choose{' '}
      <span className="text-purple-600 font-black">Anzi & Co</span>
    </h2>

      <div className="relative w-full overflow-hidden">
        <div
          className={`flex animate-marquee items-center ${
            isScrolling ? 'pause' : ''
          }`}
          style={{ width: 'max-content' }}
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-10 w-40 h-20 flex items-center justify-center"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .pause {
          animation-play-state: paused;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default BrandsWeWorkWith;
