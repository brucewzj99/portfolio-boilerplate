'use client';
import { useState } from 'react';
import profileData from '../../data/profile.json';

export default function GalleryPage() {
  const { gallery } = profileData;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelectImage = (index: number) => {
    setSelectedIndex(index);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null && selectedIndex < gallery.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
      <h1 className="text-3xl font-bold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => handleSelectImage(index)}
          >
            <div className="w-full h-0 pb-[100%] relative overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm">{item.location}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative bg-white p-4 max-w-3xl w-auto mx-4 md:mx-0 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedIndex > 0 && (
              <button
                onClick={handlePrev}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-25 rounded-full px-2 py-1"
              >
                &#10094;
              </button>
            )}
            <img
              src={gallery[selectedIndex].image}
              alt={gallery[selectedIndex].title}
              className="object-contain max-h-[80vh] mb-4"
            />
            {selectedIndex < gallery.length - 1 && (
              <button
                onClick={handleNext}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-white text-4xl bg-black bg-opacity-25 rounded-full px-2 py-1"
              >
                &#10095;
              </button>
            )}
            <div className="text-center mt-2">
              <h2 className="text-xl font-semibold">
                {gallery[selectedIndex].title}
              </h2>
              <p className="text-sm">{gallery[selectedIndex].location}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}