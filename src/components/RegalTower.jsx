"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt, FaChartLine } from "react-icons/fa"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"

const RegalTower = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tabs = ["Overview", "Challenge", "Solution", "Results"]

  const tabContent = [
    {
      title: "Project Overview",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Regal Tower is a prestigious 65-story mixed-use skyscraper located in the heart of Dubai Marina. This
              iconic building combines luxury residential apartments, premium office spaces, and exclusive retail
              outlets in a striking architectural design.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was commissioned to design and implement a comprehensive fire safety solution that would meet the
              complex requirements of this multi-purpose high-rise while maintaining the building's luxurious aesthetic
              and providing uncompromising protection.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Mixed-Use Skyscraper</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2020</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Dubai Marina</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaChartLine className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Height</p>
                  <p className="font-medium">310 meters</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img src="/placeholder.svg?height=700&width=900" alt="Regal Tower Building" className="w-full h-auto" />
          </div>
        </div>
      ),
    },
    {
      title: "Project Challenges",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Unique Challenges</h3>
            <div className="space-y-6">
              {[
                {
                  title: "Mixed-Use Complexity",
                  description:
                    "Designing systems that address the diverse fire safety requirements of residential, commercial, and retail spaces within a single structure.",
                },
                {
                  title: "High-Rise Considerations",
                  description:
                    "Ensuring effective fire protection across 65 floors with varying pressure zones and occupancy types.",
                },
                {
                  title: "Aesthetic Integration",
                  description:
                    "Implementing comprehensive safety systems while preserving the luxury aesthetic of the building.",
                },
                {
                  title: "Phased Occupancy",
                  description:
                    "Developing a solution that could be implemented in phases as different sections of the building became occupied.",
                },
              ].map((challenge, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">{challenge.title}</h4>
                  <p className="text-gray-600">{challenge.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Technical Challenges</h3>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md mb-6">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Pressure Zoning Requirements</h4>
              <p className="text-gray-700 mb-4">
                The extreme height of Regal Tower created significant challenges for water-based fire protection
                systems:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Water pressure variations between lower and upper floors</span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Need for multiple pressure zones and equipment rooms</span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Redundancy requirements for critical systems</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 shadow-md">
              <h4 className="font-semibold text-lg mb-4 text-blue-800">Evacuation Complexity</h4>
              <p className="text-gray-700 mb-4">
                The mixed-use nature and high occupancy of the building presented evacuation challenges:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Different evacuation protocols for various building sections</span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Need for phased evacuation capabilities</span>
                </li>
                <li className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-2 flex-shrink-0" />
                  <span>Multi-language requirements for diverse occupants</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Our Solution",
      content: (
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Our approach to Regal Tower's fire safety needs involved a comprehensive, integrated solution that addressed
            the unique challenges of this mixed-use high-rise while maintaining its luxury aesthetic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Zone-Based Approach",
                description:
                  "Implemented a zone-based fire protection strategy with dedicated systems for residential, commercial, and retail areas",
                icon: <FaShieldAlt className="text-white text-2xl" />,
              },
              {
                title: "Pressure Management",
                description:
                  "Designed multiple pressure zones with dedicated equipment to ensure consistent performance throughout the building",
                icon: <FaBuilding className="text-white text-2xl" />,
              },
              {
                title: "Aesthetic Integration",
                description:
                  "Utilized concealed fixtures and custom finishes to maintain the luxury aesthetic while providing comprehensive protection",
                icon: <FaShieldAlt className="text-white text-2xl" />,
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="bg-blue-600 p-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center">{item.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow-lg mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Key Systems Implemented</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Advanced Fire Detection",
                  description:
                    "Multi-criteria detection system with addressable devices and smart algorithms to minimize false alarms",
                },
                {
                  title: "Zone-Based Sprinkler System",
                  description:
                    "High-pressure sprinkler system with multiple pressure zones and concealed heads to maintain aesthetic appeal",
                },
                {
                  title: "Intelligent Voice Evacuation",
                  description:
                    "Advanced voice evacuation system with multi-language support and zone-based messaging capabilities",
                },
                {
                  title: "Smoke Control System",
                  description:
                    "Engineered smoke control system with pressurization to protect evacuation routes and critical areas",
                },
                {
                  title: "Redundant Fire Pump System",
                  description:
                    "Multiple fire pump sets with backup power generation to ensure water supply even during emergencies",
                },
                {
                  title: "Building Integration",
                  description:
                    "Seamless integration with building management systems for centralized monitoring and control",
                },
              ].map((system, index) => (
                <div key={index} className="flex items-start">
                  <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg text-blue-800">{system.title}</h4>
                    <p className="text-gray-600">{system.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-xl">
            <img
              src="/placeholder.svg?height=500&width=1200&text=Regal Tower Systems"
              alt="Regal Tower Fire Safety Systems"
              className="w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Project Results",
      content: (
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Our implementation at Regal Tower resulted in a comprehensive fire safety solution that not only met but
            exceeded the client's expectations and regulatory requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Key Achievements</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Highest Safety Rating",
                    description: "Achieved the highest possible safety rating from Dubai Civil Defense",
                  },
                  {
                    title: "Zero False Alarms",
                    description: "Smart detection algorithms have resulted in zero false alarms since implementation",
                  },
                  {
                    title: "Seamless Integration",
                    description:
                      "Fire safety systems fully integrated with building management for centralized control",
                  },
                  {
                    title: "Aesthetic Excellence",
                    description: "Systems implementation praised by architects for preserving design integrity",
                  },
                  {
                    title: "On-Time Delivery",
                    description: "Project completed on schedule despite the complex phased implementation",
                  },
                ].map((achievement, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-600">
                    <h4 className="font-semibold text-lg mb-1 text-blue-800">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">Client Testimonial</h3>
              <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                <svg className="w-10 h-10 text-blue-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  "Eurofire's implementation at Regal Tower has set a new standard for fire safety in mixed-use
                  high-rises. Their innovative approach to addressing our complex requirements while maintaining the
                  building's luxury aesthetic has been remarkable. The systems work flawlessly, and the integration with
                  our building management systems has enhanced our operational efficiency."
                </p>
                <div>
                  <p className="font-semibold text-gray-800">Mohammed Al Farsi</p>
                  <p className="text-blue-600">Development Director, Regal Properties</p>
                </div>
              </div>

              <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                <h4 className="font-semibold text-lg mb-4 text-blue-800">Safety Performance Metrics</h4>
                <div className="space-y-4">
                  {[
                    { label: "System Reliability", value: "99.99%" },
                    { label: "False Alarm Rate", value: "0.00%" },
                    { label: "Response Time", value: "< 3 seconds" },
                    { label: "Regulatory Compliance", value: "100%" },
                  ].map((metric, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{metric.label}</span>
                      <span className="font-semibold text-blue-600">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Ongoing Support</h3>
            <p className="mb-6 leading-relaxed">
              Our relationship with Regal Tower continues beyond implementation through our comprehensive maintenance
              and support program:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "24/7 Monitoring",
                  description: "Continuous remote monitoring of all fire safety systems",
                },
                {
                  title: "Preventive Maintenance",
                  description: "Regular scheduled maintenance to ensure optimal system performance",
                },
                {
                  title: "Staff Training",
                  description: "Ongoing training for building staff on system operation and emergency procedures",
                },
              ].map((service, index) => (
                <div key={index} className="bg-blue-800/50 p-5 rounded-lg border border-blue-700">
                  <h4 className="font-semibold text-lg mb-2">{service.title}</h4>
                  <p className="text-blue-100">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
            backgroundPosition: "center 30%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/60"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Regal Tower</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive fire safety for a mixed-use skyscraper
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* Tabs Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                  selectedTab === index ? "bg-blue-600 text-white shadow-lg" : "bg-white text-blue-800 hover:bg-blue-50"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={selectedTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-800">{tabContent[selectedTab].title}</h2>
            {tabContent[selectedTab].content}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Project Gallery</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at Regal Tower</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={`/placeholder.svg?height=${index === 0 ? 600 : 400}&width=${index === 0 ? 800 : 600}&text=Regal ${item}`}
                alt={`Regal Tower Project Image ${item}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Ready to Discuss Your Project?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement state-of-the-art fire safety systems for your property
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center mx-auto transition-colors duration-300">
              Contact Us Today
              <BsArrowRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default RegalTower

