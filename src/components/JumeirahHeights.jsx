"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Calendar, MapPin, CheckCircle, ArrowRight, Home, Users, Droplet } from "lucide-react"

const JumeirahHeights = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const projectDetails = {
    client: "Jumeirah Properties",
    location: "Jumeirah, Dubai, UAE",
    completed: "2022",
    units: "320 luxury residential units",
    scope: "Comprehensive fire protection systems for residential complex",
  }

  const keyFeatures = [
    "Addressable fire alarm system with apartment-specific detection",
    "Residential sprinkler system designed to NFPA 13R standards",
    "Emergency voice evacuation system with phased evacuation capability",
    "Fire pump system with backup power generation",
    "Smoke control systems for common areas and corridors",
    "Firefighter access points and equipment throughout the complex",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Wave Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[70vh] overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-80"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1200&text=Jumeirah+Heights')" }}
        ></div>

        {/* Wave animation */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="rgba(255, 255, 255, 0.2)"
            d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,154.7C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,197.3C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,106.7C672,117,768,171,864,176C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.path
            fill="rgba(255, 255, 255, 0.3)"
            d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,170.7C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,229.3C96,235,192,245,288,234.7C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-center">Jumeirah Heights</h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-center max-w-3xl mt-4"
          >
            Premium fire protection for luxury residential living
          </motion.p>
        </div>
      </motion.div>

      {/* Project Overview */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Details */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Project Details</h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Home className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Client</p>
                    <p className="font-medium text-gray-800">{projectDetails.client}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-800">{projectDetails.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Calendar className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Completed</p>
                    <p className="font-medium text-gray-800">{projectDetails.completed}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Project Size</p>
                    <p className="font-medium text-gray-800">{projectDetails.units}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Scope of Work</p>
                    <p className="font-medium text-gray-800">{projectDetails.scope}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 w-full flex items-center justify-center">
                  Download Case Study
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Project Content */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-6">Project Overview</h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Jumeirah Heights represents the pinnacle of luxury residential living in Dubai, comprising multiple
              residential buildings with premium apartments and penthouses. Our team was commissioned to design and
              implement comprehensive fire protection systems that would ensure the safety of residents while
              maintaining the aesthetic standards expected in high-end properties.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Residential fire protection presents unique challenges, requiring systems that provide robust protection
              while remaining unobtrusive in living spaces. Our approach balanced technical excellence with design
              sensitivity, creating solutions that integrate seamlessly with the luxurious environment while providing
              world-class fire safety.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <img
                src="https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA="
                alt="Residential Complex"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="https://lh7-rt.googleusercontent.com/docsz/AD_4nXd6RVKb3piZ5uEwYKUCW75o-LY1usIidx4yI0Q_2I-V_oX7TIefBz2mfVumXdGZgHIR95Me4fe53zSEDbZwBSq9gXhkgc0RLIvxJy635P84AJqE0aWv13dtNiTADAExpyUbvOGoVwUOStooAZLK1oV8vRPP?key=6shcMHMAZMFUN4QnvloVAA"
                alt="Interior Systems"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
              <img
                src="https://www.powermag.com/wp-content/uploads/2019/01/figure-4-fom.jpg"
                alt="Control Room"
                className="rounded-lg shadow-md h-64 object-cover w-full"
              />
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Key Features</h3>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-blue-800 mb-4">Residential Fire Safety Approach</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Concealed Protection</h4>
                <p className="text-gray-700">
                  We utilized concealed sprinklers and flush-mounted detection devices throughout residential units,
                  ensuring effective protection while maintaining the luxury aesthetic of the interiors.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Zoned Approach</h4>
                <p className="text-gray-700">
                  The fire alarm and evacuation systems were designed with a zoned approach, allowing for targeted
                  responses to fire events and minimizing disruption to unaffected areas during incidents or testing.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Common Area Focus</h4>
                <p className="text-gray-700">
                  Enhanced protection was provided in common areas and amenity spaces, with specialized systems for
                  kitchens, gyms, and pool areas based on their specific risk profiles.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-5 border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-800 mb-2">Resident Education</h4>
                <p className="text-gray-700">
                  We developed comprehensive resident education materials and conducted training sessions to ensure
                  occupants understand emergency procedures and the operation of in-unit safety features.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <Droplet className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Water Supply Innovation</h3>
              </div>
              <p className="mb-4">
                A key challenge in this project was ensuring adequate water supply for fire protection while minimizing
                the visual impact of infrastructure. Our solution included a concealed fire water storage system
                integrated with the landscape design, and a state-of-the-art pump room with redundant systems to ensure
                reliability.
              </p>
              <p>
                The fire pump system was designed with variable speed technology to maintain optimal pressure while
                minimizing energy consumption, aligning with the development's sustainability goals while providing
                superior protection.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default JumeirahHeights

