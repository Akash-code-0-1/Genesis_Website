"use client"
import { motion } from "framer-motion"
import {
  Bell,
  Shield,
  CheckCircle,
  Clock,
  PenToolIcon as Tool,
  ArrowRight,
  AlertTriangle,
  Settings,
} from "lucide-react"
// import ServiceLayout from "./ServiceLayout"

const FireAlarmSystem = () => {
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
            src="https://images.pexels.com/photos/13060858/pexels-photo-13060858.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Fire Alarm System"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="bg-white bg-opacity-90 p-4 rounded-lg shadow-lg max-w-md">
              <h2 className="text-xl font-bold text-gray-800 mb-2">Early Detection Saves Lives</h2>
              <p className="text-gray-700">
                Our advanced fire alarm systems provide early warning of fire hazards, giving occupants crucial time to
                evacuate safely.
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
            <Bell className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">System Overview</h2>
        </div>

        <p className="text-gray-700 mb-6">
          Fire alarm systems are the first line of defense in fire safety, designed to detect fires early and alert
          occupants to danger. Genesis provides comprehensive fire alarm solutions that include detection devices,
          control panels, notification appliances, and monitoring services. Our systems are designed to meet the
          specific needs of your facility while complying with all local regulations and international standards.
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
                <span className="text-gray-700">Smoke, heat, and multi-criteria detectors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Addressable and conventional control panels</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Manual call points and pull stations</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Audible and visual alarm devices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Remote monitoring and notification systems</span>
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
                <span className="text-gray-700">Site assessment and risk analysis</span>
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center mr-2 flex-shrink-0">
                  2
                </span>
                <span className="text-gray-700">Custom system design and specification</span>
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
                <span className="text-gray-700">Ongoing maintenance and 24/7 support</span>
              </li>
            </ol>
          </div>
        </div>
      </motion.div>

      {/* System Types Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Fire Alarm System Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-xl shadow-md overflow-hidden"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="h-48 bg-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <Bell className="w-12 h-12 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Conventional Systems</h3>
              <p className="text-gray-700 mb-4">
                Conventional fire alarm systems divide buildings into broad zones. In the event of a detector or call
                point activation, the control panel identifies the zone, but not the specific device. These systems are
                cost-effective for smaller buildings.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Cost-effective for smaller facilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Simple installation and maintenance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Zone-level identification of alarms</span>
                </li>
              </ul>
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
            <div className="h-48 bg-blue-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4 bg-white rounded-full">
                  <Settings className="w-12 h-12 text-blue-500" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Addressable Systems</h3>
              <p className="text-gray-700 mb-4">
                Addressable fire alarm systems provide precise information about which specific device has been
                activated. This allows for quicker identification of the fire location and reduces the time to respond
                appropriately.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Precise device-level identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Reduced false alarms through intelligent verification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced programming and control options</span>
                </li>
              </ul>
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
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Early Detection</h3>
            <p className="text-gray-700">
              Advanced sensors detect fire in its earliest stages, providing crucial time for evacuation and response.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg w-fit mb-3">
              <Bell className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Clear Notification</h3>
            <p className="text-gray-700">
              Audible and visual alarms ensure all building occupants are promptly alerted to potential dangers.
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
            <div className="p-2 bg-blue-100 text-blue-500 rounded-lg w-fit mb-3">
              <Tool className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Remote Monitoring</h3>
            <p className="text-gray-700">
              24/7 monitoring ensures rapid response even when the building is unoccupied.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Gallery Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Installation Gallery</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <motion.div className="rounded-lg overflow-hidden h-40 md:h-48" whileHover={{ scale: 1.05 }}>
            <img
              src="https://www.bengalss.com/wp-content/uploads/2018/07/addressable-fire-alarm-control-panel-500x500.jpg"
              alt="Fire Alarm Panel"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="rounded-lg overflow-hidden h-40 md:h-48" whileHover={{ scale: 1.05 }}>
            <img
              src="https://d10lvax23vl53t.cloudfront.net/images/Article_Images/ImageForArticle_19_45609895834988439402.jpg"
              alt="Smoke Detector"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="rounded-lg overflow-hidden h-40 md:h-48" whileHover={{ scale: 1.05 }}>
            <img
              src="https://enalltha.sirv.com/WP_www.evacuatoralarms.com/2021/05/mcp-uk-2.jpg"
              alt="Manual Call Point"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div className="rounded-lg overflow-hidden h-40 md:h-48" whileHover={{ scale: 1.05 }}>
            <img
              src="https://lgmproducts.com/wp-content/uploads/2023/07/2-21-205_MA2H-R.png"
              alt="Alarm Sounder"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-blue-500 rounded-xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.2)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Ready to enhance your fire safety?</h3>
            <p className="text-blue-100">
              Contact us today for a free consultation and quote for your fire alarm system needs.
            </p>
          </div>
          <motion.button
            className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Request a Quote
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default FireAlarmSystem;

