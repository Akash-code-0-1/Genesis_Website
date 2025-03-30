"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Users, Award } from "lucide-react"

const DubaiCricketStadium = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Dubai Sports Council",
    location: "Dubai Sports City, UAE",
    completed: "2021",
    capacity: "25,000 spectators",
    scope: "Fire alarm system, Fire fighting system, Sprinkler system, Emergency exit lighting",
  }

  const keyFeatures = [
    "Advanced addressable fire alarm system with over 1,200 detection points",
    "High-pressure water mist system for specialized areas",
    "Integrated voice evacuation system for clear emergency communications",
    "Zoned sprinkler coverage with specialized protection for technical areas",
    "Emergency lighting with centralized monitoring and testing capabilities",
    "Custom fire pump solution delivering 2,500 GPM at required pressure",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Dubai+Cricket+Stadium')" }}
        ></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center">Dubai Cricket Stadium</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Comprehensive fire safety solutions for one of UAE's premier sporting venues
          </motion.p>
        </div>

        {/* Animated elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-300"
              initial={{
                x: Math.random() * 100 + "%",
                y: Math.random() * 100 + "%",
                opacity: 0.7 + Math.random() * 0.3,
              }}
              animate={{
                y: [Math.random() * 100 + "%", Math.random() * 100 + "%", Math.random() * 100 + "%"],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
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
                  <Users className="w-5 h-5 text-blue-500 mt-1 mr-3" />
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
                  <Users className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Capacity</p>
                    <p className="font-medium text-gray-800">{projectDetails.capacity}</p>
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
              The Dubai Cricket Stadium stands as one of the UAE's premier sporting venues, hosting international
              cricket matches and events. Our team was entrusted with designing and implementing comprehensive fire
              safety systems throughout this massive facility, ensuring the protection of thousands of spectators and
              valuable infrastructure.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The project presented unique challenges due to the stadium's open design, multiple occupancy types (from
              spectator seating to media centers and VIP areas), and the need for systems that could operate reliably in
              Dubai's extreme climate conditions. Our solutions were carefully engineered to meet these challenges while
              complying with the stringent requirements of UAE Civil Defense and international fire safety standards.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <img
                src="/placeholder.svg?height=300&width=400&text=Stadium+Interior"
                alt="Stadium Interior"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=400&text=Fire+Safety+Systems"
                alt="Fire Safety Systems"
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

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Challenges & Solutions</h3>

            <div className="mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 mb-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Large Occupancy Challenge</h4>
                <p className="text-gray-700">
                  With a capacity for 25,000 spectators, ensuring safe evacuation was paramount. We implemented a zoned
                  voice evacuation system with clear messaging in multiple languages and strategically placed emergency
                  exit lighting.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 mb-4 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Climate Considerations</h4>
                <p className="text-gray-700">
                  Dubai's extreme temperatures required special considerations. We utilized temperature-compensated
                  detection devices and corrosion-resistant materials throughout the installation to ensure long-term
                  reliability.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Mixed-Use Spaces</h4>
                <p className="text-gray-700">
                  From open seating areas to enclosed media centers, each space required tailored protection. We
                  designed specialized solutions for each area type, including high-sensitivity detection for technical
                  areas and robust, weather-resistant systems for exposed sections.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Results & Recognition</h3>
              </div>
              <p className="mb-4">
                The completed fire safety systems at Dubai Cricket Stadium have been recognized for their excellence in
                design and implementation. The project was completed on schedule and has successfully passed all
                regulatory inspections and tests.
              </p>
              <p>
                Our systems have been in operation for multiple high-profile international cricket events, providing
                reliable protection for thousands of spectators and ensuring compliance with the highest safety
                standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DubaiCricketStadium

