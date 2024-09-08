import { useEffect, useState } from "react";
import { Aboutus_image } from "../constant";

const testimonials = [
  { name: "John Doe", content: "Great service and amazing experience!" },
  { name: "Jane Smith", content: "I love how easy it was to use!" },
  { name: "Sam Wilson", content: "Exceptional customer support." },
  { name: "John Doe", content: "Great service and amazing experience!" },
  { name: "Jane Smith", content: "I love how easy it was to use!" },
  { name: "Sam Wilson", content: "Exceptional customer support." },
];

export const TestimonialCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div id="testimonials-section"
      className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${Aboutus_image})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 w-full max-w-4xl mx-auto p-8 bg-white bg-opacity-50 rounded-lg shadow-lg">
        <div className="overflow-hidden">
            <h1 className="text-3xl font-semibold text-green-800 w-full text-center"
            >Testimonials</h1>
          <div
            className="whitespace-nowrap transition-transform ease-linear duration-1000"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="inline-block w-full text-center whitespace-normal px-8 py-6"
              >
                <p className="text-xl text-gray-800 font-semibold">
                  {testimonial.content}
                </p>
                <h5 className="text-lg font-medium text-green-700 mt-4">
                  - {testimonial.name}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
