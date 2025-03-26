"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Phone,
  Volume2,
  Megaphone,
  CheckCircle,
  Building,
  User,
  Users,
  Bell,
  Radio,
  Clock,
  ChevronRight,
  ArrowRight,
} from "lucide-react"

const VoiceEvacuation = () => {
  const [activeDemo, setActiveDemo] = useState(null)

  // Sample audio messages
  const audioMessages = [
    { id: 1, name: "General Evacuation", duration: "0:32" },
    { id: 2, name: "Fire Alert", duration: "0:45" },
    { id: 3, name: "Phased Evacuation", duration: "0:38" },
    { id: 4, name: "All Clear", duration: "0:22" },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="relative h-72 md:h-96 bg-gradient-to-r from-purple-900 to-purple-600">
          <div className="absolute inset-0 overflow-hidden">
            {/* Sound Wave Animation */}
            <svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,50 Q25,45 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0.5, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.path
                d="M0,50 Q25,40 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0.7, 1],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 0.5,
                }}
              />
              <motion.path
                d="M0,50 Q25,35 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 0.2,
                }}
              />
              <motion.path
                d="M0,50 Q25,55 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0.6, 1],
                }}
                transition={{
                  duration: 4.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 0.7,
                }}
              />
              <motion.path
                d="M0,50 Q25,60 50,50 T100,50"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  pathOffset: [0, 0.4, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: 0.3,
                }}
              />
            </svg>

            {/* Megaphone Icons */}
            <motion.div
              className="absolute top-1/4 left-1/4 text-white opacity-20"
              animate={{
                rotate: [-5, 5, -5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Megaphone className="w-20 h-20" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 right-1/4 text-white opacity-20"
              animate={{
                rotate: [5, -5, 5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <Phone className="w-20 h-20" />
            </motion.div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center">
              <motion.h1
                className="text-3xl md:text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                Clear Communication Saves Lives
              </motion.h1>
              <motion.p
                className="text-xl text-purple-100 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Our voice evacuation and fireman telephone systems provide critical communication capabilities during
                emergencies
              </motion.p>
            </div>
          </div>
        </div>

        {/* Feature Highlight Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-purple-100">
          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
              <Volume2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Crystal Clear Audio</h3>
              <p className="text-sm text-gray-600">High-fidelity speakers ensure messages are clear and intelligible</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Zoned Broadcasting</h3>
              <p className="text-sm text-gray-600">Target specific building areas for phased evacuation</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg mr-4">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Firefighter Communication</h3>
              <p className="text-sm text-gray-600">Dedicated phone system for emergency responders</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dual Systems Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Voice Evacuation System */}
        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="bg-purple-600 p-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Megaphone className="w-6 h-6 mr-2" />
              Voice Evacuation System
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Voice Evacuation Systems (VES) provide clear, intelligible voice instructions during emergencies, guiding
              building occupants to safety more effectively than traditional alarm bells. These systems can broadcast
              pre-recorded messages or live announcements to specific zones or throughout the entire facility.
            </p>

            <h3 className="font-semibold text-gray-800 mb-3">Key Components:</h3>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Control panels with zone selection capabilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">High-fidelity speakers with excellent voice reproduction</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Digital message storage for pre-recorded announcements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Emergency microphones for live announcements</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Backup power supplies for continued operation</span>
              </li>
            </ul>

            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center">
                <Bell className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-sm text-gray-700">Integration with fire alarm systems</span>
              </div>
              <div className="flex items-center">
                <Building className="w-5 h-5 text-purple-500 mr-2" />
                <span className="text-sm text-gray-700">Multi-zone broadcasting capability</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Fireman Telephone System */}
        <motion.div
          className="bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="bg-indigo-600 p-6">
            <h2 className="text-xl font-bold text-white flex items-center">
              <Phone className="w-6 h-6 mr-2" />
              Fireman Telephone System
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 mb-4">
              Fireman Telephone Systems provide dedicated communication networks for emergency responders during fire
              incidents. These systems allow firefighters to communicate with the fire command center and with each
              other throughout the building, even when normal communication systems may be compromised.
            </p>

            <h3 className="font-semibold text-gray-800 mb-3">Key Components:</h3>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Master control station at the fire command center</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Remote telephone jacks throughout the building</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Portable handsets for firefighter use</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Dedicated wiring resistant to fire damage</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-2 text-indigo-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Backup power systems for uninterrupted operation</span>
              </li>
            </ul>

            <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center">
                <Radio className="w-5 h-5 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-700">Dedicated communication channel</span>
              </div>
              <div className="flex items-center">
                <User className="w-5 h-5 text-indigo-500 mr-2" />
                <span className="text-sm text-gray-700">Emergency responder priority</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Voice Messages Demo Section */}
      <motion.div
        className="bg-white rounded-xl shadow-md overflow-hidden mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 flex items-center">
            <Volume2 className="w-6 h-6 mr-2 text-purple-500" />
            Sample Emergency Messages
          </h2>
          <p className="text-gray-600 mt-2">
            Voice evacuation systems can be programmed with various pre-recorded messages for different scenarios. Below
            are examples of messages typically included in our systems.
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audioMessages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                  activeDemo === message.id
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/50"
                }`}
                onClick={() => setActiveDemo(activeDemo === message.id ? null : message.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div
                      className={`p-2 rounded-full mr-3 ${
                        activeDemo === message.id ? "bg-purple-500 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {activeDemo === message.id ? (
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <Volume2 className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{message.name}</h3>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{message.duration}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ${activeDemo === message.id ? "text-purple-500" : "text-gray-400"}`}
                  />
                </div>

                {activeDemo === message.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <p className="text-gray-700 italic">
                      {message.id === 1 &&
                        "Attention please: This is an emergency evacuation notice. Please proceed calmly to the nearest exit and leave the building immediately. Do not use elevators. Follow the instructions of floor wardens."}
                      {message.id === 2 &&
                        "Warning: A fire has been detected in the building. Please prepare to evacuate. Gather your essential belongings and wait for further instructions. Floor wardens, please take your positions."}
                      {message.id === 3 &&
                        "Attention occupants on floors 5, 6, and 7: Please evacuate immediately using the nearest stairwell. All other floors, please remain in place and await further instructions."}
                      {message.id === 4 &&
                        "Attention all occupants: The emergency situation has been resolved. You may return to normal activities. Thank you for your cooperation."}
                    </p>
                    <div className="mt-4 flex justify-end">
                      <span className="text-sm text-purple-500">Audio sample paused for demonstration</span>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">System Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-5 rounded-lg border border-white border-opacity-20">
            <div className="p-3 bg-white text-purple-600 rounded-full w-fit mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Reduced Panic</h3>
            <p className="text-purple-100">
              Clear voice instructions are more effective than alarm sounds alone, reducing confusion and panic during
              emergencies.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-5 rounded-lg border border-white border-opacity-20">
            <div className="p-3 bg-white text-purple-600 rounded-full w-fit mb-4">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Zoned Evacuation</h3>
            <p className="text-purple-100">
              Target specific areas for evacuation while keeping others in place, preventing stairwell congestion in
              high-rises.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm p-5 rounded-lg border border-white border-opacity-20">
            <div className="p-3 bg-white text-purple-600 rounded-full w-fit mb-4">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Enhanced Response</h3>
            <p className="text-purple-100">
              Fireman telephone systems enable coordinated emergency response with direct communication between teams.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Application Scenarios */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Where Our Systems Are Essential</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="h-40 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=320"
                alt="High-rise building"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold">High-Rise Buildings</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Multiple floors require coordinated evacuation and firefighter communication throughout the structure.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="h-40 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=320"
                alt="Shopping mall"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold">Shopping Centers</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Large public spaces with diverse occupants who may be unfamiliar with evacuation routes.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="h-40 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=320"
                alt="Hospital"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold">Healthcare Facilities</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Patients with mobility issues require specialized evacuation instructions and staff coordination.
              </p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden group">
            <div className="h-40 relative overflow-hidden">
              <img
                src="/placeholder.svg?height=160&width=320"
                alt="Hotel"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-3 left-3">
                <h3 className="text-white font-bold">Hotels & Resorts</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Transient occupants unfamiliar with the building layout require clear, multilingual evacuation
                instructions.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Installation Process */}
      <motion.div
        className="bg-white rounded-xl shadow-md p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold text-gray-800 mb-6">Our Installation Process</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Site Assessment & Acoustic Analysis</h3>
                <p className="text-gray-700">
                  We conduct a thorough assessment of your facility, analyzing acoustics, ambient noise levels, and
                  building layout to design an optimal system.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Custom System Design</h3>
                <p className="text-gray-700">
                  Our engineers create a tailored system design, including speaker placement, zoning strategies, and
                  integration with existing fire alarm systems.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Professional Installation</h3>
                <p className="text-gray-700">
                  Our certified technicians install all components according to design specifications and code
                  requirements, ensuring proper coverage.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Message Programming & Recording</h3>
                <p className="text-gray-700">
                  We program pre-recorded emergency messages tailored to your facility's specific evacuation procedures
                  and requirements.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                5
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">System Testing & Intelligibility Verification</h3>
                <p className="text-gray-700">
                  We conduct comprehensive testing, including intelligibility measurements to ensure messages are clear
                  and understandable throughout the facility.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white font-semibold flex-shrink-0 mr-4">
                6
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Staff Training & Ongoing Support</h3>
                <p className="text-gray-700">
                  We provide training for facility staff and offer ongoing maintenance and support to ensure your system
                  remains in optimal condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.3)" }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Enhance Your Emergency Communication</h3>
            <p className="text-purple-100">
              Contact us today to discuss how our voice evacuation and fireman telephone systems can improve safety in
              your facility.
            </p>
          </div>
          <motion.button
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors shadow-lg flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default VoiceEvacuation

