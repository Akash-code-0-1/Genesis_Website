"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaShieldAlt } from "react-icons/fa"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"

const MikanazPlaza = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSystem, setActiveSystem] = useState(0)

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveSystem((prev) => (prev + 1) % 4)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const systems = [
    {
      title: "Retail Fire Protection",
      description: "Specialized systems for retail environments with high occupancy and diverse merchandise",
      image: "/placeholder.svg?height=500&width=700&text=Retail Protection",
      features: [
        "High-sensitivity smoke detection",
        "Concealed sprinkler systems",
        "Integrated with store security systems",
        "Custom evacuation protocols for retail spaces",
      ],
    },
    {
      title: "Food Court Safety",
      description: "Specialized systems for food preparation areas and high-occupancy dining spaces",
      image: "/placeholder.svg?height=500&width=700&text=Food Court Safety",
      features: [
        "Kitchen hood suppression systems",
        "Grease duct protection",
        "Heat detection in cooking areas",
        "Specialized evacuation procedures",
      ],
    },
    {
      title: "Public Area Protection",
      description: "Comprehensive coverage for common areas, corridors, and gathering spaces",
      image: "/placeholder.svg?height=500&width=700&text=Public Areas",
      features: [
        "Wide-area smoke detection",
        "Voice evacuation with multi-language support",
        "Dynamic evacuation routing",
        "Emergency lighting with clear signage",
      ],
    },
    {
      title: "Parking Facility Systems",
      description: "Specialized protection for multi-level parking structures",
      image: "/placeholder.svg?height=500&width=700&text=Parking Facilities",
      features: [
        "Carbon monoxide detection",
        "Water-based suppression with freeze protection",
        "Vehicle fire detection algorithms",
        "Integrated ventilation control",
      ],
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
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Mikanaz Plaza</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive fire safety for a premier shopping destination
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

      {/* Project Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Project Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Mikanaz Plaza is a premier shopping and entertainment destination in Dubai, spanning over 200,000 square
              meters with more than 350 retail outlets, a diverse food court, entertainment venues, and multi-level
              parking facilities.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was tasked with designing and implementing a comprehensive fire safety solution that would
              address the unique challenges of a high-occupancy retail environment while ensuring the safety of
              thousands of daily visitors and staff.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Retail & Entertainment</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2018</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">Dubai, UAE</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Daily Visitors</p>
                  <p className="font-medium">25,000+</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src="/placeholder.svg?height=700&width=900" alt="Mikanaz Plaza Building" className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Specialized Systems */}
      <section className="py-20 px-4 bg-blue-50" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Specialized Systems</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our comprehensive solution for Mikanaz Plaza included specialized systems for different areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {systems.map((system, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                      activeSystem === index
                        ? "bg-white shadow-lg border-l-4 border-blue-600"
                        : "bg-transparent hover:bg-white/50"
                    }`}
                    onClick={() => setActiveSystem(index)}
                  >
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        activeSystem === index ? "text-blue-800" : "text-gray-700"
                      }`}
                    >
                      {system.title}
                    </h3>
                    <p className={`${activeSystem === index ? "text-gray-700" : "text-gray-500"}`}>
                      {system.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl p-6"
              >
                <div className="mb-6">
                  <img
                    src={systems[activeSystem].image || "/placeholder.svg"}
                    alt={systems[activeSystem].title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-blue-800">{systems[activeSystem].title}</h3>

                <div className="space-y-3">
                  {systems[activeSystem].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Our Implementation Approach</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            How we delivered a comprehensive fire safety solution for Mikanaz Plaza
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Risk Assessment",
              description: "Conducted comprehensive risk assessment for different zones and occupancy types",
              delay: 0.2,
            },
            {
              number: "02",
              title: "Customized Design",
              description: "Developed specialized systems for retail, food court, public areas, and parking",
              delay: 0.4,
            },
            {
              number: "03",
              title: "Phased Implementation",
              description: "Executed installation in phases to minimize disruption to mall operations",
              delay: 0.6,
            },
            {
              number: "04",
              title: "Integration & Testing",
              description: "Integrated all systems with central monitoring and conducted rigorous testing",
              delay: 0.8,
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ duration: 0.6, delay: step.delay }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-blue-600 p-4">
                <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold text-xl">
                  {step.number}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Key Achievements</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              The impact of our fire safety implementation at Mikanaz Plaza
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Zero False Alarms",
                description:
                  "Advanced detection algorithms eliminated false alarms, preventing unnecessary evacuations",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 0.2,
              },
              {
                title: "Rapid Response Time",
                description:
                  "Reduced emergency response time by 40% through strategic system placement and integration",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 0.4,
              },
              {
                title: "Seamless Integration",
                description: "Full integration with mall management systems for centralized monitoring and control",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 0.6,
              },
              {
                title: "Minimal Disruption",
                description: "Implemented systems with zero business interruption to mall operations",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 0.8,
              },
              {
                title: "Highest Safety Rating",
                description: "Achieved highest possible safety rating from Dubai Civil Defense",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 1.0,
              },
              {
                title: "Staff Empowerment",
                description: "Trained over 200 mall staff in emergency procedures and system operation",
                icon: <FaShieldAlt className="text-blue-300 text-4xl mb-4" />,
                delay: 1.2,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 0.6, delay: item.delay }}
                className="bg-blue-800/50 rounded-lg p-6 text-center border border-blue-700/50"
              >
                {item.icon}
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-blue-100">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-center"
          >
            <svg className="w-12 h-12 mx-auto mb-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
              "Eurofire's implementation at Mikanaz Plaza has transformed our approach to safety. Their team's
              understanding of the unique challenges of a retail environment and their ability to develop specialized
              solutions for different areas of our mall has resulted in a comprehensive system that protects our
              visitors and staff while being virtually invisible to the shopping experience. The seamless integration
              with our existing systems and the minimal disruption during implementation exceeded our expectations."
            </p>
            <div>
              <p className="font-semibold text-lg text-gray-800">Sarah Al Mansouri</p>
              <p className="text-blue-600">Operations Director, Mikanaz Plaza</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-800">Project Gallery</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at Mikanaz Plaza</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={`/placeholder.svg?height=400&width=600&text=Mikanaz ${item}`}
                alt={`Mikanaz Plaza Project Image ${item}`}
                className="w-full h-64 object-cover"
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

export default MikanazPlaza

