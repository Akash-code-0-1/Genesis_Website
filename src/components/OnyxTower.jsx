"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Building, Layers, Zap } from "lucide-react"

const OnyxTower = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Onyx Development Group",
    location: "Sheikh Zayed Road, Dubai, UAE",
    completed: "2022",
    height: "328 meters, 76 floors",
    scope: "Complete fire protection systems, Emergency response planning",
  }

  const keyFeatures = [
    "Integrated fire alarm and detection system with over 5,000 addressable points",
    "High-rise firefighting systems with standpipes and fire hose cabinets",
    "Pressurized stairwells for smoke control during evacuation",
    "Specialized protection for data centers and electrical rooms",
    "Automated smoke extraction system with dedicated air handling",
    "Emergency voice communication system throughout all floors",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <motion.div style={{ opacity, scale }} className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Onyx+Tower')" }}
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center">Onyx Tower</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            State-of-the-art fire protection for Dubai's iconic skyscraper
          </motion.p>
        </div>

        {/* Animated elements - vertical lines simulating a tower */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 w-1 bg-blue-300 opacity-30"
              style={{
                left: `${10 + i * 8}%`,
                height: "60%",
              }}
              initial={{ height: "0%" }}
              animate={{ height: "60%" }}
              transition={{
                duration: 1.5,
                delay: 0.1 * i,
                ease: "easeOut",
              }}
            />
          ))}
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
              The Onyx Tower stands as one of Dubai's most impressive skyscrapers, rising 76 floors and housing a mix of
              premium office spaces, luxury apartments, and retail outlets. Our team was commissioned to design and
              implement comprehensive fire protection systems throughout this vertical city, addressing the unique
              challenges presented by super-tall buildings.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              High-rise buildings require specialized fire safety approaches that account for extended evacuation times,
              stack effect on smoke movement, and the need for firefighting operations at extreme heights. Our solutions
              were engineered to provide multiple layers of protection, ensuring the safety of occupants and the
              preservation of this landmark structure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <img
                src="/placeholder.svg?height=300&width=200&text=Tower+Exterior"
                alt="Tower Exterior"
                className="rounded-lg shadow-md h-80 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Fire+Command+Center"
                alt="Fire Command Center"
                className="rounded-lg shadow-md h-80 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Sprinkler+Systems"
                alt="Sprinkler Systems"
                className="rounded-lg shadow-md h-80 object-cover w-full"
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

            <h3 className="text-2xl font-bold text-blue-800 mb-4">High-Rise Fire Safety Innovations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Zoned Protection Strategy</h4>
                <p className="text-gray-700">
                  We implemented a zoned approach to fire protection, dividing the tower into manageable sections with
                  dedicated systems and controls. This allows for targeted response to fire events and phased evacuation
                  when necessary.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Pressurization Systems</h4>
                <p className="text-gray-700">
                  Stairwells and refuge areas are equipped with advanced pressurization systems that prevent smoke
                  infiltration, maintaining tenable conditions during evacuation and providing safe access for
                  firefighters.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Firefighter Access</h4>
                <p className="text-gray-700">
                  Dedicated firefighting elevators with protected power supplies, communication systems, and water
                  sources at strategic locations throughout the tower support effective emergency response operations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Integrated Building Systems</h4>
                <p className="text-gray-700">
                  Fire protection systems are fully integrated with building management systems, allowing for automated
                  responses including elevator recall, HVAC control, and access control modifications during
                  emergencies.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Technical Excellence</h3>
              </div>
              <p className="mb-4">
                The Onyx Tower fire protection systems represent the cutting edge of high-rise safety technology. Our
                design incorporates redundant systems, fail-safe mechanisms, and smart monitoring to ensure continuous
                protection.
              </p>
              <p>
                The project has been recognized by fire safety authorities as an exemplary implementation of modern fire
                protection principles in super-tall buildings, setting new standards for high-rise safety in the region.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default OnyxTower

