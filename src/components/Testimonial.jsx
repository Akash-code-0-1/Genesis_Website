"use client"

import { useEffect, useState } from "react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote: "Love Their Writing Strategy",
      rating: 5,
      author: "Sophia",
      position: "Manager at InnoTech",
      description: "The design exceeded our expectations in every way.",
    },
    {
      quote: "They Are Writing Gems",
      rating: 5,
      author: "Liam",
      position: "Director at HighTech",
      description: "Our logo has garnered so many compliments!",
    },
    {
      quote: "Recommended To Everyone",
      rating: 5,
      author: "Mia",
      position: "Head of Design at Fabrica",
      description: "Our logo now truly stands out in the market.",
    },
    {
      quote: "Love Their Writing Strategy",
      rating: 5,
      author: "Aiden",
      position: "Manager at InnoTech",
      description: "The design exceeded our expectations in every way.",
    },
    {
      quote: "They Are Writing Gems",
      rating: 5,
      author: "Emma",
      position: "Director at HighTech",
      description: "Our logo has garnered so many compliments!",
    },
  ]

  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    setIsInitialized(true)
  }, [])

  // Calculate animation duration based on number of cards
  const animationDuration = testimonials.length * 5 // 5 seconds per card

  return (
    <section className="py-16 px-4 bg-[#001529] text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-1 text-blue-400">Testimonial</h2>
          <p className="text-gray-300">Our clients is always priority</p>
        </div>

        {/* Desktop Testimonials Ticker */}
        <div className="hidden md:block overflow-hidden">
          {isInitialized && (
            <div className="ticker-wrap">
              <div
                className="ticker"
                style={{
                  animationDuration: `${animationDuration}s`,
                }}
              >
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <div key={`a-${index}`} className="ticker-item min-w-[280px] bg-white rounded-lg p-5 text-black mx-4">
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 p-1 rounded mr-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm">TrustRadius</span>
                      </div>
                      <p className="font-semibold text-sm">{testimonial.quote}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{testimonial.description}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless looping */}
                {testimonials.map((testimonial, index) => (
                  <div key={`b-${index}`} className="ticker-item min-w-[280px] bg-white rounded-lg p-5 text-black mx-4">
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 p-1 rounded mr-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm">TrustRadius</span>
                      </div>
                      <p className="font-semibold text-sm">{testimonial.quote}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{testimonial.description}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mobile Testimonials Ticker */}
        <div className="md:hidden overflow-hidden">
          {isInitialized && (
            <div className="ticker-wrap">
              <div
                className="ticker"
                style={{
                  animationDuration: `${animationDuration}s`,
                }}
              >
                {/* First set of testimonials */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`mobile-a-${index}`}
                    className="ticker-item w-[85vw] bg-white rounded-lg p-5 text-black mx-4"
                  >
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 p-1 rounded mr-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm">TrustRadius</span>
                      </div>
                      <p className="font-semibold text-sm">{testimonial.quote}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{testimonial.description}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless looping */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`mobile-b-${index}`}
                    className="ticker-item w-[85vw] bg-white rounded-lg p-5 text-black mx-4"
                  >
                    <div className="mb-3">
                      <div className="flex items-center mb-2">
                        <div className="bg-blue-100 p-1 rounded mr-2">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        </div>
                        <span className="font-semibold text-sm">TrustRadius</span>
                      </div>
                      <p className="font-semibold text-sm">{testimonial.quote}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#3B82F6"
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{testimonial.description}</p>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
                      <div>
                        <p className="font-semibold text-sm">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* CSS for the ticker animation */}
        <style jsx>{`
          .ticker-wrap {
            width: 100%;
            overflow: hidden;
            padding: 10px 0;
            box-sizing: content-box;
          }

          .ticker {
            display: flex;
            white-space: nowrap;
            box-sizing: content-box;
            animation-iteration-count: infinite;
            animation-timing-function: linear;
            animation-name: ticker;
          }

          .ticker-item {
            display: inline-block;
            flex-shrink: 0;
          }

          @keyframes ticker {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </div>
    </section>
  )
}

