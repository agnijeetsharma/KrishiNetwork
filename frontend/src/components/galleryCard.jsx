import { useState, useEffect } from "react";
import { Gallery_image1, Gallery_image2, Gallery_image3 } from "../constant";

const GalleryImages = [
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
  Gallery_image1,
  Gallery_image2,
  Gallery_image3,
 
];

export const GalleryCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
       {const nextIndex = (prevIndex + 1) % GalleryImages.length;
        return nextIndex;}
      );
      if(currentIndex+3>=GalleryImages.length){
        setCurrentIndex(0)
      }
    }, 3000); 
  
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="gallery-section"className="text-center mt-10 mx-10 ">
   
      <h1 className="text-green-700 font-semibold text-3xl">Gallery</h1>
      <div className="overflow-hidden mt-20 mb-20">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
          //   transform: `translateX(-${((currentIndex) * 100) / 3}%)`,
            width: `${GalleryImages.length * (100 / 3)}%`,
          }}
        >
          {GalleryImages.map((image, index) => (
            
            <div key={index} className="h-64 w-1/3 p-2 ">
              <img
                alt={`gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
                src={image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
