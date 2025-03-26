"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Droplets,
  CheckCircle,
  AlertTriangle,
  Wrench,
  Info,
  Settings,
  ArrowRight,
  Map,
  Gauge,
  Truck,
} from "lucide-react"

const FireHydrantSystem = () => {
  const [activeSection, setActiveSection] = useState("overview")

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Water Animation */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 h-72 md:h-96 relative overflow-hidden">
          {/* Animated water waves */}
          <div className="absolute inset-0">
            <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <motion.path
                fill="rgba(255, 255, 255, 0.2)"
                d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                animate={{
                  d: [
                    "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 10,
                  ease: "easeInOut",
                }}
              />
              <motion.path
                fill="rgba(255, 255, 255, 0.3)"
                d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                animate={{
                  d: [
                    "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                    "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  duration: 8,
                  ease: "easeInOut",
                }}
              />
            </svg>

            {/* Hydrant Icon */}
            <motion.div
              className="absolute top-1/4 left-1/4 text-white opacity-20"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Droplets className="w-24 h-24" />
            </motion.div>
          </div>

          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg inline-block mb-4"
              >
                <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                <h1 className="text-3xl font-bold text-blue-800">Fire Hydrant Systems</h1>
              </motion.div>

              <motion.p
                className="text-lg text-white max-w-2xl mx-auto text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Reliable water supply infrastructure for effective firefighting operations
              </motion.p>
            </div>
          </div>
        </div>

        {/* Key highlights at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Gauge className="w-8 h-8 text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">High Pressure Delivery</h3>
              <p className="text-sm text-gray-600">Consistent water flow for effective firefighting</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Map className="w-8 h-8 text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Strategic Placement</h3>
              <p className="text-sm text-gray-600">Optimal coverage for rapid emergency response</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Truck className="w-8 h-8 text-blue-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Fire Department Connection</h3>
              <p className="text-sm text-gray-600">Compatible with standard firefighting equipment</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeSection === "overview" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("overview")}
          >
            System Overview
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeSection === "components" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("components")}
          >
            Key Components
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeSection === "types" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("types")}
          >
            Hydrant Types
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeSection === "design" ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveSection("design")}
          >
            Design & Installation
          </button>
        </div>

        <div className="p-6">
          {activeSection === "overview" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-4">Fire Hydrant Systems Overview</h2>
              <p className="text-gray-700 mb-4">
                Fire hydrant systems are a critical component of external fire protection infrastructure, providing
                firefighters with a reliable and accessible water supply during emergency situations. These systems are
                designed to deliver large volumes of water at sufficient pressure to combat fires effectively, serving
                as the primary water source for fire department operations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">System Purpose</h3>
                  <p className="text-gray-700 mb-4">
                    Fire hydrant systems serve multiple critical functions in fire protection strategy:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Provide a reliable water source for firefighting operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Enable fire departments to connect hoses and equipment quickly
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Supply water to fire department pumpers and tankers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Support building sprinkler and standpipe systems during emergencies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Provide strategic water access points throughout a property or community
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <Info className="w-5 h-5 text-blue-500 mr-2" />
                    Regulatory Requirements
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Fire hydrant systems must comply with various codes and standards, including:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">UAE Fire and Life Safety Code requirements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        NFPA 24: Standard for the Installation of Private Fire Service Mains
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Local water authority regulations and specifications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">International Fire Code (IFC) requirements</span>
                    </li>
                  </ul>
                  <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-sm text-gray-700 italic">
                      "Fire hydrant systems must be designed to provide adequate water supply for firefighting
                      operations based on the hazard classification of the protected property and the requirements of
                      the authority having jurisdiction."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "components" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Key Components of Fire Hydrant Systems</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Fire Hydrants</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    The most visible component of the system, fire hydrants are strategically placed access points that
                    allow firefighters to connect hoses and draw water from the underground water supply network.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Multiple outlet connections for fire hoses</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Control valves for each outlet</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Color-coded to indicate water flow capacity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Underground Piping Network</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    A network of underground pipes that connect hydrants to the water supply, designed to withstand high
                    pressure and provide reliable water delivery during emergencies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Corrosion-resistant materials (ductile iron, HDPE)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Sized to deliver required water flow rates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Buried below frost line to prevent freezing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                      <Gauge className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Control Valves</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Valves that control water flow through the system, allowing for isolation of sections for
                    maintenance or during emergencies without disrupting the entire system.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Gate valves for main line control</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Post indicator valves (PIVs) for visual status</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Check valves to prevent backflow</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-100 text-blue-600 rounded-full mr-3">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Fire Department Connections</h3>
                  </div>
                  <p className="text-gray-700 mb-3">
                    Connections that allow fire department pumper trucks to supplement the water supply or pressure in
                    the system during firefighting operations.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        Standardized connections compatible with local fire department equipment
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Check valves to prevent backflow</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Clearly marked for quick identification during emergencies</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Wrench className="w-5 h-5 text-blue-500 mr-2" />
                  Maintenance Requirements
                </h3>
                <p className="text-gray-700 mb-3">
                  Regular maintenance is essential to ensure fire hydrant systems remain operational and reliable:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Annual flow testing to verify adequate water supply</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Regular inspection of hydrants for damage or obstruction</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Lubrication of moving parts and valve stems</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Flushing to remove sediment and debris</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Checking for leaks and proper drainage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Repainting for visibility and corrosion protection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "types" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Types of Fire Hydrants</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <motion.div
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-48 bg-blue-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-white rounded-full">
                        <Droplets className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Wet Barrel Hydrants</h3>
                    <p className="text-gray-700 mb-4">
                      Wet barrel hydrants are designed with water present in the barrel at all times, with each outlet
                      having its own valve. These hydrants are ideal for regions with warm climates where freezing is
                      not a concern.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Immediate water availability when outlet is opened</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Multiple independently controlled outlets</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Common in the UAE and other warm climate regions</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-48 bg-blue-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-4 bg-white rounded-full">
                        <Droplets className="w-12 h-12 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Dry Barrel Hydrants</h3>
                    <p className="text-gray-700 mb-4">
                      Dry barrel hydrants are designed with a main valve located below the frost line, keeping water out
                      of the barrel until the hydrant is activated. These are used in regions where freezing
                      temperatures are a concern.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Freeze-resistant design for cold climates</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Main valve located below ground at supply pipe level</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Automatic drain valve to prevent water accumulation</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Wall Hydrants</h3>
                  <p className="text-gray-700 mb-3">
                    Wall hydrants are mounted on exterior walls of buildings, providing access to the building's fire
                    water supply. They are commonly used in urban areas with limited space for traditional hydrants.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Space-saving design for urban environments</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Connected to building's fire water supply</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Underground Hydrants</h3>
                  <p className="text-gray-700 mb-3">
                    Underground hydrants are installed below ground level with only a cover plate visible at the
                    surface. They are used in areas where above-ground hydrants might be obstructive or aesthetically
                    undesirable.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Minimal visual impact on surroundings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Protected from vehicle damage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg border border-blue-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Standpipe Hydrants</h3>
                  <p className="text-gray-700 mb-3">
                    Standpipe hydrants are connected to a building's standpipe system, providing firefighters with
                    access to water at various levels within tall buildings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Essential for high-rise firefighting operations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Located in stairwells or designated areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeSection === "design" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Design & Installation Considerations</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Strategic Placement</h3>
                  <p className="text-gray-700 mb-4">
                    The effective placement of fire hydrants is critical to ensure adequate coverage and accessibility
                    during emergencies:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Maximum Distance Requirements:</span> Hydrants must be placed so
                        that all parts of buildings are within the required distance (typically 100-150 meters) from at
                        least one hydrant
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Accessibility:</span> Hydrants must be easily accessible to fire
                        department vehicles, with clear space around them for operation
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Protection from Damage:</span> Hydrants should be protected from
                        vehicle impact in areas with traffic, using bollards or other protective measures
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Visibility:</span> Hydrants must be clearly visible and
                        identifiable, with appropriate clearance from obstructions
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Water Supply Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    Fire hydrant systems must be designed to provide adequate water flow and pressure for firefighting
                    operations:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Flow Rate:</span> Minimum flow rates are determined based on the
                        building's occupancy, size, and fire hazard classification (typically 500-2,000 gallons per
                        minute)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Pressure Requirements:</span> Minimum residual pressure at the
                        hydrant outlet (typically 20-35 psi) must be maintained during maximum flow conditions
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Duration:</span> Water supply must be sufficient to maintain the
                        required flow rate for the minimum duration specified by codes (typically 1-4 hours)
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="p-1 bg-blue-100 text-blue-600 rounded-full mr-2 mt-0.5">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium">Reliability:</span> Water sources must be reliable and available
                        year-round, with redundancy measures where required
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Installation Process</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">1</span>
                      </div>
                      Site Preparation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Excavation of trenches for underground piping, preparation of hydrant locations, and coordination
                      with other utilities to avoid conflicts.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">2</span>
                      </div>
                      Piping Installation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Installation of underground piping network using approved materials, with proper bedding, thrust
                      blocks, and joint restraints to ensure system integrity.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">3</span>
                      </div>
                      Hydrant Installation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Proper mounting of hydrants on concrete pads, connection to the water supply network, and
                      installation of isolation valves for maintenance.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">4</span>
                      </div>
                      Testing
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Pressure testing of the piping network, flow testing of hydrants, and verification of system
                      performance against design requirements.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">5</span>
                      </div>
                      Inspection & Approval
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Inspection by authorities having jurisdiction to verify compliance with codes and standards,
                      followed by final approval for use.
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-bold">6</span>
                      </div>
                      Documentation
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Preparation of as-built drawings, system documentation, and maintenance instructions for the
                      building owner or facility manager.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-blue-500 mr-2" />
                  Common Design Challenges
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Water Supply Limitations</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      In areas with limited municipal water supply, additional measures may be required:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Fire water storage tanks to ensure adequate volume</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Fire pumps to boost pressure to required levels</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Alternative water sources such as wells or reservoirs</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Site Constraints</h4>
                    <p className="text-gray-700 text-sm mb-4">
                      Physical site limitations can present challenges for hydrant placement:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Limited space requiring creative placement solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Coordination with landscaping and architectural features</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Traffic flow considerations for emergency vehicle access</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Applications Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Applications & Use Cases</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Commercial buildings"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">Commercial Developments</h3>
              <p className="text-blue-100 text-sm">
                Shopping malls, office complexes, and mixed-use developments require comprehensive hydrant coverage to
                protect large occupant populations and valuable assets.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Industrial facility"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">Industrial Facilities</h3>
              <p className="text-blue-100 text-sm">
                Manufacturing plants, warehouses, and processing facilities often require enhanced hydrant systems due
                to increased fire risks and specialized firefighting needs.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-blue-600 rounded-xl overflow-hidden relative text-white"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
          >
            <img
              src="/placeholder.svg?height=300&width=500"
              alt="Residential community"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
            <div className="p-5 relative z-10">
              <h3 className="font-bold text-lg mb-2">Residential Communities</h3>
              <p className="text-blue-100 text-sm">
                Housing developments, apartment complexes, and gated communities require strategically placed hydrants
                to ensure all residences are within protected range.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ensure Reliable Fire Protection</h3>
            <p className="text-blue-100">
              Contact our team today to discuss your fire hydrant system needs and ensure your property has the water
              supply infrastructure required for effective firefighting operations.
            </p>
          </div>
          <motion.button
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default FireHydrantSystem

