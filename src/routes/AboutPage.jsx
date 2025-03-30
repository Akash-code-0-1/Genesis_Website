"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Award, Users, CheckCircle, Settings, Eye } from "lucide-react"

const AboutPage = () => {
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = document.querySelectorAll(".counter")
            counters.forEach((counter) => {
              const target = Number.parseInt(counter.getAttribute("data-target") || "0")
              let count = 0
              const updateCounter = () => {
                const increment = target / 100
                if (count < target) {
                  count += increment
                  counter.textContent = Math.ceil(count).toString() + (counter.getAttribute("data-suffix") || "")
                  setTimeout(updateCounter, 10)
                } else {
                  counter.textContent = target.toString() + (counter.getAttribute("data-suffix") || "")
                }
              }
              updateCounter()
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header
        className="w-full h-[250px] bg-blue-700 py-4 px-6 shadow-lg flex items-center justify-center bg-center bg-cover"
        style={{ backgroundImage: `url(https://images.pexels.com/photos/18299007/pexels-photo-18299007/free-photo-of-silhouette-of-a-fireman-with-a-fire-behind-his-back.jpeg?auto=compress&cs=tinysrgb&w=600)` }}
      >
        <h1 className="text-white text-3xl font-bold text-center">About us</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Navigation */}
        {/* <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/" className="text-blue-500">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-600">About us</span>
          </div>
        </div> */}

        {/* About Section */}
        <div className="container mx-auto px-15 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.h2
                className="text-2xl font-bold mb-4 text-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Genesis
              </motion.h2>

              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Genesis was established by fire and safety experts with over more than 10 years experience in the UAE
                market. Our research and study of the market has led us to identify the need for a company that can
                provide special focus on the efficient and effective way to distribute fire extinguishers and services
                which ensure the safety of physical and human assets in the country.
              </motion.p>

              <motion.p
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                We are a team of highly qualified and experienced fire safety professionals. Our leader also has more
                than 15 years of experience in the fire and safety sector. All the technicians and engineers fit quite
                nicely the requirements of the Civil Defense Authority.
              </motion.p>

              {/* Certification Logos */}
              <motion.div
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/022/474/753/non_2x/award-certificate-template-luxury-green-color-gradation-with-gold-lines-line-pattern-blank-award-design-illustration-vector.jpg"
                    width={50}
                    height={50}
                    alt="Certification 1"
                    className="object-contain"
                  />
                </div>
                <div className="p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="https://raketcontent.com/Conduct_Award_Certificate_1899137e7e.jpg"
                    width={50}
                    height={50}
                    alt="Certification 2"
                    className="object-contain"
                  />
                </div>
                <div className="p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="https://awardco.my.site.com/Customerhelp/servlet/rtaImage?eid=ka06S000001MjCT&feoid=00N6S00000LU5XL&refid=0EM6S000009yEp6"
                    width={50}
                    height={50}
                    alt="Certification 3"
                    className="object-contain"
                  />
                </div>
                <div className="p-3 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src="https://www.printpapa.com/eshop/pc/catalog/awardcertificate_01_947_detail.jpg"
                    width={50}
                    height={50}
                    alt="Certification 4"
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Stats */}
              <div ref={statsRef} className="grid grid-cols-3 gap-4 mb-8">
                <motion.div
                  className="text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl font-bold text-blue-500">
                    <span className="counter" data-target="2000" data-suffix="+">
                      0
                    </span>
                  </h3>
                  <p className="text-gray-600">Clients</p>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl font-bold text-blue-500">
                    <span className="counter" data-target="510" data-suffix="+">
                      0
                    </span>
                  </h3>
                  <p className="text-gray-600">Projects</p>
                </motion.div>

                <motion.div
                  className="text-center p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-3xl font-bold text-blue-500">
                    <span className="counter" data-target="50" data-suffix="+">
                      0
                    </span>
                  </h3>
                  <p className="text-gray-600">Certificates</p>
                </motion.div>
              </div>
            </div>

            {/* Right img */}
            <div className="lg:col-span-5">
              <motion.div
                className="border-8 border-blue-300 p-2 h-full rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://images.pexels.com/photos/14824431/pexels-photo-14824431.jpeg?auto=compress&cs=tinysrgb&w=600"
                  width={300}
                  height={400}
                  alt="Fire Extinguisher"
                  className="w-full h-full object-cover rounded-md"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-900 text-white py-12 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-500 rounded-full p-4 mb-4 shadow-lg">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Qualified Team</h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-500 rounded-full p-4 mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Certified Engineers</h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-500 rounded-full p-4 mb-4 shadow-lg">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Services</h3>
              </motion.div>

              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="bg-blue-500 rounded-full p-4 mb-4 shadow-lg">
                  <Settings className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Equipment</h3>
              </motion.div>
            </div>
          </div>
        </div>

        {/* What Makes Us Unique Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6">
              We have got your back solutions for those following fire and safety regulations.
            </h3>
            <p className="mb-6">
              Qualified, fully trained and exceptional staff is the backbone that helps us to grow and inspire.
            </p>
            <motion.button
              className="bg-white text-blue-500 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2 shadow-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
              Vision
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="bg-white p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-500">What makes us unique?</h3>
            <p className="text-gray-700 mb-4">
              As probably the most safety company regarding to giving innovative solutions to our clients, we have a
              team of highly qualified engineers and technicians according to the government regulations and UAE Civil
              Defense Authority. Our technical and delivery approach is firm, but with limited bureaucracy and that
              makes us different from others. We are committed to protection from fire creating all the safety measures
              to give extraordinary solutions that are available to give services at any time as per the clients
              requirements. We have a team of professionals who are dedicated to the protection of the workers. A
              company that qualified with ISO approval leading to another. Certain builds a project management system
              that is unique.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  )
}

export default AboutPage




