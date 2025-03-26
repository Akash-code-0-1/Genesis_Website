"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  AlertTriangle,
  Battery,
  CheckCircle,
  Lightbulb,
  ArrowRight,
  Info,
  Settings,
  LifeBuoy,
  Users,
  ChevronUp,
  ChevronDown,
} from "lucide-react"

const EmergencyExitLightSystem = () => {
  const [activeFaq, setActiveFaq] = useState(null)

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index)
  }

  // FAQ data
  const faqs = [
    {
      question: "What is the difference between maintained and non-maintained emergency lighting?",
      answer:
        "Maintained emergency lighting stays on constantly when the building is occupied, then switches to battery power during a power outage. Non-maintained lighting remains off during normal operation and only activates during an emergency or power failure. Maintained lighting is typically used in public venues like theaters and restaurants, while non-maintained lighting is common in offices and industrial settings.",
    },
    {
      question: "How often should emergency lighting be tested?",
      answer:
        "According to most international standards, emergency lighting should undergo monthly functional tests (a brief test to ensure lights activate) and annual full-duration tests (testing the full rated duration, typically 3 hours). Our maintenance contracts include these required tests to ensure your system remains compliant and functional.",
    },
    {
      question: "What is the typical battery life of emergency lighting systems?",
      answer:
        "Most emergency lighting batteries have a lifespan of 3-4 years, though this can vary based on environmental conditions and frequency of power outages. Our maintenance service includes battery health monitoring to ensure timely replacement before failures occur.",
    },
    {
      question: "Are photoluminescent signs compliant with UAE fire safety regulations?",
      answer:
        "Yes, photoluminescent signs that meet the appropriate luminance standards are compliant with UAE Civil Defense regulations. However, they must be properly charged by adequate ambient lighting and may need to be supplemented with electrical emergency lighting in some areas.",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Interactive Element */}
      <div className="relative bg-white rounded-xl overflow-hidden shadow-lg mb-8">
        <div className="absolute inset-0 bg-gray-900">
          <div className="h-full w-full relative overflow-hidden">
            {/* Simulated power outage effect */}
            <div className="absolute inset-0 bg-black z-10">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.1, 0, 0.15, 0, 1],
                  transition: {
                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                    duration: 3,
                    ease: "easeInOut",
                  },
                }}
                className="h-full w-full flex items-center justify-center"
              >
                <img
                  src="/placeholder.svg?height=400&width=800"
                  alt="Office with emergency lighting"
                  className="w-full h-full object-cover opacity-70"
                />
              </motion.div>
            </div>

            {/* Emergency exit signs that appear */}
            <motion.div
              className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 0, 0, 1],
                scale: [0.8, 0.8, 0.8, 0.8, 0.8, 1],
                transition: {
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                  duration: 3.5,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="bg-green-500 p-3 rounded-md flex items-center justify-center w-24 h-12 shadow-[0_0_15px_rgba(34,197,94,0.7)]">
                <AlertTriangle className="w-6 h-6 text-white mr-1" />
                <span className="text-white font-bold">EXIT</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0, 0, 0, 0, 1],
                scale: [0.8, 0.8, 0.8, 0.8, 0.8, 1],
                transition: {
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                  duration: 3.2,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="bg-green-500 p-3 rounded-md flex items-center justify-center w-24 h-12 shadow-[0_0_15px_rgba(34,197,94,0.7)]">
                <AlertTriangle className="w-6 h-6 text-white mr-1" />
                <span className="text-white font-bold">EXIT</span>
              </div>
            </motion.div>

            {/* Floor path lighting */}
            <motion.div
              className="absolute bottom-6 left-0 right-0 h-2 mx-auto w-4/5 bg-green-400 rounded z-20"
              initial={{ opacity: 0, width: "0%" }}
              animate={{
                opacity: [0, 0, 0, 0, 0, 1],
                width: ["0%", "0%", "0%", "0%", "0%", "80%"],
                transition: {
                  times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
                  duration: 4,
                  ease: "easeInOut",
                },
              }}
              style={{ boxShadow: "0 0 10px rgba(34,197,94,0.7)" }}
            />
          </div>
        </div>

        <div className="relative z-30 pt-80 pb-12 px-6 bg-gradient-to-t from-black to-transparent">
          <div className="max-w-lg">
            <motion.h2
              className="text-2xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5, duration: 0.6 }}
            >
              When Seconds Count, Reliable Guidance Saves Lives
            </motion.h2>
            <motion.p
              className="text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.7, duration: 0.6 }}
            >
              Our emergency exit lighting systems provide clear evacuation guidance during power failures and emergency
              situations, ensuring everyone can find their way to safety quickly and confidently.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Overview Section with Tabbed Content */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-4">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Emergency Exit Light Systems</h2>
        </div>

        <p className="text-gray-700 mb-8">
          Emergency exit lighting systems are crucial safety installations that provide illumination and guidance when
          normal lighting fails. These systems are designed to activate automatically in power outages or emergency
          situations, guiding building occupants to exits and ensuring safe evacuation. Genesis offers comprehensive
          emergency lighting solutions that comply with UAE Civil Defense requirements and international safety
          standards.
        </p>

        {/* Interactive Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap border-b border-gray-200 mb-6">
            <button
              onClick={() => setActiveFaq(null)}
              className={`px-6 py-3 text-sm font-medium rounded-t-lg transition ${activeFaq === null ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              System Components
            </button>

            <button
              onClick={() => setActiveFaq("installation")}
              className={`px-6 py-3 text-sm font-medium rounded-t-lg transition ml-2 ${activeFaq === "installation" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Installation Process
            </button>

            <button
              onClick={() => setActiveFaq("regulations")}
              className={`px-6 py-3 text-sm font-medium rounded-t-lg transition ml-2 ${activeFaq === "regulations" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
            >
              Regulatory Requirements
            </button>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg">
            {activeFaq === null && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3 flex-shrink-0">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Emergency Light Fixtures</h3>
                    <p className="text-gray-700 text-sm">
                      Battery-backed lighting units that activate during power failures, providing illumination for safe
                      evacuation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3 flex-shrink-0">
                    <AlertTriangle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Exit Signs</h3>
                    <p className="text-gray-700 text-sm">
                      Illuminated signage that clearly marks exit paths and doors, available in various designs and
                      languages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3 flex-shrink-0">
                    <Battery className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Backup Power Systems</h3>
                    <p className="text-gray-700 text-sm">
                      Self-contained batteries that provide power for a minimum of 90 minutes during power outages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg mr-3 flex-shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Testing & Monitoring Systems</h3>
                    <p className="text-gray-700 text-sm">
                      Automated systems for regular testing and verification of emergency lighting functionality.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeFaq === "installation" && (
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-semibold flex-shrink-0 mr-3">
                      1
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Site Assessment & Design</h3>
                      <p className="text-gray-700">
                        Our engineers conduct a comprehensive assessment of your facility to determine optimal placement
                        of emergency lighting and exit signs based on building layout, occupancy, and regulatory
                        requirements.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-semibold flex-shrink-0 mr-3">
                      2
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Professional Installation</h3>
                      <p className="text-gray-700">
                        Our certified technicians install all components according to design specifications and safety
                        standards, ensuring proper wiring, secure mounting, and correct orientation.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-semibold flex-shrink-0 mr-3">
                      3
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">System Testing</h3>
                      <p className="text-gray-700">
                        After installation, we conduct comprehensive testing of all emergency lighting components,
                        including battery discharge tests, illumination level verification, and functionality checks.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500 text-white font-semibold flex-shrink-0 mr-3">
                      4
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Documentation & Training</h3>
                      <p className="text-gray-700">
                        We provide complete documentation of the system and offer training for facility staff on basic
                        maintenance, testing procedures, and what to look for during visual inspections.
                      </p>
                    </div>
                  </li>
                </ol>
              </motion.div>
            )}

            {activeFaq === "regulations" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <h3 className="font-semibold text-gray-800 mb-3">UAE Civil Defense Requirements</h3>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">
                      Minimum illumination levels of 1 lux for escape routes and 5 lux for high-risk areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Minimum 90-minute battery backup for all emergency lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Exit signs visible from a minimum distance of 20 meters</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Monthly functional testing and annual full-duration testing</span>
                  </li>
                </ul>

                <h3 className="font-semibold text-gray-800 mb-3">International Standards</h3>
                <p className="text-gray-700 mb-2">Our systems comply with international standards including:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">NFPA 101: Life Safety Code</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">IEC 60598-2-22: Luminaires for emergency lighting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">BS 5266: Emergency lighting code of practice</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Lighting Solutions</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Product 1 */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden group"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Emergency Exit Sign"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Bestseller</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2">LED Exit Signs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Energy-efficient LED exit signs with long-lasting performance and clear visibility from all angles.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">Multiple Options</span>
                <motion.button
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product 2 */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden group"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Emergency Spotlights"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">New</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Emergency Spotlights</h3>
              <p className="text-gray-600 text-sm mb-4">
                High-output directional lighting for areas requiring enhanced illumination during emergencies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">High Performance</span>
                <motion.button
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product 3 */}
          <motion.div
            className="bg-white rounded-xl shadow-md overflow-hidden group"
            whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Floor Path Marking"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">Premium</span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Floor Path Marking</h3>
              <p className="text-gray-600 text-sm mb-4">
                Photoluminescent or LED-based floor marking systems for low-visibility evacuation guidance.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">Advanced Solution</span>
                <motion.button
                  className="text-gray-700 hover:text-green-600 transition-colors flex items-center text-sm font-medium"
                  whileHover={{ x: 5 }}
                >
                  View Details <ArrowRight className="ml-1 w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* FAQ Section with Accordion */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-green-500">
                  {activeFaq === index ? (
                    <motion.span initial={{ rotate: 0 }} animate={{ rotate: 180 }} transition={{ duration: 0.3 }}>
                      <ChevronUp className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  )}
                </span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeFaq === index ? "auto" : 0,
                  opacity: activeFaq === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-4 bg-white border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Features Section with Icons */}
      <motion.div
        className="bg-gradient-to-r from-green-600 to-green-400 rounded-xl p-6 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">Key System Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
            <div className="p-3 bg-white text-green-500 rounded-full w-fit mb-4">
              <LifeBuoy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Enhanced Safety</h3>
            <p className="text-green-50">
              Clear evacuation guidance even in smoke-filled environments, significantly improving chances of safe
              escape during emergencies.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
            <div className="p-3 bg-white text-green-500 rounded-full w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
            <p className="text-green-50">
              Meeting all UAE Civil Defense requirements and international safety standards, avoiding potential fines
              and liability issues.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 rounded-lg p-5 backdrop-blur-sm">
            <div className="p-3 bg-white text-green-500 rounded-full w-fit mb-4">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Peace of Mind</h3>
            <p className="text-green-50">
              Reliable systems that automatically activate when needed, providing round-the-clock protection for
              building occupants.
            </p>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-white rounded-xl p-6 shadow-md border border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ensure Safe Evacuation in Emergencies</h3>
            <p className="text-gray-600">
              Contact us today to discuss your emergency exit lighting needs and receive a customized solution.
            </p>
          </div>
          <motion.button
            className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default EmergencyExitLightSystem

