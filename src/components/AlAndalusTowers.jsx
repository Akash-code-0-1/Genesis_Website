"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Building, Layers, Users } from "lucide-react"

const AlAndalusTowers = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Al Andalus Development Group",
    location: "Jumeirah Village Circle, Dubai, UAE",
    completed: "2022",
    size: "4 residential towers, 42 floors each",
    scope: "Complete fire protection systems for residential complex",
  }

  const keyFeatures = [
    "Integrated fire alarm system with over 8,000 detection points",
    "Residential sprinkler system throughout all towers",
    "Pressurized stairwells and smoke control systems",
    "Emergency voice evacuation with phased evacuation capability",
    "Fire pump system with 2,500 GPM capacity and backup power",
    "Firefighter emergency communication system throughout all towers",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section with Geometric Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Al+Andalus+Towers')" }}
        ></div>

        {/* Geometric patterns animation - inspired by Andalusian architecture */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-20 border-2 border-amber-200"
              style={{
                width: 100 + i * 50,
                height: 100 + i * 50,
                borderRadius: i % 2 === 0 ? "0%" : "50%",
                top: `${50 - i * 5}%`,
                left: `${50 - i * 5}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Number.POSITIVE_INFINITY,
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
            <h1 className="text-5xl md:text-6xl font-bold text-center">Al Andalus Towers</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Comprehensive fire protection for a prestigious residential complex
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
              <h2 className="text-2xl font-bold text-amber-800 mb-6">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Building className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-800">{projectDetails.client}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{projectDetails.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-800">{projectDetails.completed}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Layers className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Project Size</p>
                    <p className="font-medium text-gray-800">{projectDetails.size}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium text-gray-800">{projectDetails.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-amber-800 mb-6">Project Overview</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Al Andalus Towers is a prestigious residential development comprising four 42-story towers with a
              distinctive architectural style inspired by Andalusian heritage. Our team was commissioned to design and
              implement comprehensive fire protection systems throughout this complex, ensuring the safety of residents
              while complementing the unique aesthetic of the development.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The project presented significant challenges due to its scale, the high occupancy of the towers, and the
              architectural features that required specialized fire protection approaches. Our solutions were engineered
              to provide robust protection while integrating seamlessly with the distinctive design elements of the
              complex.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <img
                src="https://images.adsttc.com/media/images/633a/c729/4dba/6e15/cfb1/1b8a/newsletter/mika-twin-towers-alidoost-and-partners_1.jpg?1664796472"
                alt="Towers Exterior"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/C5622AQGiJTk2I3rv2g/feedshare-shrink_800/feedshare-shrink_800/0/1661986946810?e=2147483647&v=beta&t=kamSNgVw9MWisbpkb-p2GQMiLXDgAOdOGQhKP9b9bHo"
                alt="Fire Command Center"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="https://accuro.at/files/loesungen/sprinklerloeschanlagen/Sprinklerzentrale-Verteiler.jpg"
                alt="Sprinkler Installation"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-amber-800 mb-4">Key Features</h3>

            <div className="bg-amber-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-amber-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-amber-800 mb-4">Multi-Tower Fire Safety Strategy</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800 mb-2">Centralized Monitoring</h4>
                <p className="text-gray-700">
                  We implemented a centralized fire command center that monitors all four towers, providing
                  comprehensive oversight of the entire complex while allowing for tower-specific control when needed.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800 mb-2">Phased Evacuation</h4>
                <p className="text-gray-700">
                  The emergency voice evacuation system was designed with sophisticated zoning capabilities, allowing
                  for phased evacuation strategies that prioritize the affected areas while preventing unnecessary
                  evacuation of unaffected towers.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800 mb-2">Architectural Integration</h4>
                <p className="text-gray-700">
                  Fire protection components were carefully integrated with the Andalusian-inspired architectural
                  elements, using custom finishes and concealed installations to maintain the aesthetic integrity of the
                  design.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-800 mb-2">Shared Infrastructure</h4>
                <p className="text-gray-700">
                  The fire pump system was designed with a centralized approach, with a main pump room serving all four
                  towers through a carefully engineered distribution network, optimizing efficiency while ensuring
                  reliability.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600 to-amber-800 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Resident Safety Focus</h3>
              </div>
              <p className="mb-4">
                Beyond the technical systems, our approach included a comprehensive resident safety program. We
                developed custom emergency response plans for the complex, conducted training sessions for building
                staff, and created resident education materials in multiple languages.
              </p>
              <p>
                This holistic approach ensures that the sophisticated fire protection systems are complemented by human
                preparedness, creating multiple layers of safety for the residents of Al Andalus Towers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default AlAndalusTowers

