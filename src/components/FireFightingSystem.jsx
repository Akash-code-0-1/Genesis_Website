"use client"
import { motion } from "framer-motion"
import {
  Droplet,
  Shield,
  CheckCircle,
  Clock,
  PenToolIcon as Tool,
  ArrowRight,
  AlertTriangle,
  Users,
} from "lucide-react"
// import ServiceLayout from "./ServiceLayout"

const FireFightingSystem = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative h-64 md:h-80">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Fire Fighting System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Active Fire Protection</h2>
              <p className="text-gray-700">
                Our comprehensive fire fighting systems provide the tools and equipment needed to actively combat fires
                when they occur.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overview Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 text-blue-500 rounded-lg mr-4">
            <Droplet className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
        </div>

        <p className="text-gray-700 mb-6">
          Fire fighting systems are designed to provide the means to combat fires actively when they occur. Genesis
          offers a complete range of fire fighting equipment and systems, from portable fire extinguishers to complex
          fire hose installations. Our systems are designed for reliability and ease of use during emergency situations,
          ensuring that building occupants and emergency responders have the tools they need.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-blue-500" />
              System Components
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fire hose reels and cabinets</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Portable fire extinguishers (various types)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Landing valves and breeching inlets</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Fire blankets and first aid equipment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Standpipe systems for firefighter access</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-blue-500" />
              Our Process
            </h3>
            <ol className="space-y-2">
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  1
                </span>
                <span className="text-gray-700">Risk assessment and needs analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">Strategic equipment placement planning</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">Installation by certified technicians</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">Staff training on equipment use</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  5
                </span>
                <span className="text-gray-700">Regular maintenance and inspections</span>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>

      {/* Equipment Types Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Fire Fighting Equipment</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-40 bg-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 bg-white rounded-full">
                  <Droplet className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Fire Extinguishers</h3>
              <p className="text-gray-700 mb-4">
                Portable fire extinguishers are the first line of defense against small fires. We provide various types
                including CO2, foam, dry powder, and wet chemical extinguishers for different fire classes.
              </p>
              <motion.button className="text-blue-500 font-medium flex items-center" whileHover={{ x: 5 }}>
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-40 bg-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 bg-white rounded-full">
                  <Tool className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Fire Hose Reels</h3>
              <p className="text-gray-700 mb-4">
                Fire hose reels provide a continuous supply of water for firefighting. They are designed for easy
                operation by building occupants and are effective against Class A fires.
              </p>
              <motion.button className="text-blue-500 font-medium flex items-center" whileHover={{ x: 5 }}>
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-40 bg-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-3 bg-white rounded-full">
                  <Shield className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Standpipe Systems</h3>
              <p className="text-gray-700 mb-4">
                Standpipe systems provide firefighters with a water supply connection inside buildings, allowing them to
                quickly connect hoses and fight fires on upper floors.
              </p>
              <motion.button className="text-blue-500 font-medium flex items-center" whileHover={{ x: 5 }}>
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features & Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg w-fit mb-3">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Immediate Response</h3>
            <p className="text-gray-700">
              Strategically placed equipment allows for immediate response to fire incidents before they spread.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg w-fit mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">User-Friendly</h3>
            <p className="text-gray-700">
              Equipment is designed for ease of use, allowing building occupants to respond effectively.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg w-fit mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
            <p className="text-gray-700">
              All systems meet or exceed UAE Civil Defense requirements and international standards.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Training Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Staff Training Programs</h2>
            <p className="text-blue-100 mb-6">
              Having the right equipment is only part of the solution. We provide comprehensive training programs to
              ensure your staff knows how to use fire fighting equipment effectively in emergency situations.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-100" />
                <span>Hands-on extinguisher training</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-100" />
                <span>Fire hose operation techniques</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-100" />
                <span>Emergency response procedures</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-100" />
                <span>Regular refresher courses</span>
              </li>
            </ul>
            <motion.button
              className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inquire About Training
            </motion.button>
          </div>
          <div className="hidden md:block">
            <img src="/placeholder.svg?height=300&width=400" alt="Fire Training" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need a Fire Fighting System?</h3>
            <p className="text-gray-600">Contact us today for a comprehensive assessment and customized solution.</p>
          </div>
          <motion.button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get a Free Quote
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default FireFightingSystem

