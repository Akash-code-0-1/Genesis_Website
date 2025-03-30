"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Home, Shield, Sparkles } from "lucide-react"

const CrystalResidence = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Crystal Development LLC",
    location: "Dubai Marina, UAE",
    completed: "2023",
    size: "85 luxury apartments, 35 floors",
    scope: "Complete fire safety systems for luxury residential tower",
  }

  const keyFeatures = [
    "Concealed sprinkler system with designer finishes",
    "Addressable fire alarm system with multi-criteria detection",
    "Smart home integration with fire safety alerts",
    "Pressurized stairwells with smoke control",
    "Voice evacuation system with multi-language capability",
    "Firefighter emergency communication system",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Hero Section with Crystal Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-blue-900 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Crystal+Residence')" }}
        ></div>

        {/* Crystal animation */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white opacity-30"
              style={{
                width: 10 + Math.random() * 20,
                height: 10 + Math.random() * 20,
                borderRadius: Math.random() > 0.5 ? "0%" : "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.1, 0.5, 0.1],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
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
            <h1 className="text-5xl md:text-6xl font-bold text-center">Crystal Residence</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Elegant fire protection solutions for ultra-luxury living
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
              <h2 className="text-2xl font-bold text-cyan-800 mb-6">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-cyan-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-800">{projectDetails.client}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-cyan-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{projectDetails.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-cyan-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-800">{projectDetails.completed}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Sparkles className="w-5 h-5 text-cyan-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Project Size</p>
                    <p className="font-medium text-gray-800">{projectDetails.size}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium text-gray-800">{projectDetails.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-cyan-800 mb-6">Project Overview</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Crystal Residence represents the pinnacle of luxury living in Dubai Marina, featuring 85 meticulously
              designed apartments with premium finishes and panoramic views. Our team was tasked with creating fire
              protection systems that would ensure the highest level of safety while maintaining the ultra-luxury
              aesthetic of this exclusive development.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The project demanded an innovative approach that would balance technical excellence with design
              sensitivity. Our solutions were engineered to provide comprehensive protection while remaining virtually
              invisible, preserving the clean lines and sophisticated ambiance of the residences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <img
                src="/placeholder.svg?height=300&width=200&text=Luxury+Interior"
                alt="Luxury Interior"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Concealed+Systems"
                alt="Concealed Systems"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Smart+Integration"
                alt="Smart Integration"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-cyan-800 mb-4">Key Features</h3>

            <div className="bg-cyan-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-cyan-800 mb-4">Luxury-Focused Fire Protection</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-2">Designer Sprinklers</h4>
                <p className="text-gray-700">
                  We utilized custom-finished concealed sprinklers that blend seamlessly with the ceiling design,
                  becoming virtually invisible until activated, preserving the clean aesthetic of the luxury interiors.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-2">Smart Integration</h4>
                <p className="text-gray-700">
                  The fire alarm system was integrated with the smart home platform, allowing residents to receive
                  alerts and system status updates through their mobile devices and home automation interfaces.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-2">Discreet Detection</h4>
                <p className="text-gray-700">
                  Multi-criteria detectors were selected for their ability to distinguish between real fire conditions
                  and false triggers, reducing nuisance alarms while maintaining vigilant protection.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-cyan-500">
                <h4 className="font-bold text-gray-800 mb-2">Elegant Interfaces</h4>
                <p className="text-gray-700">
                  Control interfaces and notification devices were custom-designed with premium finishes to complement
                  the interior design scheme, transforming utilitarian elements into design features.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Invisible Protection</h3>
              </div>
              <p className="mb-4">
                The hallmark of our approach at Crystal Residence was creating what we call "invisible protection" –
                comprehensive fire safety systems that provide world-class protection while remaining aesthetically
                unobtrusive.
              </p>
              <p>
                This philosophy extended beyond the technical systems to include staff training and resident education,
                ensuring that the human elements of fire safety were as refined and effective as the technological
                solutions, creating a seamless safety experience for this exclusive community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default CrystalResidence

