"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaShieldAlt, FaChartLine } from "react-icons/fa"
import { IoIosFlame } from "react-icons/io"
import { BsArrowRight } from "react-icons/bs"

const GrandeurResidence = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const tabs = [
    { name: "Overview", icon: <FaBuilding /> },
    { name: "Systems", icon: <IoIosFlame /> },
    { name: "Challenges", icon: <FaChartLine /> },
    { name: "Results", icon: <FaShieldAlt /> },
  ]

  const tabContent = [
    {
      title: "Project Overview",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Grandeur Residence is an ultra-luxury residential tower located in the heart of Downtown Dubai. This
              45-story building features premium apartments and penthouses with panoramic views of the city skyline.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was commissioned to design and implement a comprehensive fire safety solution that would meet the
              highest international standards while complementing the building's opulent design aesthetic.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Ultra-Luxury Residential</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2022</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Downtown Dubai</p>
                </div>
              </div>
              <div className="flex items-center">
                <IoIosFlame className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Systems</p>
                  <p className="font-medium">Premium Integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://icl-blog.s3.ap-southeast-1.amazonaws.com/uploads/2018/02/Fountain_Cove-600.jpg"
              alt="Grandeur Residence Building"
              className="w-full h-auto"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Fire Safety Systems",
      content: (
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Our implementation at Grandeur Residence included a suite of advanced fire safety systems designed to
            provide maximum protection while maintaining the building's luxurious aesthetic.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Addressable Fire Alarm System",
                description:
                  "High-sensitivity smoke detection with multi-criteria sensors throughout all residential units and common areas",
                icon: <IoIosFlame className="text-white text-2xl" />,
              },
              {
                title: "High-Rise Sprinkler System",
                description: "Concealed sprinkler heads with custom finishes to match interior design elements",
                icon: <FaShieldAlt className="text-white text-2xl" />,
              },
              {
                title: "Voice Evacuation System",
                description:
                  "Premium audio quality evacuation system with customizable messaging in multiple languages",
                icon: <FaBuilding className="text-white text-2xl" />,
              },
              {
                title: "Emergency Lighting",
                description: "Designer emergency lighting fixtures that complement the building's interior design",
                icon: <FaShieldAlt className="text-white text-2xl" />,
              },
              {
                title: "Fire Pump System",
                description: "Redundant fire pump system with backup power generation",
                icon: <IoIosFlame className="text-white text-2xl" />,
              },
              {
                title: "Smart Building Integration",
                description: "Integration with building management system for centralized monitoring and control",
                icon: <FaBuilding className="text-white text-2xl" />,
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
        </div>
      ),
    },
    {
      title: "Project Challenges",
      content: (
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The Grandeur Residence project presented several unique challenges that required innovative solutions.
          </p>
          <div className="space-y-6">
            {[
              {
                title: "Aesthetic Integration",
                description:
                  "Challenge: Integrating fire safety systems without compromising the luxury aesthetic of the building.\n\nSolution: Custom-designed fixtures and concealed installation methods that blend seamlessly with the interior design.",
              },
              {
                title: "High-Rise Considerations",
                description:
                  "Challenge: Ensuring effective fire protection across 45 floors with varying pressure zones.\n\nSolution: Implemented a zone-based approach with dedicated equipment for different vertical sections of the building.",
              },
              {
                title: "Premium Materials",
                description:
                  "Challenge: Working with high-end finishes and materials that required special consideration.\n\nSolution: Developed custom installation techniques and protective measures to preserve the integrity of premium surfaces.",
              },
              {
                title: "Smart Building Integration",
                description:
                  "Challenge: Integrating fire safety systems with the building's advanced automation systems.\n\nSolution: Created a custom API interface that allows seamless communication between fire safety and building management systems.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{item.title}</h3>
                <p className="text-gray-600 whitespace-pre-line">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Project Results",
      content: (
        <div>
          <p className="text-gray-700 mb-8 leading-relaxed">
            The implementation of our fire safety systems at Grandeur Residence resulted in exceptional outcomes that
            exceeded client expectations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://icl-blog.s3.ap-southeast-1.amazonaws.com/uploads/2018/02/Fountain_Cove-600.jpg"
                alt="Grandeur Residence Results"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              {[
                {
                  title: "Safety Certification",
                  description: "Achieved highest possible safety rating from Dubai Civil Defense",
                },
                {
                  title: "Aesthetic Excellence",
                  description: "Systems integration praised by interior designers for seamless implementation",
                },
                {
                  title: "Smart Building Integration",
                  description: "Full integration with building management systems for centralized control",
                },
                {
                  title: "Client Satisfaction",
                  description: "Project delivered on time and within budget, exceeding client expectations",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold mb-2 text-blue-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            backgroundPosition: "center 40%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/60"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Grandeur Residence</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Elevating fire safety to match unparalleled luxury</p>
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
                onClick={() => setActiveTab(index)}
                className={`flex items-center px-6 py-3 rounded-full text-sm md:text-base font-medium transition-colors duration-300 ${
                  activeTab === index ? "bg-blue-600 text-white shadow-lg" : "bg-white text-blue-800 hover:bg-blue-50"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8 text-blue-800">{tabContent[activeTab].title}</h2>
            {tabContent[activeTab].content}
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <svg className="w-12 h-12 mx-auto mb-6 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              "Working with Eurofire on the Grandeur Residence project was an exceptional experience. Their team's
              attention to detail and commitment to preserving our design vision while implementing state-of-the-art
              fire safety systems was remarkable. The result is a building that offers both uncompromising safety and
              the luxury experience our clients expect."
            </p>
            <div>
              <p className="font-semibold text-lg">Sophia Richardson</p>
              <p className="text-blue-300">Design Director, Grandeur Development Group</p>
            </div>
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
          <p className="text-gray-700 max-w-3xl mx-auto">Explore our implementation at Grandeur Residence</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={`/placeholder.svg?height=${index === 0 ? 600 : 400}&width=${index === 0 ? 800 : 600}&text=Grandeur ${item}`}
                alt={`Grandeur Residence Project Image ${item}`}
                className={`w-full ${index === 0 ? "h-full" : "h-64"} object-cover`}
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
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Ready to Elevate Your Project?</h2>
            <p className="text-gray-700 mb-8 max-w-3xl mx-auto">
              Our team of experts is ready to help you implement premium fire safety systems for your luxury development
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

export default GrandeurResidence

