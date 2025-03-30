"use client"
import { motion } from "framer-motion"
import { Shield, CheckCircle, Clock, PenToolIcon as Tool, ArrowRight, AlertTriangle, Settings } from "lucide-react"
// import ServiceLayout from "./ServiceLayout"

const FireSuppression = () => {
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
            src="https://aito.com.my/wp-content/uploads/2021/09/FM200-fire-suppression-data-center.jpg"
            alt="Fire Suppression System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Automatic Fire Protection</h2>
              <p className="text-gray-700">
                Our fire suppression systems automatically detect and extinguish fires without human intervention,
                protecting your valuable assets.
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
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
        </div>

        <p className="text-gray-700 mb-6">
          Fire suppression systems are designed to automatically detect and extinguish fires without human intervention.
          Unlike traditional sprinkler systems that use water, many fire suppression systems use specialized agents that
          leave no residue and cause minimal damage to sensitive equipment and valuable assets. Genesis offers a range
          of suppression technologies tailored to different environments and fire risks.
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
                <span className="text-gray-700">Clean agent systems (FM-200, Novec 1230)</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">CO2 suppression systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Foam suppression systems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Detection and control panels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Discharge nozzles and piping networks</span>
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
                <span className="text-gray-700">Risk assessment and hazard analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">System design and engineering</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  3
                </span>
                <span className="text-gray-700">Professional installation by certified technicians</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  4
                </span>
                <span className="text-gray-700">System testing and commissioning</span>
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

      {/* System Types Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Fire Suppression Technologies</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">Clean Agent Systems</h3>
              <p className="text-gray-700 mb-4">
                Clean agent systems use gases like FM-200 and Novec 1230 that leave no residue and are safe for occupied
                spaces. Ideal for data centers, server rooms, and areas with sensitive equipment.
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
              <h3 className="text-lg font-bold text-gray-800 mb-3">CO2 Systems</h3>
              <p className="text-gray-700 mb-4">
                Carbon dioxide systems are effective for flammable liquid and electrical fires. They work by displacing
                oxygen and are typically used in unoccupied or normally unoccupied areas.
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
                  <Settings className="w-10 h-10 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Foam Systems</h3>
              <p className="text-gray-700 mb-4">
                Foam suppression systems are designed for flammable liquid fires. They work by creating a blanket of
                foam that smothers the fire and prevents re-ignition.
              </p>
              <motion.button className="text-blue-500 font-medium flex items-center" whileHover={{ x: 5 }}>
                Learn More <ArrowRight className="ml-1 w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Applications Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Common Applications</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg mr-3 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Centers & Server Rooms</h3>
              <p className="text-gray-700">
                Protect critical IT infrastructure with clean agent systems that extinguish fires without damaging
                sensitive electronic equipment.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg mr-3 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Electrical Rooms</h3>
              <p className="text-gray-700">
                Safeguard electrical equipment with systems designed to suppress fires without conducting electricity or
                causing additional damage.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg mr-3 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Museums & Archives</h3>
              <p className="text-gray-700">
                Protect irreplaceable artifacts and documents with systems that minimize water damage and residue.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg mr-3 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Industrial Facilities</h3>
              <p className="text-gray-700">
                Protect manufacturing equipment and processes with systems designed for specific industrial hazards.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl p-6 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Automatic Operation</h3>
                  <p className="text-blue-100">
                    Systems detect and suppress fires without human intervention, providing protection 24/7.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Minimal Damage</h3>
                  <p className="text-blue-100">
                    Clean agents leave no residue and cause no damage to sensitive equipment or valuable assets.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Rapid Response</h3>
                  <p className="text-blue-100">
                    Systems discharge within seconds of fire detection, minimizing damage and downtime.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Business Continuity</h3>
                  <p className="text-blue-100">
                    Minimize downtime and business interruption with systems that cause minimal collateral damage.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Regulatory Compliance</h3>
                  <p className="text-blue-100">
                    Meet insurance requirements and local fire safety regulations with certified systems.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 mr-3 text-blue-100 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Environmental Considerations</h3>
                  <p className="text-blue-100">
                    Modern agents have zero ozone depletion potential and low global warming impact.
                  </p>
                </div>
              </li>
            </ul>
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
            <h3 className="text-xl font-bold text-gray-800 mb-2">Protect Your Valuable Assets</h3>
            <p className="text-gray-600">
              Contact us today to discuss the right fire suppression solution for your specific needs.
            </p>
          </div>
          <motion.button
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default FireSuppression

