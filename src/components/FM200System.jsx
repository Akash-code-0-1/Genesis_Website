"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Cloud,
  CheckCircle,
  AlertTriangle,
  Clock,
  Server,
  Database,
  Film,
  ArrowRight,
  List,
  BarChart4,
  Terminal,
  Eye,
  Users,
} from "lucide-react"

const FM200System = () => {
  const [activeTab, setActiveTab] = useState("about")

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
      {/* Hero Section with Interactive Animation */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="absolute inset-0 bg-cyan-900">
          <div className="h-full w-full relative overflow-hidden">
            {/* FM-200 Gas Animation */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <radialGradient id="gas-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.7)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </radialGradient>
              </defs>

              {/* Gas clouds */}
              <motion.circle
                cx="30"
                cy="40"
                r="5"
                fill="url(#gas-gradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [0, 3, 5],
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1,
                  },
                }}
              />

              <motion.circle
                cx="60"
                cy="60"
                r="5"
                fill="url(#gas-gradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [0, 4, 6],
                  transition: {
                    duration: 5,
                    delay: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 1.5,
                  },
                }}
              />

              <motion.circle
                cx="80"
                cy="30"
                r="5"
                fill="url(#gas-gradient)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 3, 5],
                  transition: {
                    duration: 4.5,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  },
                }}
              />
            </svg>

            {/* Server Rack Icons */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 opacity-10">
                <Server className="w-24 h-24 text-white" />
                <Database className="w-24 h-24 text-white" />
                <Server className="w-24 h-24 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-32 pb-20 px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg inline-block mb-6"
            >
              <Cloud className="w-12 h-12 text-cyan-600 mx-auto mb-2" />
              <h1 className="text-3xl font-bold text-cyan-800">FM-200 Fire Suppression</h1>
            </motion.div>

            <motion.p
              className="text-lg text-white mb-8 text-shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Fast-acting clean agent fire protection for sensitive equipment and valuable assets
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="inline-block"
            >
              <button
                className="bg-white text-cyan-700 hover:bg-cyan-50 px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors"
                onClick={() => {
                  document.getElementById("advantages").scrollIntoView({ behavior: "smooth" })
                }}
              >
                Explore Benefits
              </button>
            </motion.div>
          </div>
        </div>

        {/* Key highlights at bottom */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 bg-white bg-opacity-90 border-t border-cyan-100">
          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-cyan-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Clock className="w-8 h-8 text-cyan-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">10-Second Discharge</h3>
              <p className="text-sm text-gray-600">Extinguishes fires quickly before significant damage occurs</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-cyan-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <AlertTriangle className="w-8 h-8 text-cyan-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Safe for Occupants</h3>
              <p className="text-sm text-gray-600">Non-toxic agent can be used in occupied spaces</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <CheckCircle className="w-8 h-8 text-cyan-600 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">No Residue</h3>
              <p className="text-sm text-gray-600">Leaves no residue that could damage sensitive equipment</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Tabs Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "about" ? "bg-cyan-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About FM-200
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "how" ? "bg-cyan-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("how")}
          >
            How It Works
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "applications" ? "bg-cyan-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("applications")}
          >
            Applications
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "comparison" ? "bg-cyan-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("comparison")}
          >
            System Comparison
          </button>
        </div>

        <div className="p-6">
          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <Cloud className="mr-2 w-6 h-6 text-cyan-600" />
                  What is FM-200?
                </h2>
                <p className="text-gray-700 mb-4">
                  FM-200™ (HFC-227ea) is a clean agent fire suppression system that extinguishes fires by removing heat
                  rather than by reducing oxygen. It's environmentally acceptable as a replacement for Halon 1301,
                  providing effective fire protection with minimal environmental impact.
                </p>
                <p className="text-gray-700 mb-4">
                  The system works by discharging the FM-200 agent into a protected space, typically within 10 seconds,
                  and extinguishing the fire by interrupting the chemical chain reaction. Unlike water or foam-based
                  systems, FM-200 leaves no residue, making it ideal for protecting sensitive equipment, valuable
                  assets, and critical facilities.
                </p>
                <div className="flex items-center mt-6 bg-cyan-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-600 mr-2" />
                  <span className="text-sm text-gray-700">
                    FM-200 systems are regulated under NFPA 2001: Standard on Clean Agent Fire Extinguishing Systems
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Key Properties:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Chemical Formula:</span> CF3CHFCF3
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Appearance:</span> Colorless, odorless gas
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Ozone Depletion Potential:</span> Zero
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Atmospheric Lifetime:</span> 31-42 years (shorter than many
                      alternatives)
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Safety:</span> Safe for use in occupied spaces at design
                      concentrations
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-cyan-100 text-cyan-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Discharge Time:</span> 10 seconds or less
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "how" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-4">How FM-200 Systems Work</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Eye className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">1. Detection</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Smoke, heat, or flame detectors continuously monitor the protected area. When fire is detected, they
                    send a signal to the control panel.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Terminal className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">2. Verification</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The control panel verifies the alarm signal. Systems can be configured for single or cross-zone
                    detection to prevent false discharges.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <AlertTriangle className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">3. Pre-Discharge</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Upon alarm verification, audible and visual warnings activate to alert occupants that system
                    discharge is imminent.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Cloud className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">4. Discharge</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The FM-200 agent is released from the storage cylinders through a network of pipes and special
                    discharge nozzles throughout the protected area.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <BarChart4 className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">5. Extinguishment</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    The agent reaches its design concentration within 10 seconds and extinguishes the fire by removing
                    heat from the fire triangle.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-6 h-6 text-cyan-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">6. Reset</h3>
                  </div>
                  <p className="text-gray-700 text-sm">
                    After discharge, the room can be ventilated and the system recharged to restore protection quickly,
                    with minimal cleanup required.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <List className="w-5 h-5 text-cyan-600 mr-2" />
                  Key System Components
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Agent storage cylinders with valve assemblies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Pipe network with discharge nozzles</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Detection devices (smoke, heat, flame detectors)</span>
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Control panel with backup power</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Manual release stations and abort switches</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-cyan-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Audible and visual alarms</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "applications" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Ideal Applications for FM-200</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-cyan-800 flex items-center justify-center">
                    <Server className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Centers</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Protects servers, network equipment, and data storage systems without causing damage from water or
                      residue.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Rapid extinguishment minimizes downtime</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>No cleanup required after discharge</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-cyan-700 flex items-center justify-center">
                    <Database className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telecommunications Facilities</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Safeguards critical communication equipment and infrastructure against fire damage.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Protects network connectivity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Maintains service continuity</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-40 bg-cyan-600 flex items-center justify-center">
                    <Film className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Museums & Archives</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Protects irreplaceable artifacts, documents, and cultural heritage items without causing water
                      damage.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>Preserves valuable collections</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-cyan-600 flex-shrink-0 mt-0.5" />
                        <span>No residue that could damage artifacts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-32 bg-cyan-700 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <AlertTriangle className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Healthcare Facilities</h3>
                    <p className="text-gray-600 text-sm">
                      Protects medical equipment, laboratories, and patient records while being safe for occupants.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-32 bg-cyan-700 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: 0.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Server className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Control Rooms</h3>
                    <p className="text-gray-600 text-sm">
                      Safeguards critical infrastructure control systems for utilities, transportation, and industrial
                      facilities.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="h-32 bg-cyan-700 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 2, -2, 0],
                      }}
                      transition={{
                        duration: 3,
                        delay: 1,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    >
                      <Database className="w-12 h-12 text-white" />
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-1">Electrical Rooms</h3>
                    <p className="text-gray-600 text-sm">
                      Protects electrical equipment and switchgear without introducing conductive materials.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "comparison" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">FM-200 vs. Other Fire Suppression Systems</h2>

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
                        className="px-6 py-3 text-left text-xs font-medium text-cyan-600 uppercase tracking-wider"
                      >
                        FM-200
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        CO2 Systems
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Water Sprinklers
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Safe for Occupied Spaces
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">✖ (Life safety concern)</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Residue After Discharge
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ None</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ None</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">✖ Significant water damage</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Discharge Time</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ 10 seconds or less</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ 60 seconds or less</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                        ⚠ Continuous until shutdown
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Safe for Electronics
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                        <CheckCircle className="w-5 h-5" />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">✖</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Environmental Impact
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                        ⚠ Some global warming potential
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">⚠ Greenhouse gas</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ Minimal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Room Integrity Requirements
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">⚠ Moderate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">✖ Strict</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ Minimal</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Initial Cost</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">✖ Higher</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">⚠ Moderate</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">✓ Lower</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Benefits Section */}
      <motion.div
        id="advantages"
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <CheckCircle className="w-6 h-6 mr-2 text-cyan-600" />
          Advantages of FM-200 Systems
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-cyan-50 rounded-lg p-5 border border-cyan-100"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <Clock className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Rapid Response</h3>
            <p className="text-gray-700">
              FM-200 systems discharge within 10 seconds, extinguishing fires quickly before they can cause extensive
              damage.
            </p>
          </motion.div>

          <motion.div
            className="bg-cyan-50 rounded-lg p-5 border border-cyan-100"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <Server className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Equipment Protection</h3>
            <p className="text-gray-700">
              Leaves no residue that could damage sensitive electronic equipment, valuable documents, or artifacts.
            </p>
          </motion.div>

          <motion.div
            className="bg-cyan-50 rounded-lg p-5 border border-cyan-100"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <Users className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Human Safety</h3>
            <p className="text-gray-700">
              Safe for use in occupied spaces at design concentrations, allowing for the protection of areas where
              people work.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <motion.div
            className="bg-cyan-50 rounded-lg p-5 border border-cyan-100"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <Cloud className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Environmental Considerations</h3>
            <p className="text-gray-700">
              Zero ozone depletion potential, making it an environmentally acceptable replacement for Halon systems.
              While it does have some global warming potential, its overall environmental impact is reduced by its
              efficiency and the small quantities required for fire suppression.
            </p>
          </motion.div>

          <motion.div
            className="bg-cyan-50 rounded-lg p-5 border border-cyan-100"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <CheckCircle className="w-10 h-10 text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
            <p className="text-gray-700">
              FM-200 systems are accepted by major regulatory bodies worldwide, including NFPA, UL, FM Global, and UAE
              Civil Defense. They comply with international standards for clean agent fire suppression, making them
              suitable for use in facilities that must meet strict fire safety regulations.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Design & Installation */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Design & Installation Process</h2>

        <div className="space-y-5">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Site Assessment & Risk Analysis</h3>
              <p className="text-gray-700">
                Our engineers conduct a comprehensive evaluation of your facility to identify fire risks and determine
                the optimal protection strategy.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Custom System Design</h3>
              <p className="text-gray-700">
                We create a detailed system design tailored to your specific needs, including agent quantity
                calculations, container sizing, pipe network layout, and nozzle placement.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Room Integrity Testing</h3>
              <p className="text-gray-700">
                We perform door fan tests to verify that the protected space can maintain the required agent
                concentration for the minimum protection time.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              4
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Professional Installation</h3>
              <p className="text-gray-700">
                Our certified technicians install all system components according to NFPA standards and manufacturer
                specifications to ensure optimal performance.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              5
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Testing & Commissioning</h3>
              <p className="text-gray-700">
                We conduct comprehensive testing of all system components, including control panels, detection devices,
                and alarm systems to verify proper operation.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 text-white font-semibold flex-shrink-0 mr-4">
              6
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">Staff Training & Documentation</h3>
              <p className="text-gray-700">
                We provide comprehensive training for your staff and complete documentation of the system, including
                operation manuals and maintenance guidelines.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Protect Your Critical Assets</h3>
            <p className="text-cyan-100">
              Contact us today to discuss how an FM-200 fire suppression system can safeguard your valuable equipment
              and assets.
            </p>
          </div>
          <motion.button
            className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg flex items-center"
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

export default FM200System

