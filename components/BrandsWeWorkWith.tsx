"use client";
import React from 'react';

const BrandsWeWorkWith = () => {
  const brands = [
    { name: 'Brand 1', logo: '/logo1 (1).png' },
    { name: 'Brand 2', logo: '/logo1 (2).png' },
    { name: 'Brand 3', logo: '/logo1 (3).png' },
    { name: 'Brand 4', logo: '/logo1 (4).png' },
    { name: 'Brand 5', logo: '/logo1 (5).png' },
    { name: 'Brand 6', logo: '/logo1 (6).png' },
    { name: 'Brand 7', logo: '/logo1 (7).png' },
    { name: 'Brand 8', logo: '/logo1 (8).png' },
    { name: 'Brand 9', logo: '/logo1 (9).png' },
    { name: 'Brand 10', logo: '/logo1 (10).png' },
    { name: 'Brand 11', logo: '/logo1 (11).png' },
    { name: 'Brand 12', logo: '/logo1 (12).png' },
    // Add more logos
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full py-10 bg-gray-100">
      <h2 className="text-2xl mb-6 py-6">
        These brands choose{' '}
        <span className="text-purple-600 font-black">Anzi & Co</span>
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-8">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-40 h-20 flex items-center justify-center"
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
  );
};

export default BrandsWeWorkWith;
