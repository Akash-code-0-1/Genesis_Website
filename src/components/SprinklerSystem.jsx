"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaShieldAlt, FaWater, FaBuilding, FaIndustry, FaWarehouse } from "react-icons/fa"
import { GiWaterSplash, GiFireExtinguisher } from "react-icons/gi"
import { BsDropletHalf } from "react-icons/bs"

const SprinklerSystem = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const sprinklerTypes = [
    {
      title: "Wet Pipe Systems",
      icon: <BsDropletHalf size={40} className="text-blue-500" />,
      description:
        "The most common type of sprinkler system, containing water under pressure at all times and ready to be released immediately when a sprinkler head activates.",
    },
    {
      title: "Dry Pipe Systems",
      icon: <GiWaterSplash size={40} className="text-blue-400" />,
      description:
        "Designed for unheated areas where freezing is a concern. Pipes contain pressurized air or nitrogen that holds back water until activation.",
    },
    {
      title: "Pre-Action Systems",
      icon: <FaShieldAlt size={40} className="text-blue-600" />,
      description:
        "Combines features of wet and dry systems, requiring dual detection before water is released, ideal for sensitive environments like data centers.",
    },
    {
      title: "Deluge Systems",
      icon: <GiFireExtinguisher size={40} className="text-red-500" />,
      description:
        "All sprinkler heads are open, and water is released simultaneously across the entire protected area when the system activates.",
    },
  ]

  const applications = [
    { name: "Commercial Buildings", icon: <FaBuilding size={30} /> },
    { name: "Industrial Facilities", icon: <FaIndustry size={30} /> },
    { name: "Warehouses", icon: <FaWarehouse size={30} /> },
    { name: "Residential Complexes", icon: <FaBuilding size={30} /> },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] overflow-hidden"
        >
          <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200')" }}
          ></div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center mb-6"
            >
              <FaWater size={50} className="mr-4 text-blue-300" />
              <h1 className="text-5xl md:text-6xl font-bold">Sprinkler Systems</h1>
            </motion.div>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-center max-w-3xl"
            >
              Automatic fire protection that activates precisely where and when needed, providing 24/7 defense against
              fire threats.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                onClick={() => {
                  document.getElementById("overview").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Animated Water Droplets */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  top: -20,
                  left: `${Math.random() * 100}%`,
                  opacity: 0.7 + Math.random() * 0.3,
                }}
                animate={{
                  top: "100%",
                  opacity: 0,
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-blue-300"
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto">
            <div className="flex overflow-x-auto whitespace-nowrap py-2 px-4">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-4 py-2 mx-2 font-medium rounded-md transition-all ${
                  activeTab === "overview" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("types")}
                className={`px-4 py-2 mx-2 font-medium rounded-md transition-all ${
                  activeTab === "types" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                System Types
              </button>
              <button
                onClick={() => setActiveTab("benefits")}
                className={`px-4 py-2 mx-2 font-medium rounded-md transition-all ${
                  activeTab === "benefits" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Benefits
              </button>
              <button
                onClick={() => setActiveTab("applications")}
                className={`px-4 py-2 mx-2 font-medium rounded-md transition-all ${
                  activeTab === "applications" ? "bg-blue-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Applications
              </button>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="container mx-auto py-12 px-4">
          {/* Overview Section */}
          {activeTab === "overview" && (
            <motion.div
              id="overview"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Automatic Fire Sprinkler Systems</h2>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                <div className="md:flex">
                  <div className="md:w-1/2 p-6 md:p-8">
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Sprinkler systems are one of the most effective and reliable forms of fire protection available
                      today. These systems automatically detect heat from a fire and activate to control or extinguish
                      it in its early stages.
                    </p>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      Each sprinkler head operates independently, meaning only those in the vicinity of the fire will
                      activate, minimizing water damage while effectively controlling the fire.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      At Eurofire, we design, install, and maintain sprinkler systems that comply with all relevant
                      standards and regulations, providing reliable protection for your property and occupants.
                    </p>
                  </div>
                  <div className="md:w-1/2 bg-blue-100 flex items-center justify-center p-6">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="Sprinkler system in action"
                      className="rounded-lg shadow-md max-h-64 object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Early Detection</h3>
                  <p className="text-gray-600">
                    Sprinklers respond to heat, activating early in a fire's development before it can grow to dangerous
                    levels.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">Targeted Response</h3>
                  <p className="text-gray-600">
                    Only sprinklers in the immediate area of the fire activate, minimizing water damage while
                    controlling the fire.
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                  <h3 className="text-xl font-semibold text-blue-700 mb-3">24/7 Protection</h3>
                  <p className="text-gray-600">
                    Provides constant protection without requiring human intervention, ideal for all hours of the day.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Types Section */}
          {activeTab === "types" && (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Types of Sprinkler Systems</h2>

              <div className="grid md:grid-cols-2 gap-8">
                {sprinklerTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        {type.icon}
                        <h3 className="text-xl font-bold ml-3 text-gray-800">{type.title}</h3>
                      </div>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-700">Learn more</span>
                        <svg
                          className="w-5 h-5 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-12 bg-blue-50 rounded-xl p-6 md:p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Custom Solutions</h3>
                <p className="text-gray-700 mb-4">
                  At Eurofire, we understand that every building and business has unique fire protection needs. Our team
                  of experts will assess your specific requirements and design a sprinkler system that provides optimal
                  protection for your property.
                </p>
                <p className="text-gray-700">
                  We can integrate your sprinkler system with other fire protection systems for comprehensive coverage,
                  and ensure compliance with all relevant codes and standards.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Benefits Section */}
          {activeTab === "benefits" && (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Benefits of Sprinkler Systems</h2>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-10">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center mb-8">
                    <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                      <div className="w-32 h-32 rounded-full bg-blue-100 flex items-center justify-center">
                        <FaShieldAlt size={50} className="text-blue-600" />
                      </div>
                    </div>
                    <div className="md:w-2/3 md:pl-8">
                      <h3 className="text-2xl font-semibold text-blue-700 mb-3">Life Safety</h3>
                      <p className="text-gray-600">
                        Sprinkler systems dramatically reduce the risk of fire-related deaths and injuries by
                        controlling fires in their early stages, preventing the spread of deadly smoke and flames, and
                        maintaining tenable conditions for evacuation.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-8 mt-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Property Protection</h4>
                        <p className="text-gray-600 text-sm">
                          Limits fire and water damage by responding quickly and only in the affected area.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Business Continuity</h4>
                        <p className="text-gray-600 text-sm">
                          Minimizes downtime after a fire incident, allowing for quicker recovery.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Insurance Benefits</h4>
                        <p className="text-gray-600 text-sm">
                          Many insurance companies offer reduced premiums for buildings with sprinkler systems.
                        </p>
                      </div>

                      <div className="bg-blue-50 p-5 rounded-lg">
                        <h4 className="font-semibold text-blue-700 mb-2">Code Compliance</h4>
                        <p className="text-gray-600 text-sm">
                          Helps meet building code requirements and fire safety regulations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                variants={fadeIn}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-4">Did You Know?</h3>
                <p className="mb-4">
                  Studies show that sprinkler systems can reduce the average property damage by 50-66% compared to fires
                  where sprinklers are not present.
                </p>
                <p>
                  When combined with early warning systems, sprinklers can reduce the risk of death from fire by over
                  80%.
                </p>
              </motion.div>
            </motion.div>
          )}

          {/* Applications Section */}
          {activeTab === "applications" && (
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={staggerContainer}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Applications</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {applications.map((app, index) => (
                  <motion.div key={index} variants={fadeIn} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 bg-blue-100 relative">
                      <img
                        src={`/placeholder.svg?height=300&width=500&text=${app.name}`}
                        alt={app.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <div className="p-6 text-white">
                          <div className="flex items-center">
                            {app.icon}
                            <h3 className="text-xl font-bold ml-3">{app.name}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-blue-800 mb-4">Our Approach</h3>

                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">1</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Assessment</h4>
                      <p className="text-gray-600 mt-1">
                        We conduct a thorough assessment of your property to understand your specific fire protection
                        needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">2</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Design</h4>
                      <p className="text-gray-600 mt-1">
                        Our engineers design a custom sprinkler system that meets all relevant codes and standards.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">3</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Installation</h4>
                      <p className="text-gray-600 mt-1">
                        Our experienced technicians install your system with minimal disruption to your operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">4</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800">Maintenance</h4>
                      <p className="text-gray-600 mt-1">
                        We provide ongoing maintenance and testing to ensure your system remains in optimal condition.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Protect Your Property with a Sprinkler System?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-blue-100 max-w-2xl mx-auto mb-8"
            >
              Contact our team today for a consultation and free quote. Our experts will design a sprinkler system
              tailored to your specific needs and requirements.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white text-blue-800 hover:bg-blue-100 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Free Consultation
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SprinklerSystem

