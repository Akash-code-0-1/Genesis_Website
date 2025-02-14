import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    subtitle: "Core fire and solution safety provider.",
    title: "Latest Fire Safety Measures",
    description: "Comprehensive and prominent rescue operators with enhanced protection tools and techniques.",
    image: "https://images.pexels.com/photos/68138/fire-danger-dangerous-fight-68138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    zoomStart: "scale-100",
    zoomEnd: "scale-110",
  },
  {
    id: 2,
    subtitle: "Emergency Response Team",
    title: "24/7 Fire Protection Services",
    description: "Professional firefighters equipped with state-of-the-art technology for rapid emergency response.",
    image: "https://images.pexels.com/photos/6587356/pexels-photo-6587356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    zoomStart: "scale-110",
    zoomEnd: "scale-100",
  },
  {
    id: 3,
    subtitle: "Safety First",
    title: "Fire Prevention Solutions",
    description: "Advanced fire prevention systems and regular safety inspections to protect your property.",
    image: "https://images.pexels.com/photos/19894925/pexels-photo-19894925/free-photo-of-fire-flames-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    zoomStart: "scale-100",
    zoomEnd: "scale-110",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[800px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute justify-center inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* Background Image with Zoom Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] ease-in-out ${index === currentSlide ? slide.zoomEnd : slide.zoomStart
                }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>



          {/* Animated Text Content */}
          {index === currentSlide && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative h-full flex items-center"
            >
              <div className="container relative mx-auto left-[14%] px-4">
                <div className="max-w-2xl space-y-4">
                  <motion.p
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-blue-500 font-medium text-xl tracking-wide"
                  >
                    {slide.subtitle}
                  </motion.p>

                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                    className="text-5xl md:text-6xl font-bold text-white"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-2xl text-gray-200"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="inline-flex items-center px-16 py-5 bg-blue-500 hover:bg-orange-800 text-xl font-bold text-white rounded-md transition-colors"
                  >
                    Call Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

        </div>
      ))}

      {/* Navigation Squares */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 transition-all duration-300 ${index === currentSlide ? "bg-blue-400" : "bg-blue-200 hover:bg-blue-200"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
