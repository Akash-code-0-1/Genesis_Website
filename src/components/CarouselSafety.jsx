"use client"

import { useEffect, useState } from "react"
import Swiper from "swiper"
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const slides = [
  {
    image: "https://combatbrandfire.sg/cdn/shop/files/Ion-Battery-Extinguisher3.jpg?v=1705919635&width=1445",
    title: "FIRE EXTINGUISHERS",
    subtitle: "Advanced solutions for all fire classes with rapid response capability",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFuSwXPn_tCmeI6e9gUQrxnEVPoYJuguQmw&s",
    title: "FIRE ALARM SYSTEMS",
    subtitle: "Early detection technology for maximum protection and safety",
  },
  {
    image: "https://combatbrandfire.sg/cdn/shop/files/Ion-Battery-Extinguisher3.jpg?v=1705919635&width=1445",
    title: "FM200 SUPPRESSION",
    subtitle: "Clean agent systems for sensitive equipment and server rooms",
  },
  {
    image:
      "https://images.carriercms.com/image/upload/w_400,c_lfill,q_auto,f_auto/v1692049857/kidde/home-safety/product/kitchen-fire-extinguisher_4-3.jpg",
    title: "KITCHEN HOOD SYSTEMS",
    subtitle: "Specialized protection for commercial kitchen environments",
  },
  {
    image:
      "https://res.cloudinary.com/internachi/image/fetch/f_auto,q_auto:best/https://s3.amazonaws.com/uploads-east-1.nachi.org/gallery-images/general/internachi-fire-extinguisher-elements.jpg",
    title: "EMERGENCY EXIT SYSTEMS",
    subtitle: "Reliable evacuation solutions for all building types",
  },
  {
    image: "https://combatbrandfire.sg/cdn/shop/files/Ion-Battery-Extinguisher3.jpg?v=1705919635&width=1445",
    title: "SPRINKLER SYSTEMS",
    subtitle: "Automatic fire suppression for comprehensive building protection",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzFuSwXPn_tCmeI6e9gUQrxnEVPoYJuguQmw&s",
    title: "FIRE HYDRANT SYSTEMS",
    subtitle: "High-capacity water delivery for effective firefighting",
  },
  {
    image:
      "https://images.carriercms.com/image/upload/w_400,c_lfill,q_auto,f_auto/v1692049857/kidde/home-safety/product/kitchen-fire-extinguisher_4-3.jpg",
    title: "CENTRAL BATTERY SYSTEMS",
    subtitle: "Reliable emergency lighting during power outages",
  },
  {
    image:
      "https://res.cloudinary.com/internachi/image/fetch/f_auto,q_auto:best/https://s3.amazonaws.com/uploads-east-1.nachi.org/gallery-images/general/internachi-fire-extinguisher-elements.jpg",
    title: "VOICE EVACUATION",
    subtitle: "Clear emergency instructions for safe building evacuation",
  },
]

export default function CarouselSafety() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [swiperInstance, setSwiperInstance] = useState(null)

  useEffect(() => {
    const swiper = new Swiper(".carousel-3d-swiper", {
      modules: [EffectCoverflow, Navigation, Pagination, Autoplay],
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 1, // Default for mobile
      loop: true,
      loopedSlides: 5,
      coverflowEffect: {
        rotate: 0,
        stretch: 20,
        depth: 100,
        modifier: 2.5,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 640px (sm)
        640: {
          slidesPerView: 2,
        },
        // when window width is >= 768px (md)
        768: {
          slidesPerView: 3,
        },
      },
      // Autoplay configuration
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      on: {
        slideChange: (swiper) => {
          setActiveIndex(swiper.realIndex)
        },
      },
    })

    setSwiperInstance(swiper)

    return () => {
      swiper.destroy()
    }
  }, [])

  // Handle pause/resume functionality
  const handleMouseEnter = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.stop()
    }
  }

  const handleMouseLeave = () => {
    if (swiperInstance) {
      swiperInstance.autoplay.start()
    }
  }

  return (
    <div
      className="relative py-16 bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/48ba/ddd2/6192a45a78980c7968e0055690dcbb56?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hDySyxajy8z2GEspEx9N42OfNKwOA4FxStWT5oj2V3KLqmzZw8Rov4LH5E52ftkpjVJPGwcZfvv9HJJoEp1L2SCap5qjO75ZzDDJbIv4AkDKt8oOd5wAxZfbu2tIFL3RwzNlx8GjBQPLpX3FVjrP8~sWht5ofEtNIbXMrp85D~UDDQEE7JRlcE3uBBt~QUEyx-eqzXb~bhYtQl6wQ7wWMhzaSDgGtRMSET8RCbkqUnrEimS6e8L1TG72cdIncpOdSMiF5~prt7e3K20qfie4al-D~~sw3OkPjQNkR53Zi-SCHKMy4L4YzymPM7lIAjLUJ62Ihs~~DdDJVyGZe3UsWA__')",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-transparent to-white"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 overflow-hidden">
        <div className="carousel-3d-swiper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className="swiper-wrapper">
            {slides.map((slide, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 h-[300px] sm:h-[400px] md:h-[500px] relative">
                  <div className="aspect-[3/3] overflow-hidden h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={slide.image || "/placeholder.svg"}
                      alt={`Slide ${index + 1}`}
                    />
                  </div>
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-center text-white duration-300 bg-gradient-to-t from-black/70 to-transparent">
                      <h3 className="text-lg sm:text-xl font-bold mb-1">{slide.title}</h3>
                      <p className="text-gray-300 uppercase text-sm sm:text-md">{slide.subtitle}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-button-prev !text-white !hidden sm:!flex"></div>
          <div className="swiper-button-next !text-white !hidden sm:!flex"></div>
          <div className="swiper-pagination !bottom-0 !-mb-8 sm:!-mb-12"></div>
        </div>
      </div>
    </div>
  )
}

