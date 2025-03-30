"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt, FaChartLine } from "react-icons/fa"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"

const MajesticTower = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const slides = [
    {
      image: "/placeholder.svg?height=800&width=1200&text=Majestic Tower 1",
      title: "Majestic Tower",
      subtitle: "A landmark of safety and innovation",
    },
    {
      image: "/placeholder.svg?height=800&width=1200&text=Fire Systems",
      title: "Advanced Fire Systems",
      subtitle: "Cutting-edge protection for a premium property",
    },
    {
      image: "/placeholder.svg?height=800&width=1200&text=Smart Integration",
      title: "Smart Building Integration",
      subtitle: "Seamless safety management through technology",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              zIndex: currentSlide === index ? 10 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundPosition: "center 30%",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/50"></div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  y: currentSlide === index ? 0 : 50,
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">{slide.subtitle}</p>
              </motion.div>
            </div>
          </motion.div>
        ))}

        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white w-10" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Project Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Majestic Tower stands as a premier commercial skyscraper in the heart of Dubai's business district. This
              60-story building houses multinational corporations, premium office spaces, and exclusive amenities that
              cater to the global business elite.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was commissioned to design and implement a comprehensive fire safety solution that would not only
              meet the stringent requirements of international safety codes but also integrate seamlessly with the
              building's smart management systems.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Commercial Skyscraper</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2019</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Dubai Business Bay</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaChartLine className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium">320 meters</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src="/placeholder.svg?height=700&width=900" alt="Majestic Tower Building" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Challenges & Solutions</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              How we overcame unique challenges in implementing fire safety systems at Majestic Tower
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                challenge: "High-Rise Complexity",
                description:
                  "Ensuring effective fire protection across 60 floors with varying pressure zones and occupancy types.",
                solution:
                  "Implemented a zone-based approach with dedicated equipment and systems for different vertical sections of the building, ensuring optimal performance at all heights.",
                delay: 0.2,
              },
              {
                challenge: "Smart Building Integration",
                description:
                  "Integrating fire safety systems with the building's advanced automation and management systems.",
                solution:
                  "Created a custom API interface that allows seamless communication between fire safety and building management systems, enabling centralized monitoring and control.",
                delay: 0.4,
              },
              {
                challenge: "Aesthetic Considerations",
                description:
                  "Maintaining the premium aesthetic of the building while implementing comprehensive safety systems.",
                solution:
                  "Utilized concealed installation methods and custom-designed fixtures that blend seamlessly with the architectural elements of the building.",
                delay: 0.6,
              },
              {
                challenge: "Business Continuity",
                description:
                  "Implementing systems with minimal disruption to existing tenants and business operations.",
                solution:
                  "Developed a phased implementation plan with after-hours installation and thorough communication with tenants to minimize business impact.",
                delay: 0.8,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="bg-blue-600 p-4">
                  <h3 className="text-xl font-semibold text-white">Challenge: {item.challenge}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-600">
                    <h4 className="font-semibold text-blue-800 mb-2">Our Solution:</h4>
                    <p className="text-gray-600">{item.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems Implemented */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Systems Implemented</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Our comprehensive fire safety solution for Majestic Tower included these advanced systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Advanced Fire Detection",
              description: "Multi-criteria detection system with addressable devices throughout all floors",
              icon: <FaShieldAlt className="text-white text-2xl" />,
              delay: 0.2,
            },
            {
              title: "High-Rise Sprinkler System",
              description: "Zone-based sprinkler system with pressure regulation for consistent performance",
              icon: <FaBuilding className="text-white text-2xl" />,
              delay: 0.4,
            },
            {
              title: "Voice Evacuation System",
              description: "Crystal-clear voice evacuation with multi-language support and zoned messaging",
              icon: <FaShieldAlt className="text-white text-2xl" />,
              delay: 0.6,
            },
            {
              title: "Emergency Lighting",
              description: "Smart emergency lighting with dynamic evacuation path guidance",
              icon: <FaBuilding className="text-white text-2xl" />,
              delay: 0.8,
            },
            {
              title: "Fire Pump System",
              description: "Redundant fire pump system with backup power generation",
              icon: <FaShieldAlt className="text-white text-2xl" />,
              delay: 1.0,
            },
            {
              title: "Smart Building Integration",
              description: "API-based integration with building management systems for centralized control",
              icon: <FaBuilding className="text-white text-2xl" />,
              delay: 1.2,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: item.delay }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100"
            >
              <div className="bg-blue-600 p-4 flex justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">{item.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results & Benefits */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Results & Benefits</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              The impact of our fire safety implementation at Majestic Tower
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                {[
                  "Achieved highest safety rating from Dubai Civil Defense",
                  "Reduced false alarm incidents by 95% through advanced detection algorithms",
                  "Implemented smart evacuation system that adapts to emergency conditions",
                  "Seamless integration with building management systems",
                  "Minimal disruption to tenant operations during implementation",
                  "Completed installation ahead of schedule and within budget",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BsCheck2Circle className="text-blue-300 text-xl mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Client Testimonial</h3>
              <div className="bg-blue-800/50 p-6 rounded-lg border border-blue-700">
                <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg mb-6 leading-relaxed">
                  "Eurofire's implementation at Majestic Tower has exceeded our expectations in every way. Their team's
                  expertise in high-rise fire safety and their ability to integrate with our smart building systems has
                  resulted in a solution that not only ensures the safety of our tenants but also enhances our
                  operational efficiency."
                </p>
                <div>
                  <p className="font-semibold">Jonathan Reynolds</p>
                  <p className="text-blue-300">Facilities Director, Majestic Properties</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Project Gallery</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at Majestic Tower</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={`/placeholder.svg?height=${index === 0 ? 600 : 400}&width=${index === 0 ? 800 : 600}&text=Majestic ${item}`}
                alt={`Majestic Tower Project Image ${item}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Ready to Discuss Your Project?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement state-of-the-art fire safety systems for your property
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto transition-colors duration-300">
              Contact Us Today
              <BsArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MajesticTower

