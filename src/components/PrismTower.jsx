"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, MapPin, Calendar, Building, Shield, Zap, Droplets, Flame, ChevronDown } from "lucide-react"

const PrismTower = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("overview")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Determine active section based on scroll position
      const sections = document.querySelectorAll("section[id]")
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100
        const sectionHeight = section.offsetHeight
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section with Geometric Animation */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800">
        <div className="absolute inset-0 z-0">
          {/* Animated geometric shapes */}
          <div className="absolute w-64 h-64 bg-purple-500 opacity-20 rounded-full top-1/4 left-1/4 animate-float-slow"></div>
          <div className="absolute w-96 h-96 bg-indigo-500 opacity-20 rounded-full bottom-1/4 right-1/4 animate-float-medium"></div>
          <div className="absolute w-48 h-48 bg-pink-500 opacity-20 rounded-full top-1/3 right-1/3 animate-float-fast"></div>
          <div className="absolute w-80 h-80 bg-blue-500 opacity-20 rounded-full bottom-1/3 left-1/3 animate-spin-slow"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">Prism Tower</h1>
          <p className="text-xl md:text-2xl text-white mb-10 animate-fade-in-delay">
            Innovative fire safety solutions for a landmark architectural masterpiece
          </p>
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection("overview")
            }}
            className="inline-block animate-bounce mt-8"
          >
            <ChevronDown className="text-white" size={36} />
          </a>
        </div>
      </div>

      {/* Side Navigation */}
      <div className="hidden lg:block fixed right-10 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col items-center space-y-6">
          {["overview", "features", "challenges", "gallery", "testimonials"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(section)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? "bg-purple-600 w-4 h-4" : "bg-gray-300 hover:bg-purple-400"
              }`}
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section id="overview" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Project Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform">
              <MapPin className="text-purple-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h3>
              <p className="text-xl font-medium text-gray-800">Business Bay, Dubai, UAE</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform">
              <Calendar className="text-purple-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">COMPLETION DATE</h3>
              <p className="text-xl font-medium text-gray-800">June 2022</p>
            </div>
            <div className="bg-white rounded-xl shadow-xl p-8 transform hover:-translate-y-2 transition-transform">
              <Building className="text-purple-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">CLIENT</h3>
              <p className="text-xl font-medium text-gray-800">Prism Development LLC</p>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The Prism Tower stands as an architectural marvel in Dubai's Business Bay, featuring a distinctive
                  geometric façade that creates a prism-like effect. This 45-story mixed-use building required a
                  sophisticated fire safety system that would complement its unique design while providing comprehensive
                  protection.
                </p>
                <p className="text-lg text-gray-600">
                  Eurofire was commissioned to design and implement a complete fire safety solution that would address
                  the building's complex geometry, multiple usage types, and high-end finishes. Our approach integrated
                  cutting-edge technology with aesthetic considerations to deliver a system that enhances safety without
                  compromising the tower's striking visual appeal.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl animate-slide-in-right">
                <img
                  src="/placeholder.svg?height=800&width=1200&text=Prism Tower Exterior"
                  alt="Prism Tower"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 transform hover:scale-105 transition-transform">
              <Shield className="text-purple-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Geometric Detection</h3>
              <p className="text-gray-600">
                Custom-designed detection systems that account for the building's unique geometric spaces and airflow
                patterns
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 transform hover:scale-105 transition-transform">
              <Zap className="text-purple-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Integrated Façade Protection</h3>
              <p className="text-gray-600">
                Specialized systems to protect the glass prism façade and prevent fire spread between floors
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 transform hover:scale-105 transition-transform">
              <Flame className="text-purple-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Concealed Systems</h3>
              <p className="text-gray-600">
                Aesthetically integrated fire safety components that maintain the architectural integrity
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-purple-600 transform hover:scale-105 transition-transform">
              <Droplets className="text-purple-600 mb-4" size={36} />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Water Systems</h3>
              <p className="text-gray-600">
                Water mist systems for luxury areas to minimize water damage while maximizing fire suppression
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section id="challenges" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Challenges & Solutions</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-red-50 p-8 rounded-xl animate-slide-in-left">
                <h3 className="text-xl font-bold text-red-600 mb-4">Challenge</h3>
                <p className="text-gray-700">
                  Integrating fire detection systems within the complex geometric ceiling designs without compromising
                  aesthetics
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl animate-slide-in-right">
                <h3 className="text-xl font-bold text-green-600 mb-4">Solution</h3>
                <p className="text-gray-700">
                  Developed custom recessed and color-matched detectors that blend seamlessly with the architectural
                  elements while maintaining optimal coverage
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-red-50 p-8 rounded-xl animate-slide-in-left">
                <h3 className="text-xl font-bold text-red-600 mb-4">Challenge</h3>
                <p className="text-gray-700">
                  Protecting the extensive glass façade from fire damage and preventing vertical fire spread
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl animate-slide-in-right">
                <h3 className="text-xl font-bold text-green-600 mb-4">Solution</h3>
                <p className="text-gray-700">
                  Implemented specialized curtain wall sprinklers and fire-rated glazing systems at critical junctions
                  to create vertical fire breaks
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="bg-red-50 p-8 rounded-xl animate-slide-in-left">
                <h3 className="text-xl font-bold text-red-600 mb-4">Challenge</h3>
                <p className="text-gray-700">
                  Designing systems for multiple usage types (residential, commercial, and retail) with different risk
                  profiles
                </p>
              </div>
              <div className="bg-green-50 p-8 rounded-xl animate-slide-in-right">
                <h3 className="text-xl font-bold text-green-600 mb-4">Solution</h3>
                <p className="text-gray-700">
                  Created a zoned approach with tailored systems for each area type, including specialized kitchen
                  suppression for restaurants and water mist for luxury apartments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">Project Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Prism Tower Exterior"
                alt="Prism Tower Exterior"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Prism Tower Exterior View</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Lobby Fire Systems"
                alt="Lobby Fire Systems"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Concealed Fire Systems in Lobby</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Façade Protection"
                alt="Façade Protection"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Façade Fire Protection System</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Control Room"
                alt="Control Room"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Integrated Control Room</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Water Mist System"
                alt="Water Mist System"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Water Mist System Installation</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src="/placeholder.svg?height=600&width=800&text=Night View"
                alt="Night View"
                className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                <p className="text-white p-4 font-medium">Prism Tower at Night</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-white opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl italic mb-6">
                "Genesis approach to the Prism Tower project was nothing short of exceptional. They understood our
                vision for maintaining the building's aesthetic integrity while implementing state-of-the-art fire
                safety. Their custom solutions and attention to detail have resulted in a system that provides peace of
                mind without compromising our award-winning design."
              </p>
              <div className="font-semibold">
                <p className="text-lg">Chief Architect</p>
                <p className="text-sm opacity-75">Prism Development LLC</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 px-4 bg-gray-100 rounded-xl mt-20">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to discuss your architectural fire safety needs?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team specializes in creating custom fire safety solutions that complement architectural excellence.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Contact Our Design Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default PrismTower;

