"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  SprayCanIcon,
  CheckCircle,
  AlertTriangle,
  Zap,
  Info,
  Settings,
  ArrowRight,
  Cloud,
  Server,
  Database,
  Flame,
} from "lucide-react"
// import ServiceLayout from "./ServiceLayout"

const AerosolSystem = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Particle Animation */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="bg-gradient-to-r from-teal-600 to-teal-400 h-72 md:h-96 relative overflow-hidden">
          {/* Animated aerosol particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white"
                initial={{
                  x: Math.random() * 100 - 50 + "%",
                  y: "100%",
                  opacity: 0,
                  width: Math.random() * 10 + 5,
                  height: Math.random() * 10 + 5,
                }}
                animate={{
                  y: "-100%",
                  opacity: [0, 0.7, 0],
                  scale: [1, 1.5, 0.8],
                }}
                transition={{
                  duration: Math.random() * 5 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
                style={{
                  filter: "blur(2px)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10 h-full flex items-center justify-center p-8">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg inline-block mb-4"
              >
                <SprayCanIcon className="w-12 h-12 text-teal-600 mx-auto mb-2" />
                <h1 className="text-3xl font-bold text-teal-800">Condensed Aerosol Fire Suppression</h1>
              </motion.div>

              <motion.p
                className="text-lg text-white max-w-2xl mx-auto text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Advanced fire protection technology that's efficient, compact, and environmentally responsible
              </motion.p>
            </div>
          </div>
        </div>

        {/* Key highlights at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-teal-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Zap className="w-8 h-8 text-teal-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Ultra-Fast Activation</h3>
              <p className="text-sm text-gray-600">Extinguishes fires within seconds of detection</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-teal-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Cloud className="w-8 h-8 text-teal-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Environmentally Friendly</h3>
              <p className="text-sm text-gray-600">Zero ozone depletion and minimal global warming potential</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Settings className="w-8 h-8 text-teal-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">No Piping Required</h3>
              <p className="text-sm text-gray-600">Standalone units eliminate complex installation</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Tabs Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
        <div className="flex overflow-x-auto">
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "overview" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("overview")}
          >
            About Aerosol Systems
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "how" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("how")}
          >
            How It Works
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "applications" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("applications")}
          >
            Applications
          </button>
          <button
            className={`px-6 py-4 font-medium text-sm transition-colors ${
              activeTab === "advantages" ? "bg-teal-600 text-white" : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("advantages")}
          >
            Advantages
          </button>
        </div>

        <div className="p-6">
          {activeTab === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row gap-8"
            >
              <div className="md:w-1/2">
                <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <SprayCanIcon className="mr-2 w-6 h-6 text-teal-600" />
                  What are Condensed Aerosol Systems?
                </h2>
                <p className="text-gray-700 mb-4">
                  Condensed aerosol fire suppression systems represent one of the newest and most innovative
                  technologies in fire protection. These systems use a solid compound that, when activated, transforms
                  into an ultra-fine aerosol suspension that efficiently extinguishes fires by interrupting the chemical
                  chain reaction of combustion.
                </p>
                <p className="text-gray-700 mb-4">
                  Unlike traditional fire suppression systems that rely on gases, water, or foam, aerosol systems use
                  potassium-based compounds that are environmentally friendly and highly effective against a wide range
                  of fire types. The aerosol particles remain suspended in the protected area for an extended period,
                  providing continued protection against re-ignition.
                </p>
                <div className="flex items-center mt-6 bg-teal-50 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-teal-600 mr-2" />
                  <span className="text-sm text-gray-700">
                    Aerosol systems are recognized by NFPA 2010: Standard for Fixed Aerosol Fire-Extinguishing Systems
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Key Characteristics:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Particle Size:</span> Ultra-fine (1-2 microns), allowing for
                      three-dimensional distribution
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Extinguishing Mechanism:</span> Primarily interrupts the chemical
                      chain reaction of combustion
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Environmental Impact:</span> Zero ozone depletion potential, minimal
                      global warming impact
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Storage:</span> Solid-state compound that remains stable for 10+
                      years
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Installation:</span> No pressurized cylinders or piping network
                      required
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-1 bg-teal-100 text-teal-600 rounded-full mr-2 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-medium">Maintenance:</span> Minimal maintenance requirements with long
                      service life
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {activeTab === "how" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">How Aerosol Fire Suppression Works</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">1</span>
                    </div>
                    Detection
                  </h3>
                  <p className="text-gray-700">
                    The system is triggered either by automatic detection devices (heat, smoke, or flame detectors) or
                    manual activation. When a fire is detected, an electrical signal is sent to the aerosol generators.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">2</span>
                    </div>
                    Activation
                  </h3>
                  <p className="text-gray-700">
                    Upon receiving the signal, the solid compound inside the aerosol generator is ignited. This
                    initiates a controlled chemical reaction that transforms the solid compound into an ultra-fine
                    aerosol.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">3</span>
                    </div>
                    Discharge
                  </h3>
                  <p className="text-gray-700">
                    The aerosol is discharged through specially designed openings in the generator. The discharge is
                    rapid but controlled, with the aerosol quickly filling the protected space.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">4</span>
                    </div>
                    Distribution
                  </h3>
                  <p className="text-gray-700">
                    The ultra-fine particles (1-2 microns) behave like a gas, allowing them to spread throughout the
                    protected area and reach hidden or obstructed spaces where fires might be burning.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">5</span>
                    </div>
                    Extinguishment
                  </h3>
                  <p className="text-gray-700">
                    The aerosol particles primarily extinguish the fire by interrupting the chemical chain reaction of
                    combustion. They also have secondary cooling and oxygen displacement effects.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mr-2">
                      <span className="text-teal-600 font-bold">6</span>
                    </div>
                    Continued Protection
                  </h3>
                  <p className="text-gray-700">
                    The aerosol particles remain suspended in the air for an extended period (typically 30-60 minutes),
                    providing continued protection against re-ignition of the fire.
                  </p>
                </div>
              </div>

              <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                  <Info className="w-5 h-5 text-teal-600 mr-2" />
                  Fire Extinguishing Mechanism
                </h3>
                <p className="text-gray-700 mb-4">
                  Aerosol systems primarily extinguish fires through chemical inhibition. The potassium-based aerosol
                  particles react with the free radicals in the flame (primarily OH, H, and O), interrupting the chain
                  reaction necessary for combustion to continue. This mechanism is highly effective against Class A
                  (ordinary combustibles), Class B (flammable liquids), and Class C (electrical) fires.
                </p>
                <p className="text-gray-700">
                  Unlike traditional gaseous systems that work by reducing oxygen levels, aerosol systems can extinguish
                  fires without significantly reducing oxygen concentration, making them safer for use in occupied
                  spaces (though evacuation is still recommended during discharge).
                </p>
              </div>
            </motion.div>
          )}

          {activeTab === "applications" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Ideal Applications for Aerosol Systems</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-40 bg-teal-600 flex items-center justify-center">
                    <Server className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrical Cabinets</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Compact aerosol units can be installed directly inside electrical cabinets, switchgear, and
                      control panels to provide targeted protection without the need for external piping or connections.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Protects critical electrical infrastructure</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Non-conductive and safe for live equipment</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-40 bg-teal-600 flex items-center justify-center">
                    <Database className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Telecommunications Equipment</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Ideal for protecting server rooms, data centers, and telecommunications facilities where
                      traditional water-based systems could cause significant damage to sensitive equipment.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Leaves no residue on sensitive electronics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Minimal space requirements for installation</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="h-40 bg-teal-600 flex items-center justify-center">
                    <Flame className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Industrial Equipment</h3>
                    <p className="text-gray-700 text-sm mb-4">
                      Effective for protecting enclosed machinery, engine compartments, and industrial process equipment
                      where fires can start and spread rapidly.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Withstands harsh industrial environments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-1 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>Effective against multiple fire types</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Additional Applications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Vehicle Engine Compartments:</span> Buses, heavy equipment, and
                        specialized vehicles
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">CNC Machines:</span> Protection for valuable manufacturing
                        equipment and enclosed processing areas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Marine Applications:</span> Engine rooms, electrical compartments,
                        and cargo holds on vessels
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Wind Turbines:</span> Nacelle and electrical control areas where
                        access is difficult
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                  <h3 className="font-semibold text-gray-800 mb-3">Special Hazard Areas</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Flammable Liquid Storage:</span> Effective protection for areas
                        with high fire risk
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Remote Facilities:</span> Unmanned stations where maintenance
                        access is limited
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Heritage Buildings:</span> Minimally invasive protection for
                        historic structures
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-2 text-teal-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        <span className="font-medium">Confined Spaces:</span> Areas where traditional system
                        installation is challenging
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "advantages" && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <h2 className="text-xl font-bold text-gray-800 mb-6">Advantages of Aerosol Fire Suppression</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <SprayCanIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Space Efficiency</h3>
                  <p className="text-gray-700">
                    Aerosol systems require significantly less space and weight compared to traditional fire suppression
                    systems. The compact generators can be installed directly in the protected area without the need for
                    storage rooms, pressurized cylinders, or extensive piping networks.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Environmental Benefits</h3>
                  <p className="text-gray-700">
                    With zero ozone depletion potential and minimal global warming impact, aerosol systems are an
                    environmentally responsible choice. They provide an effective alternative to halon and other systems
                    with significant environmental concerns.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <Settings className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Installation Simplicity</h3>
                  <p className="text-gray-700">
                    The modular nature of aerosol systems allows for simple installation with minimal disruption to
                    existing infrastructure. No pressure testing, special piping, or complex distribution calculations
                    are required, reducing installation time and costs.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Maintenance Efficiency</h3>
                  <p className="text-gray-700">
                    Aerosol systems require minimal maintenance compared to traditional systems. With no pressurized
                    components to test, no hydrostatic testing requirements, and a long service life (10+ years), they
                    offer significant reductions in lifecycle costs.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Effectiveness</h3>
                  <p className="text-gray-700">
                    The ultra-fine aerosol particles (1-2 microns) behave like a gas, allowing them to reach hidden fire
                    sources and provide three-dimensional protection throughout the protected space. They are effective
                    against Class A, B, and C fires.
                  </p>
                </div>

                <div className="bg-teal-50 rounded-lg p-5 border border-teal-100">
                  <div className="p-3 bg-teal-500 text-white rounded-full w-fit mb-4">
                    <Flame className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Extended Protection</h3>
                  <p className="text-gray-700">
                    The aerosol particles remain suspended in the protected area for an extended period (30-60 minutes),
                    providing continued protection against re-ignition. This is particularly valuable in remote or
                    unmanned facilities.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-gray-800 mb-4">Comparison with Traditional Systems</h3>
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
                          className="px-6 py-3 text-left text-xs font-medium text-teal-600 uppercase tracking-wider"
                        >
                          Aerosol Systems
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Gas Systems
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Water/Foam Systems
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Installation Complexity
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Low (No piping required)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                          High (Pressurized piping)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">High (Extensive piping)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Space Requirements
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Minimal</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                          Substantial (Cylinder storage)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                          Substantial (Pumps, tanks)
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                          Minimal (10+ year service life)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">
                          Regular (Pressure testing)
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-500">Regular (Pumps, valves)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          Collateral Damage
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Minimal (Easily cleaned)</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">Minimal</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500">Significant (Water damage)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Installation Process */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Our Installation Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Site Assessment</h3>
                <p className="text-gray-700">
                  Our engineers conduct a comprehensive evaluation of your facility to identify fire risks and determine
                  the optimal protection strategy using aerosol technology.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">System Design</h3>
                <p className="text-gray-700">
                  We create a detailed system design, including aerosol generator placement, activation methods, and
                  integration with existing fire detection systems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Regulatory Approval</h3>
                <p className="text-gray-700">
                  We work with local authorities to ensure the system design meets all applicable codes and standards,
                  obtaining necessary approvals before installation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Installation</h3>
                <p className="text-gray-700">
                  Our certified technicians install the aerosol generators and connect them to the fire detection and
                  control system, with minimal disruption to your operations.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Testing & Commissioning</h3>
                <p className="text-gray-700">
                  We conduct comprehensive testing of all system components to ensure proper operation and compliance
                  with design specifications.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-500 text-white font-semibold flex-shrink-0 mr-4">
                6
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Training & Documentation</h3>
                <p className="text-gray-700">
                  We provide complete documentation and training for your staff on system operation, maintenance
                  requirements, and safety procedures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-teal-600 to-teal-400 rounded-xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Innovative Fire Protection for Modern Challenges</h3>
            <p className="text-teal-100">
              Contact us today to learn how aerosol fire suppression technology can provide efficient, space-saving
              protection for your valuable assets.
            </p>
          </div>
          <motion.button
            className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors shadow-lg flex items-center"
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

export default AerosolSystem;

