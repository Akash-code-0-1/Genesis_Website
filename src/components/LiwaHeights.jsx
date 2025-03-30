"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaBuilding, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from "react-icons/fa"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"

const LiwaHeights = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  useEffect(() => {
    setIsVisible(true)

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const features = [
    {
      title: "Advanced Fire Detection",
      description: "Early warning system with addressable smoke and heat detectors throughout the building",
      image: "/placeholder.svg?height=500&width=700&text=Fire Detection",
    },
    {
      title: "Integrated Sprinkler System",
      description: "Comprehensive coverage with zone control and monitoring for optimal response",
      image: "/placeholder.svg?height=500&width=700&text=Sprinkler System",
    },
    {
      title: "Emergency Response System",
      description: "Automated alerts and evacuation guidance with voice announcement capabilities",
      image: "/placeholder.svg?height=500&width=700&text=Emergency Response",
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous surveillance with direct connection to emergency services",
      image: "/placeholder.svg?height=500&width=700&text=24/7 Monitoring",
    },
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen" ref={containerRef}>
      {/* Hero Section with Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1000&width=1600')",
            backgroundPosition: "center 30%",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: isVisible ? 1 : 1.1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-700/70"></div>
        </motion.div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4">Liwa Heights</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Setting new standards in mixed-use development fire safety
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <button className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors duration-300">
                Explore Project
              </button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </section>

      {/* Project Overview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div style={{ opacity, scale }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-blue-800">Project Overview</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Liwa Heights stands as a premier mixed-use development in Abu Dhabi, combining residential, commercial,
              and retail spaces in a striking 52-story tower. This landmark project required a comprehensive fire safety
              solution that could address the unique challenges of a multi-purpose building.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was tasked with designing and implementing integrated fire safety systems that would protect the
              diverse occupants and assets within the building while meeting the stringent requirements of local and
              international safety codes.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <FaBuilding className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Building Type</p>
                  <p className="font-medium">Mixed-Use Tower</p>
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
                  <p className="font-medium">Abu Dhabi, UAE</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUsers className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-medium">3,500+ Occupants</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-xl overflow-hidden shadow-2xl"
          >
            <img src="/placeholder.svg?height=700&width=900" alt="Liwa Heights Building" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Key Features Slider */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Key Fire Safety Features</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our comprehensive solution for Liwa Heights included these advanced systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className={`mb-6 p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-white shadow-lg border-l-4 border-blue-600"
                      : "bg-transparent hover:bg-white/50"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      activeFeature === index ? "text-blue-800" : "text-gray-700"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className={`${activeFeature === index ? "text-gray-700" : "text-gray-500"}`}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-xl bg-white p-2"
            >
              <img
                src={features[activeFeature].image || "/placeholder.svg"}
                alt={features[activeFeature].title}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
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
            How we delivered a comprehensive fire safety solution for Liwa Heights
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              number: "01",
              title: "Assessment & Planning",
              description: "Conducted comprehensive risk assessment and developed tailored fire safety strategy",
              delay: 0.2,
            },
            {
              number: "02",
              title: "System Design",
              description: "Engineered integrated systems with zone-based approach for different building functions",
              delay: 0.4,
            },
            {
              number: "03",
              title: "Installation",
              description: "Implemented systems with minimal disruption to construction schedule",
              delay: 0.6,
            },
            {
              number: "04",
              title: "Testing & Commissioning",
              description: "Rigorous testing of all systems to ensure optimal performance",
              delay: 0.8,
            },
            {
              number: "05",
              title: "Training",
              description: "Comprehensive training for building management and security personnel",
              delay: 1.0,
            },
            {
              number: "06",
              title: "Ongoing Support",
              description: "Continued maintenance and support to ensure systems remain at peak performance",
              delay: 1.2,
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

      {/* Results & Benefits */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Results & Benefits</h2>
            <p className="text-blue-200 max-w-3xl mx-auto">
              The impact of our fire safety implementation at Liwa Heights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
              <ul className="space-y-4">
                {[
                  "Achieved highest safety rating from Abu Dhabi Civil Defense",
                  "Integrated systems across residential, commercial, and retail spaces",
                  "Reduced false alarm incidents by 98% through advanced detection algorithms",
                  "Implemented zone-based evacuation protocols for efficient emergency response",
                  "Seamless integration with building management systems",
                  "Completed installation ahead of schedule and within budget",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <BsCheck2Circle className="text-blue-300 text-xl mt-1 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-6">Client Testimonial</h3>
              <div className="bg-blue-800/50 p-6 rounded-lg border border-blue-700">
                <svg className="w-10 h-10 text-blue-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg mb-6 leading-relaxed">
                  "Eurofire's implementation at Liwa Heights has set a new benchmark for fire safety in mixed-use
                  developments. Their innovative approach to addressing the unique challenges of our building has
                  resulted in a system that provides comprehensive protection while being intuitive to manage. We're
                  extremely satisfied with the outcome."
                </p>
                <div>
                  <p className="font-semibold">Khalid Al Marzouqi</p>
                  <p className="text-blue-300">Project Director, Liwa Development Corporation</p>
                </div>
              </div>
            </motion.div>
          </div>
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
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at Liwa Heights</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${
                index === 0 || index === 7 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={`/placeholder.svg?height=${index === 0 || index === 7 ? 600 : 400}&width=${index === 0 || index === 7 ? 800 : 600}&text=Liwa ${item}`}
                alt={`Liwa Heights Project Image ${item}`}
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

export default LiwaHeights

