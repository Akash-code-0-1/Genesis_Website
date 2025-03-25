import { useState, useEffect, useRef } from "react";
import genesis_logo from '../assets/images/genesis_logo.png';
import email from '../assets/icons/email.png';
import telephone from '../assets/icons/telephone.png';
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";



const Navbar = () => {
  const location = useLocation(); // Get current route
  console.log("Navbar component rendered");

  const [showSecondaryNavbar, setShowSecondaryNavbar] = useState(false);
  const mainNavRef = useRef(null); // Reference to the main navbar

  useEffect(() => {
    console.log("useEffect triggered");

    const handleScroll = () => {
      console.log("Scroll event triggered");

      if (mainNavRef.current) {
        const heroSectionHeight = mainNavRef.current.clientHeight || 0;
        console.log("Navbar height:", heroSectionHeight, "ScrollY:", window.scrollY);
        setShowSecondaryNavbar(window.scrollY > heroSectionHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log("Cleanup scroll event");
    };
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);



  return (
    <>
      {/* Secondary Navbar */}
      {showSecondaryNavbar && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 animate-slide-down">
          <div className="w-full flex justify-between xl:justify-center items-center h-[82px] px-10 gap-32">
            <div className="flex justify-center items-center mt-2">
              <div className="logo_container h-full w-[150px]">
                <img src={genesis_logo} alt="Genesis Logo" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="xl:flex hidden">
              <ul className="flex text-[20px] font-medium font-poppins xl:gap-8 2xl:gap-28">
                <li className="relative text-blue-500">
                  Home
                  <span className="absolute left-0 bottom-[-27px] w-full h-[5px] bg-blue-500"></span>
                </li>
                {["Solution", "Services", "Our Work", "News", "Career"].map((item) => (
                  <li key={item} className="relative text-black group">
                    {item}
                    <span className="absolute left-0 bottom-[-27px] w-0 h-[5px] bg-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="xl:hidden" onClick={toggleMenu}>
              <div className="flex flex-col space-y-1 cursor-pointer mr-7">
                <div className={`w-7 h-[2px] bg-black transition-transform ${isMenuOpen ? "rotate-[-50deg] translate-y-[6px]" : ""}`} />
                <div className={`w-7 h-[2px] bg-black transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
                <div className={`w-7 h-[2px] bg-black transition-transform ${isMenuOpen ? "rotate-[50deg] -translate-y-[6px]" : ""}`} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu when hamburger is clicked */}
      {/* Sidebar Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-50"
          onClick={toggleMenu}
        >
          {/* Sidebar Container */}
          <div
            className="bg-white w-[280px] h-full p-6 shadow-lg overflow-scroll 2xl:hidden"
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
          >
            {/* Sidebar Menu */}
            <ul className="flex flex-col text-[16px] font-medium">
              <li className="py-4 text-blue-500 font-semibold border-b-[1px] border-gray-200">Home</li>
              <li className="py-4 text-black border-b-[1px] border-gray-200">About Us</li>

              {/* Services with dropdown */}
              <li className="py-4 text-black flex justify-between items-center border-b-[1px] border-gray-200 cursor-pointer"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <span>
                  <RiArrowDropDownLine className={`size-8 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </span>
              </li>

              {/* Dropdown Items */}
              {isServicesOpen && (
                <ul className="bg-white">
                  <li className="py-2 px-4 hover:bg-gray-100">Fire Alarm System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Fire Fighting System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Fire Suppression</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Emergency Exit Light System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Central Battery System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Voice Evacuation </li>
                  <li className="py-2 px-4 hover:bg-gray-100">FM 200 System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Kitchen Hood System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Aerosol System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Fire Hydrant System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Fire Pump System</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Sprinkler System</li>
                </ul>
              )}


              <li className="py-4 text-black border-b-[1px] border-gray-200">Certificate</li>

              {/* Projects with dropdown */}
              <li className="py-4 text-black flex justify-between items-center border-b-[1px] border-gray-200 cursor-pointer"
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}
              >
                Projects
                <span>
                  <RiArrowDropDownLine className={`size-8 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                </span>
              </li>

              {/* Dropdown Items */}
              {isProjectsOpen && (
                <ul className="bg-white">
                  <li className="py-2 px-4 font-semibold text-black flex items-center"> Dubai Cricket Stadium</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Onyx Tower</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Prism Tower</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Jumeirah Heights</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Jumeirah Golf Estate</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Al Andalus Towers</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Crystal Residence</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Astoria Residence</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Grandeur Residence</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Liwa Heights</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Majestic Tower</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Mikanaz Plaza</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Regal Tower</li>
                  <li className="py-2 px-4 hover:bg-gray-100">S Hotel</li>
                </ul>
              )}


              <li className="py-4 text-black border-b-[1px] border-gray-200">Clients</li>
              <li className="py-4 text-black border-b-[1px] border-gray-200">Careers</li>
              <li className="py-4 text-black border-b-[1px] border-gray-200">Contact Us</li>
            </ul>

            {/* Support Button */}
            <div className="flex justify-center items-center">
              <div className="relative w-[250px]">
                <button className="w-full flex items-center justify-center gap-3 py-4 px-6 text-black font-bold text-lg rounded-lg bg-gradient-to-r from-blue-300 via-white to-blue-300 shadow-gray-200 shadow-md">
                  📄 24 / 7 Support
                </button>
              </div>
            </div>
          </div>
        </div>
      )}





      {/* Main Navbar */}
      <nav ref={mainNavRef} className="flex items-center justify-between w-full xl:h-[200px] bg-white relative main_nav">
        <div className="flex xl:items-center items-start pl-10 xl:pl-30 p-3 2xl:pl-42 w-1/2">
          <div className="logo_container w-[150px] h-[55px] xl:w-[300px] xl:h-[200px]">
            <img src={genesis_logo} alt="Genesis Logo" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="bg-black text-white hidden xl:flex items-center pl-32 gap-12 w-1/2 px-16 py-5 h-full absolute right-0 clip-path-custom">
          <div className="info_container w-full h-[150px] flex flex-row justify-start ">
            <div className="info h-full w-[300px]  flex flex-row items-center gap-4">
              <div className="icon">
                <img src={telephone} alt="Telephone Icon" className="h-[35px] w-[35px]" />
              </div>
              <div className="text text-[15px]">
                <span className="font-bold font-poppins">Call Us</span>
                <p>+880 13445 72020</p>
                <p>+880 13445 75205</p>
              </div>
            </div>

            <div className="info h-full w-[300px] flex flex-row items-center gap-4">
              <div className="icon">
                <img src={email} alt="Email Icon" className="h-[35px] w-[35px]" />
              </div>
              <div className="text text-[15px] font-poppins">
                <span className="font-bold font-poppins">Drop Us an Email</span>
                <p>tanvirahmed@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="xl:hidden" onClick={toggleMenu}>
          <div className="flex flex-col space-y-1 cursor-pointer mr-7">
            <div className={`w-7 h-[2px] bg-black transition-transform ${isMenuOpen ? "rotate-[-50deg] translate-y-[6px]" : ""}`} />
            <div className={`w-7 h-[2px] bg-black transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
            <div className={`w-7 h-[2px] bg-black transition-transform ${isMenuOpen ? "rotate-[50deg] -translate-y-[6px]" : ""}`} />
          </div>
        </div>

        {/* Main Navbar Links */}
        <div className="bg-white absolute xl:left-[18%]  2xl:left-[15%] top-[74%] shadow-[0px_2px_4px_0px_rgba(14,30,37,0.12),0px_2px_16px_0px_rgba(14,30,37,0.32)] rounded-md w-4/6 hidden xl:flex justify-between items-center h-[67px] mt-5 z-100">
          <ul className="flex pl-10 text-[18px] font-medium font-poppins xl:gap-8 2xl:gap-8">
            {["Home", "About", "Services", "Our Work", "News", "Career"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              const isActive = location.pathname === path || (item === "Home" && location.pathname === "/");

              return (
                <li
                  key={item}
                  className={`relative group cursor-pointer ${isActive ? "text-blue-500" : "text-black"}`}
                  onMouseEnter={() => {
                    if (item === "Services") setIsServicesOpen(true);
                    if (item === "Our Work") setIsProjectsOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item === "Services") setIsServicesOpen(false);
                    if (item === "Our Work") setIsProjectsOpen(false);
                  }}
                >
                  {["About", "News", "Career"].includes(item) || item === "Home" ? (
                    <Link to={path} className="flex items-center gap-1">
                      {item}
                    </Link>
                  ) : (
                    <div className="flex items-center gap-1">
                      {item}
                      {(item === "Services" || item === "Our Work") && (
                        <span>
                          <RiArrowDropDownLine
                            className={`size-8 transition-transform ${(item === "Services" && isServicesOpen) || (item === "Our Work" && isProjectsOpen)
                              ? "rotate-180"
                              : ""
                              }`}
                          />
                        </span>
                      )}
                    </div>
                  )}

                  {/* Active Tab Underline */}
                  <span
                    className={`absolute left-0 bottom-[-19px] h-[5px] bg-blue-500 transition-all duration-300 ease-in-out ${isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  ></span>

                  {/* Dropdown for Services */}
                  {item === "Services" && isServicesOpen && (
                    <ul className="absolute left-0 top-full mt-5 bg-white shadow-md rounded-lg w-[500px] p-4">
                      {[
                        "Fire Alarm System",
                        "Fire Fighting System",
                        "Fire Suppression",
                        "Emergency Exit Light System",
                        "Central Battery System",
                        "Voice Evacuation & Fire Man Telephone System",
                        "FM 200 System",
                        "Kitchen Hood System",
                        "Aerosol System",
                        "Fire Hydrant System",
                        "Fire Pump System",
                        "Sprinkler System",
                      ].map((service, index) => (
                        <li key={index} className="py-2 px-4 flex items-center cursor-pointer group">
                          <div className="group-hover:inline-block transition-all duration-300 ease-in-out transform group-hover:translate-x-2">
                            <span className="text-blue-500 hidden mr-2 hover:inline-block opacity-0 group-hover:opacity-100">
                              ➜
                            </span>
                          </div>
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Dropdown for Our Work */}
                  {item === "Our Work" && isProjectsOpen && (
                    <ul className="absolute left-0 top-full mt-5 bg-white shadow-lg rounded-lg w-[500px] p-4">
                      {[
                        "Dubai Cricket Stadium",
                        "Onyx Tower",
                        "Prism Tower",
                        "Jumeirah Heights",
                        "Jumeirah Golf Estate",
                        "Al Andalus Towers",
                        "Crystal Residence",
                        "Astoria Residence",
                        "Grandeur Residence",
                        "Liwa Heights",
                        "Majestic Tower",
                        "Mikanaz Plaza",
                        "Regal Tower",
                        "S Hotel",
                      ].map((project, index) => (
                        <li key={index} className="py-2 px-4 flex items-center group cursor-pointer">
                          <span className="text-blue-500 mr-2 opacity-0 hidden -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            ➜
                          </span>
                          {project}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          <button className="relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-600 text-white px-6 h-full xl:w-[250px] 2xl:w-[318px] py-5 rounded-md font-semibold hover:opacity-90 transition duration-300 group">
            24/7 Contact Us
            <span className="absolute top-[-500%] left-[-10%] bottom-[80%] w-[25px] h-[600px] bg-white rotate-45 transition-all duration-300 group-hover:h-full group-hover:w-[25px] group-hover:top-[100%] group-hover:left-[100%] border-none"></span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
