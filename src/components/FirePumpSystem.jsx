"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Gauge, Activity, Power } from "lucide-react"

const FirePumpSystem = () => {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Animated Pump */}
      <div className="bg-white rounded-xl overflow-hidden shadow-lg mb-8 relative">
        <div className="bg-gradient-to-r from-red-700 to-red-500 h-72 md:h-96 relative overflow-hidden">
          {/* Animated pump elements */}
          <div className="absolute inset-0">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Animated pressure gauge */}
              <motion.circle
                cx="30"
                cy="30"
                r="10"
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="1"
                initial={{ strokeDasharray: 63, strokeDashoffset: 63 }}
                animate={{
                  strokeDashoffset: [63, 0, 63],
                  transition: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  },
                }}
              />

              {/* Animated flow lines */}
              <motion.path
                d="M40,50 L80,50"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{
                  pathLength: 1,
                  pathOffset: [0, 1],
                  transition: {
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
              />

              <motion.path
                d="M40,60 L80,60"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{
                  pathLength: 1,
                  pathOffset: [0, 1],
                  transition: {
                    duration: 2,
                    delay: 0.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
              />

              <motion.path
                d="M40,70 L80,70"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, pathOffset: 0 }}
                animate={{
                  pathLength: 1,
                  pathOffset: [0, 1],
                  transition: {
                    duration: 2,
                    delay: 1,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  },
                }}
              />
            </svg>

            {/* Pump Icon */}
            <motion.div
              className="absolute top-1/3 left-1/4 text-white opacity-20"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Gauge className="w-32 h-32" />
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
                <Gauge className="w-12 h-12 text-red-600 mx-auto mb-2" />
                <h1 className="text-3xl font-bold text-red-800">Fire Pump Systems</h1>
              </motion.div>

              <motion.p
                className="text-lg text-white max-w-2xl mx-auto text-shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Ensuring reliable water pressure and flow for effective fire protection systems
              </motion.p>
            </div>
          </div>
        </div>

        {/* Key highlights at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 bg-white">
          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-red-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Gauge className="w-8 h-8 text-red-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Pressure Boosting</h3>
              <p className="text-sm text-gray-600">Maintains optimal pressure for fire suppression systems</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5 border-b md:border-b-0 md:border-r border-red-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Power className="w-8 h-8 text-red-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Reliable Operation</h3>
              <p className="text-sm text-gray-600">Backup power systems ensure functionality during emergencies</p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Activity className="w-8 h-8 text-red-500 mr-4" />
            <div>
              <h3 className="font-semibold text-gray-800">Automatic Activation</h3>
              <p className="text-sm text-gray-600">Responds instantly to pressure drops in the system</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default FirePumpSystem

