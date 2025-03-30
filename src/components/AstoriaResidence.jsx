"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaFire, FaShieldAlt } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"

const AstoriaResidence = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Astoria Residence</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Luxury living with state-of-the-art fire safety systems
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Project Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Astoria Residence stands as a premier luxury residential complex in Dubai, featuring elegant architecture
              and premium amenities. Our team was entrusted with designing and implementing comprehensive fire safety
              systems throughout this prestigious development.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The project required meticulous planning to integrate advanced fire protection solutions while maintaining
              the aesthetic appeal of this high-end property. Our systems ensure the safety of residents while remaining
              virtually invisible within the sophisticated design of the building.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Luxury Residential</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2021</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Dubai Marina</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaFire className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Systems</p>
                  <p className="font-medium">Full Integration</p>
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
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="Astoria Residence Building"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Systems Implemented */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Systems Implemented</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our comprehensive fire safety solution for Astoria Residence included multiple integrated systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Fire Alarm System",
                description: "Addressable fire detection with smart sensors throughout all floors and common areas",
                icon: <FaFire className="text-white text-2xl" />,
                delay: 0.2,
              },
              {
                title: "Sprinkler System",
                description: "High-pressure sprinkler system with concealed heads to maintain aesthetic appeal",
                icon: <FaShieldAlt className="text-white text-2xl" />,
                delay: 0.4,
              },
              {
                title: "Voice Evacuation",
                description: "Crystal-clear voice evacuation system with multi-language support",
                icon: <FaBuilding className="text-white text-2xl" />,
                delay: 0.6,
              },
              {
                title: "Emergency Lighting",
                description: "Elegant emergency lighting integrated with the building's design",
                icon: <FaShieldAlt className="text-white text-2xl" />,
                delay: 0.8,
              },
              {
                title: "Fire Pump System",
                description: "Redundant fire pump system ensuring water supply even during power outages",
                icon: <FaFire className="text-white text-2xl" />,
                delay: 1.0,
              },
              {
                title: "24/7 Monitoring",
                description: "Central monitoring station with direct connection to emergency services",
                icon: <FaBuilding className="text-white text-2xl" />,
                delay: 1.2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
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
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Project Gallery</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at Astoria Residence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/placeholder.svg?height=400&width=600&text=Astoria ${item}`}
                alt={`Astoria Residence Project Image ${item}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <svg className="w-12 h-12 mx-auto mb-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "Eurofire's implementation of fire safety systems at Astoria Residence exceeded our expectations. Their
              team worked seamlessly with our architects to ensure that safety systems were integrated without
              compromising our design vision. The result is a building that offers both luxury and uncompromising safety
              for our residents."
            </p>
            <div>
              <p className="font-semibold text-lg">Ahmed Al Mansouri</p>
              <p className="text-blue-300">Project Director, Astoria Development Group</p>
            </div>
          </motion.div>
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

export default AstoriaResidence

