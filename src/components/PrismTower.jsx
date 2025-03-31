"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Building, Layers, Shield } from "lucide-react"

const PrismTower = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Prism Development LLC",
    location: "Business Bay, Dubai, UAE",
    completed: "2023",
    height: "245 meters, 52 floors",
    scope: "Comprehensive fire safety systems, Smart building integration",
  }

  const keyFeatures = [
    "Smart fire detection system with AI-enhanced false alarm prevention",
    "Integrated water mist and sprinkler systems for targeted protection",
    "Zoned voice evacuation with multi-language capability",
    "Smoke control system with computational fluid dynamics modeling",
    "Firefighter emergency communication system throughout all floors",
    "Building management system integration for coordinated emergency response",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Prism Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-purple-900 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Prism+Tower')" }}
        ></div>

        {/* Prism light effect animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20"
              style={{
                background: `linear-gradient(45deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%)`,
                height: "3px",
                width: "100%",
                top: `${10 + i * 12}%`,
                left: "-100%",
              }}
              animate={{
                left: ["-100%", "200%"],
              }}
              transition={{
                duration: 3 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center">Prism Tower</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Cutting-edge fire protection for Dubai's innovative architectural marvel
          </motion.p>
        </div>
      </motion.div>

      {/* Project Overview */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-800">{projectDetails.client}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{projectDetails.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-800">{projectDetails.completed}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Layers className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Building Specifications</p>
                    <p className="font-medium text-gray-800">{projectDetails.height}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium text-gray-800">{projectDetails.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full flex items-center justify-center">
                  Download Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Overview</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Prism Tower represents the pinnacle of modern architectural design in Dubai's skyline, with its
              distinctive crystalline façade and innovative use of space. Our team was tasked with developing and
              implementing fire safety systems that would protect this unique structure while complementing its
              cutting-edge design aesthetic.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The building's complex geometry, mixed-use spaces, and extensive use of glass presented unique fire
              protection challenges. Our approach integrated advanced technology with thoughtful design to create
              systems that provide comprehensive protection while remaining visually unobtrusive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <img
                src="https://aplusidesign.com/wp-content/uploads/2023/07/Prism-Exterior-and-Interior-13th-Oct-2021-9-scaled.jpg"
                alt="Prism Tower Exterior"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="https://velox.ae/wp-content/uploads/2020/10/VELOX-Smart-detction-webinar-02_600x600_acf_cropped.jpg"
                alt="Smart Fire Systems"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Key Features</h3>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Innovative Solutions</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Smart Detection Network</h4>
                <p className="text-gray-700">
                  We implemented a network of multi-criteria detectors with AI-enhanced algorithms that analyze multiple
                  factors before triggering alarms, dramatically reducing false alarms while maintaining rapid response
                  to real fire events.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Targeted Suppression</h4>
                <p className="text-gray-700">
                  Different areas of the building received customized suppression solutions, from water mist systems in
                  public areas to clean agent systems in server rooms and specialized wet chemical systems in kitchen
                  areas.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Façade Protection</h4>
                <p className="text-gray-700">
                  The distinctive glass façade required special consideration. We developed custom solutions to prevent
                  fire spread between floors via the exterior while preserving the architectural integrity of the
                  building's signature feature.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Integrated Command Center</h4>
                <p className="text-gray-700">
                  A state-of-the-art fire command center provides comprehensive monitoring and control of all fire
                  safety systems, with intuitive interfaces that allow for rapid assessment and response to any
                  situation.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Smart Building Integration</h3>
              </div>
              <p className="mb-4">
                Prism Tower's fire safety systems are fully integrated with the building's smart management platform,
                creating a cohesive approach to safety and efficiency. This integration allows for coordinated responses
                to emergencies, with automated sequences that optimize evacuation routes, manage air handling, and
                provide real-time information to occupants and emergency responders.
              </p>
              <p>
                The project has been recognized for its innovative approach to fire safety in smart buildings,
                demonstrating how advanced technology can enhance protection while supporting the operational and
                aesthetic goals of modern architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default PrismTower

