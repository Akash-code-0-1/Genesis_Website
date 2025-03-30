"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaHotel } from "react-icons/fa"
import { BsArrowRight, BsCheck2Circle } from "react-icons/bs"

const SHotel = () => {
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
      title: "Luxury Hotel Fire Protection",
      description: "Comprehensive fire safety systems designed specifically for luxury hospitality environments",
      image: "/placeholder.svg?height=500&width=700&text=Hotel Protection",
      points: [
        "Discreet detection systems that preserve the luxury aesthetic",
        "Silent alarm notification to staff to prevent guest panic",
        "Zone-based evacuation protocols for targeted response",
      ],
    },
    {
      title: "Kitchen & Restaurant Safety",
      description: "Specialized systems for hotel restaurants and commercial kitchens",
      image: "/placeholder.svg?height=500&width=700&text=Kitchen Safety",
      points: [
        "Advanced kitchen hood suppression systems",
        "Heat detection optimized for cooking environments",
        "Automatic equipment shutdown integration",
      ],
    },
    {
      title: "Guest Room Protection",
      description: "Tailored fire safety solutions for guest rooms and suites",
      image: "/placeholder.svg?height=500&width=700&text=Guest Rooms",
      points: [
        "Concealed sprinklers with custom finishes",
        "In-room smoke detection with central monitoring",
        "Smart evacuation guidance systems",
      ],
    },
    {
      title: "Event Space Systems",
      description: "Flexible fire protection for ballrooms and conference facilities",
      image: "/placeholder.svg?height=500&width=700&text=Event Spaces",
      points: [
        "Adaptable systems for changing room configurations",
        "Integration with AV and lighting systems",
        "High-capacity evacuation capabilities",
      ],
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
            <h1 className="text-4xl md:text-7xl font-bold mb-4">S Hotel</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">Luxury hospitality with uncompromising fire safety</p>
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
              S Hotel stands as one of Dubai's most prestigious luxury hotels, offering unparalleled hospitality
              experiences in a stunning architectural masterpiece. This 5-star property features 350 luxury rooms and
              suites, multiple restaurants, extensive conference facilities, and premium amenities.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team was commissioned to design and implement a comprehensive fire safety solution that would provide
              the highest level of protection while maintaining the hotel's luxurious aesthetic and ensuring minimal
              disruption to guest experiences.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center">
                <FaHotel className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Property Type</p>
                  <p className="font-medium">5-Star Luxury Hotel</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Completion</p>
                  <p className="font-medium">2021</p>
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
                <FaUsers className="text-blue-600 text-2xl mr-3" />
                <div>
                  <p className="text-sm text-gray-500">Capacity</p>
                  <p className="font-medium">800+ Guests</p>
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
            <img src="/placeholder.svg?height=700&width=900" alt="S Hotel Building" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* Specialized Systems */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-800">Specialized Systems</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our comprehensive solution for S Hotel included specialized systems for different areas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -20 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className={`p-6 rounded-lg cursor-pointer transition-all duration-300 ${activeFeature === index
                      ? "bg-white shadow-lg border-l-4 border-blue-600"
                      : "bg-transparent hover:bg-white/50"
                      }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <h3
                      className={`text-xl font-semibold mb-2 ${activeFeature === index ? "text-blue-800" : "text-gray-700"
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
            </div>

            <div className="lg:col-span-3">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden shadow-xl p-6"
              >
                <div className="mb-6">
                  <img
                    src={features[activeFeature].image || "/placeholder.svg"}
                    alt={features[activeFeature].title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-blue-800">{features[activeFeature].title}</h3>

                <div className="space-y-3">
                  {features[activeFeature].points.map((point, idx) => (
                    <div key={idx} className="flex items-start">
                      <BsCheck2Circle className="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
                      <p className="text-gray-700">{point}</p>
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
            How we delivered a comprehensive fire safety solution for S Hotel
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              number: "01",
              title: "Luxury-Focused Assessment",
              description: "Conducted detailed assessment with focus on preserving luxury guest experience",
              delay: 0.2,
            },
            {
              number: "02",
              title: "Custom System Design",
              description: "Developed specialized systems for guest rooms, restaurants, and event spaces",
              delay: 0.4,
            },
            {
              number: "03",
              title: "Discreet Implementation",
              description: "Executed installation with minimal disruption to hotel operations",
              delay: 0.6,
            },
            {
              number: "04",
              title: "Staff Training",
              description: "Comprehensive training for hotel staff on system operation and emergency protocols",
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

      {/* Testimonial */}
      <section className="py-20 px-4 bg-blue-900 text-white">
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
              "Genesis implementation at S Hotel has been exceptional. Their understanding of the unique requirements
              of a luxury hospitality environment and their ability to provide comprehensive protection while
              maintaining our aesthetic standards has been impressive. The systems are virtually invisible to our guests
              yet provide the highest level of protection."
            </p>
            <div>
              <p className="font-semibold text-lg">Elena Kowalski</p>
              <p className="text-blue-300">General Manager, S Hotel</p>
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
          <p className="text-gray-700 max-w-3xl mx-auto">View our implementation at S Hotel</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.6, delay: 0.05 * index }}
              className={`rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${index === 0 || index === 7 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
            >
              <img
                src={`/placeholder.svg?height=${index === 0 || index === 7 ? 600 : 400}&width=${index === 0 || index === 7 ? 800 : 600}&text=S Hotel ${item}`}
                alt={`S Hotel Project Image ${item}`}
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

export default SHotel

