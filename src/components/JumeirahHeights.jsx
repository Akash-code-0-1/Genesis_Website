"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft, MapPin, Calendar, Building, Shield, Zap, Droplets, Flame, Check } from "lucide-react"

const JumeirahHeights = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  const slides = [
    {
      image: "/placeholder.svg?height=800&width=1200&text=Jumeirah Heights Overview",
      title: "Jumeirah Heights",
      description: "Comprehensive fire safety for luxury residential community",
    },
    {
      image: "/placeholder.svg?height=800&width=1200&text=Fire Alarm Systems",
      title: "Advanced Detection",
      description: "State-of-the-art fire detection throughout the community",
    },
    {
      image: "/placeholder.svg?height=800&width=1200&text=Sprinkler Systems",
      title: "Water Protection",
      description: "Comprehensive sprinkler coverage for all residential units",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Auto-advance slider
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
    }
  }, [slides.length])

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${currentSlide * 100}%)`
    }
  }, [currentSlide])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`py-4 px-6 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="/"
            className={`text-2xl font-bold transition-colors ${isScrolled ? "text-green-600" : "text-white"}`}
          >
            Eurofire
          </Link>
          <Link
            to="/our-work"
            className={`flex items-center transition-colors ${isScrolled ? "text-gray-700 hover:text-green-600" : "text-white hover:text-green-200"}`}
          >
            <ArrowLeft className="mr-2" size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="relative h-screen overflow-hidden">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-full bg-cover bg-center"
              style={{ width: `${100 / slides.length}%` }}
            >
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <img
                src={slide.image || "/placeholder.svg"}
                alt={slide.title}
                className="absolute w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">{slide.title}</h1>
                  <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-green-500 w-10" : "bg-white bg-opacity-50 hover:bg-opacity-100"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform">
              <MapPin className="text-green-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">LOCATION</h3>
              <p className="text-xl font-medium text-gray-800">Jumeirah, Dubai, UAE</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform">
              <Calendar className="text-green-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">COMPLETION DATE</h3>
              <p className="text-xl font-medium text-gray-800">April 2021</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-2 transition-transform">
              <Building className="text-green-600 mb-4" size={32} />
              <h3 className="text-sm font-semibold text-gray-500 mb-1">CLIENT</h3>
              <p className="text-xl font-medium text-gray-800">Jumeirah Properties</p>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                Jumeirah Heights is an exclusive residential community featuring luxury villas and apartment complexes
                spread across a sprawling landscape. Eurofire was entrusted with designing and implementing
                comprehensive fire safety systems throughout this prestigious development.
              </p>
              <p className="text-lg text-gray-600">
                Our scope encompassed multiple residential buildings, common areas, and infrastructure, requiring a
                holistic approach to fire safety that balanced protection with the aesthetic requirements of this
                high-end community. The project demanded solutions that would integrate seamlessly with the luxurious
                environment while providing state-of-the-art safety features.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl animate-fade-in-delay">
              <img
                src="/placeholder.svg?height=800&width=1200&text=Jumeirah Heights Aerial View"
                alt="Jumeirah Heights"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Key Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 transform hover:scale-105 transition-transform">
                <Shield className="text-green-600 mb-4" size={36} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community-Wide Coverage</h3>
                <p className="text-gray-600">
                  Integrated fire safety systems spanning all residential units and common areas
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 transform hover:scale-105 transition-transform">
                <Zap className="text-green-600 mb-4" size={36} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Smart Home Integration</h3>
                <p className="text-gray-600">
                  Fire detection systems that integrate with smart home technology for enhanced safety
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 transform hover:scale-105 transition-transform">
                <Flame className="text-green-600 mb-4" size={36} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Discreet Protection</h3>
                <p className="text-gray-600">Concealed sprinklers and detectors that maintain the luxury aesthetic</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 transform hover:scale-105 transition-transform">
                <Droplets className="text-green-600 mb-4" size={36} />
                <h3 className="text-xl font-bold text-gray-800 mb-3">Landscape Integration</h3>
                <p className="text-gray-600">
                  Fire hydrant and water supply systems integrated into the landscape design
                </p>
              </div>
            </div>
          </div>

          {/* Systems Implemented */}
          <div className="mb-16 bg-green-50 p-10 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Systems Implemented</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-green-600 text-white p-2 rounded-full mr-3">1</span>
                  Residential Fire Safety
                </h3>
                <ul className="space-y-4 pl-12">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Addressable fire alarm systems in each residential unit</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Concealed sprinkler systems with designer covers</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Kitchen-specific fire suppression systems</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Smart smoke detectors with mobile alerts</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-green-600 text-white p-2 rounded-full mr-3">2</span>
                  Community Infrastructure
                </h3>
                <ul className="space-y-4 pl-12">
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Strategically placed fire hydrants throughout the community</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Central monitoring station with 24/7 surveillance</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Emergency response system with direct connection to civil defense</p>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-green-600 mr-3 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Backup water reservoirs and pump systems</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Jumeirah Heights Villa"
                  alt="Jumeirah Heights Villa"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Luxury Villa Fire Safety</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Control Room"
                  alt="Control Room"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Central Monitoring Station</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Landscape Hydrant"
                  alt="Landscape Hydrant"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Landscape-Integrated Fire Hydrant</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Concealed Sprinkler"
                  alt="Concealed Sprinkler"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Designer Concealed Sprinkler</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Smart Detection"
                  alt="Smart Detection"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Smart Home Fire Detection</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl shadow-lg h-80">
                <img
                  src="/placeholder.svg?height=600&width=800&text=Community Overview"
                  alt="Community Overview"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end">
                  <p className="text-white p-4 font-medium">Community-Wide Protection</p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mb-16 bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-10 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <svg className="w-12 h-12 mx-auto mb-4 text-white opacity-50" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-xl md:text-2xl italic mb-6">
                "Eurofire's implementation at Jumeirah Heights has set a new standard for residential fire safety. Their
                ability to integrate advanced systems while maintaining our luxury aesthetic was impressive. Residents
                feel secure knowing they have cutting-edge protection that doesn't compromise on design."
              </p>
              <div className="font-semibold">
                <p className="text-lg">Property Director</p>
                <p className="text-sm opacity-75">Jumeirah Properties</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 px-4 bg-gray-100 rounded-xl">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to enhance your property's fire safety?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team specializes in creating custom fire safety solutions for luxury residential communities.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Eurofire</h2>
            <p className="mb-6">Leading Fire Safety Solutions in the UAE</p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="hover:text-green-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-green-400 transition-colors">
                Instagram
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2023 Eurofire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default JumeirahHeights;

