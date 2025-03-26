"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Battery,
  CheckCircle,
  CloudLightningIcon as Lightning,
  Shield,
  Clock,
  Zap,
  Bolt,
  BarChart3,
  Cpu,
} from "lucide-react"

const CentralBatterySystem = () => {
  const [activeTab, setActiveTab] = useState("overview")
  const [showComparison, setShowComparison] = useState(false)

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with 3D Battery Animation */}
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-lg mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Animated Battery Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{
                  scale: [0.8, 1.1, 0.9, 1],
                  rotateY: [0, 180, 180, 0],
                  opacity: [0.5, 1, 1, 0.8, 1],
                }}
                transition={{
                  duration: 4,
                  times: [0, 0.3, 0.6, 1],
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 1,
                }}
                className="text-blue-200 opacity-20"
              >
                <Battery className="w-96 h-96" strokeWidth={0.5} />
              </motion.div>
            </div>

            {/* Electric Lines */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-1/2 h-0.5 bg-blue-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0.5, 1, 0],
                opacity: [0, 0.8, 0.4, 0.6, 0],
                transition: {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                },
              }}
              style={{ transformOrigin: "left" }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-1/2 h-0.5 bg-blue-400"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 0.5, 1, 0.7, 0],
                opacity: [0, 0.4, 0.8, 0.5, 0],
                transition: {
                  duration: 2.5,
                  delay: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                },
              }}
              style={{ transformOrigin: "right" }}
            />
          </div>

          <div className="pt-40 pb-20 px-8 relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h1
                className="text-3xl sm:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Centralized Power for Your Safety Systems
              </motion.h1>
              <motion.p
                className="text-lg text-blue-100 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Reliable backup power solutions that ensure your emergency lighting and safety systems remain
                operational when you need them most.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              >
                <button
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors"
                  onClick={() => setShowComparison(!showComparison)}
                >
                  {showComparison ? "Hide Comparison" : "Compare Systems"}
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* System Comparison Section (Conditional) */}
      <AnimatePresence>
        {showComparison && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <Battery className="w-6 h-6 mr-2 text-blue-500" />
                Central Battery vs. Self-Contained Systems
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Feature
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-blue-500 uppercase tracking-wider"
                      >
                        Central Battery System
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Self-Contained Units
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="text-green-500 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> Centralized testing and maintenance
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Each unit must be individually tested and maintained
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Initial Cost</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">Higher initial investment</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="text-green-500 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> Lower upfront cost
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Long-Term Cost</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="text-green-500 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> Lower long-term maintenance costs
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Higher ongoing costs due to multiple battery replacements
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        System Monitoring
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="text-green-500 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> Comprehensive monitoring from one location
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Limited monitoring capabilities
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Reliability</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="text-green-500 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-1" /> High reliability with redundancy options
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Individual failures possible without detection
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Best For</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Larger buildings, high-rise structures, complex facilities
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Small buildings, simple layouts, limited fixture counts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Tabs Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm focus:outline-none transition-colors ${
                activeTab === "overview"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("overview")}
            >
              System Overview
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm focus:outline-none transition-colors ${
                activeTab === "components"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("components")}
            >
              Key Components
            </button>
            <button
              className={`py-4 px-6 border-b-2 font-medium text-sm focus:outline-none transition-colors ${
                activeTab === "benefits"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("benefits")}
            >
              Benefits
            </button>
          </nav>
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">What is a Central Battery System?</h2>
                    <p className="text-gray-700 mb-4">
                      A Central Battery System (CBS) provides a centralized power backup solution for emergency lighting
                      and critical safety systems. Unlike self-contained emergency lights with individual batteries, a
                      CBS consolidates backup power in a single, maintained location, distributing it to multiple
                      emergency fixtures throughout the building when needed.
                    </p>
                    <p className="text-gray-700 mb-4">
                      These systems are particularly valuable in larger buildings and complexes where managing hundreds
                      of individual battery units would be impractical and unreliable. Central Battery Systems offer
                      streamlined maintenance, comprehensive monitoring, and enhanced reliability for your emergency
                      lighting infrastructure.
                    </p>
                    <div className="flex items-center gap-2 mt-6">
                      <Clock className="w-5 h-5 text-blue-500" />
                      <span className="text-sm text-gray-600">
                        Typical system runtime: 3 hours (standard) / 8 hours (extended)
                      </span>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-800 mb-3">How It Works</h3>
                      <ol className="space-y-4">
                        <li className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold flex-shrink-0 mr-3">
                            1
                          </span>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-medium">Normal Operation:</span> The CBS continuously charges its
                              batteries while monitoring the main power supply.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold flex-shrink-0 mr-3">
                            2
                          </span>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-medium">Power Failure Detection:</span> When mains power is lost,
                              the system automatically detects the failure.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold flex-shrink-0 mr-3">
                            3
                          </span>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-medium">Instantaneous Switchover:</span> The CBS switches to battery
                              power with no interruption to connected emergency lighting.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold flex-shrink-0 mr-3">
                            4
                          </span>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-medium">Sustained Operation:</span> The system provides power to all
                              connected emergency lighting fixtures for the required duration.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white font-semibold flex-shrink-0 mr-3">
                            5
                          </span>
                          <div>
                            <p className="text-gray-700">
                              <span className="font-medium">Automatic Recharging:</span> Once main power is restored,
                              the system automatically recharges its batteries.
                            </p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "components" && (
              <motion.div
                key="components"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl font-bold text-gray-800 mb-6">Key System Components</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center">
                        <Battery className="w-6 h-6 text-blue-500 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">Battery Unit</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">High-capacity, sealed maintenance-free batteries</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">10-year design life with proper maintenance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Temperature-controlled environment to maximize lifespan</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center">
                        <Cpu className="w-6 h-6 text-blue-500 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">Control System</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Microprocessor-based control for precise monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Automatic testing and reporting capabilities</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Remote monitoring options via BMS integration</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center">
                        <Lightning className="w-6 h-6 text-blue-500 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">Charging System</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            Intelligent charging algorithms to maximize battery life
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Temperature compensation for optimal charging</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Protection against overcharging and deep discharge</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-5 border-b border-gray-200 bg-gray-50">
                      <div className="flex items-center">
                        <BarChart3 className="w-6 h-6 text-blue-500 mr-3" />
                        <h3 className="text-lg font-semibold text-gray-800">Distribution System</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Circuit protection with individual monitoring</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Sub-circuit fault isolation capability</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Scalable design to accommodate building expansions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "benefits" && (
              <motion.div
                key="benefits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Simplified Maintenance</h3>
                  <p className="text-gray-700">
                    Centralized battery location means all maintenance can be performed in one location, eliminating the
                    need to access and test hundreds of individual battery units throughout the building.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Enhanced Reliability</h3>
                  <p className="text-gray-700">
                    High-capacity battery systems with redundancy options provide exceptional reliability. Continuous
                    monitoring ensures any potential issues are detected and addressed before an emergency occurs.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <Bolt className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Longer Runtimes</h3>
                  <p className="text-gray-700">
                    Central systems can provide extended runtimes beyond the standard 90 minutes, with options available
                    for 3, 6, or even 8 hours of emergency operation for critical facilities.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Cost Effectiveness</h3>
                  <p className="text-gray-700">
                    While initial investment is higher, long-term costs are significantly reduced through centralized
                    maintenance, longer battery lifespans, and reduced labor requirements for testing and replacement.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Advanced Monitoring</h3>
                  <p className="text-gray-700">
                    Comprehensive system monitoring provides real-time status updates, automatic testing, and detailed
                    reporting capabilities to ensure your emergency lighting is always ready.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <div className="p-3 bg-blue-500 text-white rounded-full w-fit mb-4">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Regulatory Compliance</h3>
                  <p className="text-gray-700">
                    Automatic testing and documentation capabilities ensure compliance with UAE Civil Defense
                    requirements for emergency lighting systems, with detailed records of all tests.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Application Scenarios */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Ideal Applications</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="High-rise building"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">High-Rise Buildings</h3>
              <p className="text-blue-100 text-sm">
                Multi-story buildings benefit from centralized battery systems that provide reliable emergency lighting
                throughout all floors from a single maintained location.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img src="/placeholder.svg?height=300&width=500" alt="Hospital" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">Healthcare Facilities</h3>
              <p className="text-blue-100 text-sm">
                Hospitals and medical centers require extended runtime capabilities and absolute reliability for their
                emergency lighting systems to ensure patient safety.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img src="/placeholder.svg?height=300&width=500" alt="Shopping mall" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">Commercial Complexes</h3>
              <p className="text-blue-100 text-sm">
                Shopping malls, office buildings, and large retail spaces with hundreds of emergency lighting fixtures
                benefit from simplified maintenance and monitoring.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold mb-2">Centralize Your Emergency Power</h3>
            <p className="text-blue-100">
              Contact our experts today to learn how a Central Battery System can enhance your facility's safety and
              reduce long-term maintenance costs.
            </p>
          </div>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default CentralBatterySystem

