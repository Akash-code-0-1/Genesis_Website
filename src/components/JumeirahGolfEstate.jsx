"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Home, Droplet, Leaf } from "lucide-react"

const JumeirahGolfEstate = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Jumeirah Golf Estates",
    location: "Jumeirah Golf Estates, Dubai, UAE",
    completed: "2023",
    size: "1,500 acres, 800 luxury villas",
    scope: "Community-wide fire protection infrastructure",
  }

  const keyFeatures = [
    "Comprehensive hydrant network covering the entire estate",
    "Dedicated fire water storage reservoirs with 240,000 gallon capacity",
    "High-capacity fire pump system with backup power generation",
    "Residential sprinkler systems for all villas and clubhouse facilities",
    "Addressable fire alarm systems with community-wide monitoring",
    "Emergency response plan with dedicated fire brigade access routes",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section with Golf Course Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 to-green-700 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Jumeirah+Golf+Estate')" }}
        ></div>

        {/* Golf ball animation */}
        <motion.div
          className="absolute w-4 h-4 bg-white rounded-full shadow-lg"
          initial={{ x: "-10%", y: "40%" }}
          animate={{
            x: ["-10%", "110%"],
            y: ["40%", "40%", "30%", "40%"],
          }}
          transition={{
            duration: 3,
            times: [0, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
          }}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center">Jumeirah Golf Estate</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Comprehensive fire protection for Dubai's premier golf community
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
              <h2 className="text-2xl font-bold text-green-800 mb-6">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-800">{projectDetails.client}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{projectDetails.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-800">{projectDetails.completed}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Leaf className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Project Size</p>
                    <p className="font-medium text-gray-800">{projectDetails.size}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium text-gray-800">{projectDetails.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full flex items-center justify-center">
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
            <h2 className="text-3xl font-bold text-green-800 mb-6">Project Overview</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Jumeirah Golf Estates is Dubai's premier golf community, spanning 1,500 acres and featuring world-class
              golf courses, luxury villas, and extensive amenities. Our team was tasked with designing and implementing
              comprehensive fire protection infrastructure across this expansive development, ensuring the safety of
              residents and visitors while preserving the natural beauty of the landscape.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              The project presented unique challenges due to its size, the distribution of structures across the estate,
              and the need to integrate fire protection systems with the carefully designed landscape. Our approach
              focused on creating a robust network of protection that would provide rapid response capabilities while
              remaining visually unobtrusive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <img
                src="/placeholder.svg?height=300&width=200&text=Golf+Estate+Aerial"
                alt="Golf Estate Aerial"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Hydrant+Network"
                alt="Hydrant Network"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="/placeholder.svg?height=300&width=200&text=Villa+Protection"
                alt="Villa Protection"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-green-800 mb-4">Key Features</h3>

            <div className="bg-green-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-green-800 mb-4">Community Fire Protection Strategy</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2">Water Supply Network</h4>
                <p className="text-gray-700">
                  We designed a comprehensive fire water supply network with strategically placed storage reservoirs and
                  pump stations to ensure adequate water pressure and volume throughout the estate, even during peak
                  demand periods.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2">Landscape Integration</h4>
                <p className="text-gray-700">
                  Fire hydrants and access points were carefully integrated with the landscape design, using specialized
                  colors and screening vegetation to minimize visual impact while maintaining full functionality and
                  accessibility.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2">Villa Protection</h4>
                <p className="text-gray-700">
                  Each luxury villa was equipped with a residential sprinkler system and addressable fire alarm, with
                  designs customized to complement the architectural features while providing comprehensive protection.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-green-500">
                <h4 className="font-bold text-gray-800 mb-2">Clubhouse & Amenities</h4>
                <p className="text-gray-700">
                  The clubhouse and community amenities received enhanced protection with specialized systems for
                  kitchens, spa areas, and gathering spaces, ensuring appropriate coverage based on specific risk
                  profiles.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Droplet className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Sustainable Fire Protection</h3>
              </div>
              <p className="mb-4">
                A key innovation in this project was the integration of fire protection with the estate's irrigation
                system. We designed a dual-purpose water management approach that allows the fire water storage to
                support landscape irrigation during normal operations, while ensuring that fire protection reserves are
                always maintained.
              </p>
              <p>
                This sustainable approach reduced the overall water footprint of the development while providing robust
                fire protection, aligning with the estate's commitment to environmental stewardship and resource
                efficiency.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default JumeirahGolfEstate

