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

  // Helper function to determine if a path is active
  const isServicePage = location.pathname.includes("/fire-") ||
    location.pathname.includes("/emergency-") ||
    location.pathname.includes("/central-") ||
    location.pathname.includes("/voice-") ||
    location.pathname.includes("/kitchen-") ||
    location.pathname.includes("/aerosol-") ||
    location.pathname.includes("/fm-200") ||
    location.pathname.includes("/sprinkler-") ||
    location.pathname.includes("/fire-hydrant") ||
    location.pathname.includes("/fire-pump");

  const isWorkPage = location.pathname.includes("/dubai-") ||
    location.pathname.includes("/onyx-") ||
    location.pathname.includes("/prism-") ||
    location.pathname.includes("/jumeirah-") ||
    location.pathname.includes("/al-andalus-") ||
    location.pathname.includes("/crystal-") ||
    location.pathname.includes("/astoria-") ||
    location.pathname.includes("/grandeur-") ||
    location.pathname.includes("/liwa-") ||
    location.pathname.includes("/majestic-") ||
    location.pathname.includes("/mikanaz-") ||
    location.pathname.includes("/regal-") ||
    location.pathname.includes("/s-hotel");

  return (
    <>
      {/* Secondary Navbar */}
      {showSecondaryNavbar && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 animate-slide-down">
          <div className="w-full flex justify-between xl:justify-center items-center h-[82px] px-10 gap-32">
            <div className="flex justify-center items-center mt-2">
              <div className="logo_container h-full w-[150px]">
                <img src={genesis_logo || "/placeholder.svg"} alt="Genesis Logo" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* <div className="xl:flex hidden">
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
            </div> */}
            <div className="xl:flex hidden">
              <ul className="flex pl-10 text-[18px] font-medium font-poppins xl:gap-8 2xl:gap-8">
                {["Home", "About", "Services", "Our Work", "News", "Career"].map((item) => {
                  const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;

                  const isActive =
                    (item === "Home" && location.pathname === "/") ||
                    (item === "About" && location.pathname === "/about") ||
                    (item === "Services" && isServicePage) ||
                    (item === "Our Work" && isWorkPage) ||
                    (item === "News" && location.pathname === "/news") ||
                    (item === "Career" && location.pathname === "/career");

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
                            { name: "Fire Alarm System", path: "/fire-alarm-system" },
                            { name: "Fire Fighting System", path: "/fire-fighting-system" },
                            { name: "Fire Suppression", path: "/fire-suppression" },
                            { name: "Emergency Exit Light System", path: "/emergency-exit-light-system" },
                            { name: "Central Battery System", path: "/central-battery-system" },
                            { name: "Voice Evacuation & Fire Man Telephone System", path: "/voice-evacuation" },
                            { name: "FM 200 System", path: "/fm-200-system" },
                            { name: "Kitchen Hood System", path: "/kitchen-hood-system" },
                            { name: "Aerosol System", path: "/aerosol-system" },
                            { name: "Fire Hydrant System", path: "/fire-hydrant-system" },
                            { name: "Fire Pump System", path: "/fire-pump-system" },
                            { name: "Sprinkler System", path: "/sprinkler-system" },
                          ].map((service, index) => (
                            <li key={index} className="py-2 px-4 flex items-center cursor-pointer group">
                              <Link
                                to={service.path}
                                className={`w-full ${location.pathname === service.path ? "text-blue-500 font-semibold" : ""}`}
                              >
                                <span className="text-blue-500 hidden mr-2 group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-300">
                                  ➜
                                </span>
                                {service.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item === "Our Work" && isProjectsOpen && (
                        <ul className="absolute left-0 top-full mt-5 bg-white shadow-lg rounded-lg w-[500px] p-4">
                          {[
                            { name: "Dubai Cricket Stadium", path: "/dubai-cricket-stadium" },
                            { name: "Onyx Tower", path: "/onyx-tower" },
                            { name: "Prism Tower", path: "/prism-tower" },
                            { name: "Jumeirah Heights", path: "/jumeirah-heights" },
                            { name: "Jumeirah Golf Estate", path: "/jumeirah-golf-estate" },
                            { name: "Al Andalus Towers", path: "/al-andalus-towers" },
                            { name: "Crystal Residence", path: "/crystal-residence" },
                            { name: "Astoria Residence", path: "/astoria-residence" },
                            { name: "Grandeur Residence", path: "/grandeur-residence" },
                            { name: "Liwa Heights", path: "/liwa-heights" },
                            { name: "Majestic Tower", path: "/majestic-tower" },
                            { name: "Mikanaz Plaza", path: "/mikanaz-plaza" },
                            { name: "Regal Tower", path: "/regal-tower" },
                            { name: "SHotel", path: "/s-hotel" },
                          ].map((project, index) => (
                            <li key={index} className="py-2 px-4 flex items-center group cursor-pointer">
                              <Link
                                to={project.path}
                                className={`w-full ${location.pathname === project.path ? "text-blue-500 font-semibold" : ""}`}
                              >
                                {project.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                    </li>
                  );
                })}
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
              <li className={`py-4 ${location.pathname === "/" ? "text-blue-500 font-semibold" : "text-black"} border-b-[1px] border-gray-200`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`py-4 ${location.pathname === "/about" ? "text-blue-500 font-semibold" : "text-black"} border-b-[1px] border-gray-200`}>
                <Link to="/about">About</Link>
              </li>

              {/* Services with dropdown */}
              <li className={`py-4 ${isServicePage ? "text-blue-500 font-semibold" : "text-black"} flex justify-between items-center border-b-[1px] border-gray-200 cursor-pointer`}
                onClick={() => setIsServicesOpen(!isServicesOpen)}>
                Services
                <span>
                  <RiArrowDropDownLine className={`size-8 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </span>
              </li>
              {isServicesOpen && (
                <ul className="bg-white">
                  {[
                    { name: "Fire Alarm System", path: "/fire-alarm-system" },
                    { name: "Fire Fighting System", path: "/fire-fighting-system" },
                    { name: "Fire Suppression", path: "/fire-suppression" },
                    { name: "Emergency Exit Light System", path: "/emergency-exit-light-system" },
                    { name: "Central Battery System", path: "/central-battery-system" },
                    { name: "Voice Evacuation", path: "/voice-evacuation" },
                    { name: "FM 200 System", path: "/fm-200-system" },
                    { name: "Kitchen Hood System", path: "/kitchen-hood-system" },
                    { name: "Aerosol System", path: "/aerosol-system" },
                    { name: "Fire Hydrant System", path: "/fire-hydrant-system" },
                    { name: "Fire Pump System", path: "/fire-pump-system" },
                    { name: "Sprinkler System", path: "/sprinkler-system" }
                  ].map((service, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100">
                      <Link
                        to={service.path}
                        className={`${location.pathname === service.path ? "text-blue-500 font-semibold" : ""}`}
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <li className={`py-4 ${location.pathname === "/certificate" ? "text-blue-500 font-semibold" : "text-black"} border-b-[1px] border-gray-200`}>
                <Link to="/certificate">Certificate</Link>
              </li>

              {/* Projects with dropdown */}
              <li className={`py-4 ${isWorkPage ? "text-blue-500 font-semibold" : "text-black"} flex justify-between items-center border-b-[1px] border-gray-200 cursor-pointer`}
                onClick={() => setIsProjectsOpen(!isProjectsOpen)}>
                Our Work
                <span>
                  <RiArrowDropDownLine className={`size-8 transition-transform ${isProjectsOpen ? "rotate-180" : ""}`} />
                </span>
              </li>
              {isProjectsOpen && (
                <ul className="bg-white">
                  {[
                    { name: "Dubai Cricket Stadium", path: "/our-work/dubai-cricket-stadium" },
                    { name: "Onyx Tower", path: "/our-work/onyx-tower" },
                    { name: "Prism Tower", path: "/prism-tower" },
                    { name: "Jumeirah Heights", path: "/jumeirah-heights" },
                    { name: "Jumeirah Golf Estate", path: "/jumeirah-golf-estate" },
                    { name: "Al Andalus Towers", path: "/al-andalus-towers" },
                    { name: "Crystal Residence", path: "/crystal-residence" },
                    { name: "Astoria Residence", path: "/astoria-residence" },
                    { name: "Grandeur Residence", path: "/grandeur-residence" },
                    { name: "Liwa Heights", path: "/liwa-heights" },
                    { name: "Majestic Tower", path: "/majestic-tower" },
                    { name: "Mikanaz Plaza", path: "/mikanaz-plaza" },
                    { name: "Regal Tower", path: "/regal-tower" },
                    { name: "SHotel", path: "/s-hotel" }
                  ].map((project, index) => (
                    <li key={index} className="py-2 px-4 hover:bg-gray-100">
                      <Link
                        to={project.path}
                        className={`${location.pathname === project.path ? "text-blue-500 font-semibold" : ""}`}
                      >
                        {project.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <li className={`py-4 ${location.pathname === "/news" ? "text-blue-500 font-semibold" : "text-black"} border-b-[1px] border-gray-200`}>
                <Link to="/news">News</Link>
              </li>
              <li className={`py-4 ${location.pathname === "/career" ? "text-blue-500 font-semibold" : "text-black"} border-b-[1px] border-gray-200`}>
                <Link to="/career">Careers</Link>
              </li>
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
            <img src={genesis_logo || "/placeholder.svg"} alt="Genesis Logo" className="h-full w-full object-contain" />
          </div>
        </div>

        <div className="bg-black text-white hidden xl:flex items-center pl-32 gap-12 w-1/2 px-16 py-5 h-full absolute right-0 clip-path-custom">
          <div className="info_container w-full h-[150px] flex flex-row justify-start ">
            <div className="info h-full w-[300px]  flex flex-row items-center gap-4">
              <div className="icon">
                <img src={telephone || "/placeholder.svg"} alt="Telephone Icon" className="h-[35px] w-[35px]" />
              </div>
              <div className="text text-[15px]">
                <span className="font-bold font-poppins">Call Us</span>
                <p>+880 13445 72020</p>
                <p>+880 13445 75205</p>
              </div>
            </div>

            <div className="info h-full w-[300px] flex flex-row items-center gap-4">
              <div className="icon">
                <img src={email || "/placeholder.svg"} alt="Email Icon" className="h-[35px] w-[35px]" />
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

              const isActive =
                (item === "Home" && location.pathname === "/") ||
                (item === "About" && location.pathname === "/about") ||
                (item === "Services" && isServicePage) ||
                (item === "Our Work" && isWorkPage) ||
                (item === "News" && location.pathname === "/news") ||
                (item === "Career" && location.pathname === "/career");

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
                        { name: "Fire Alarm System", path: "/fire-alarm-system" },
                        { name: "Fire Fighting System", path: "/fire-fighting-system" },
                        { name: "Fire Suppression", path: "/fire-suppression" },
                        { name: "Emergency Exit Light System", path: "/emergency-exit-light-system" },
                        { name: "Central Battery System", path: "/central-battery-system" },
                        { name: "Voice Evacuation & Fire Man Telephone System", path: "/voice-evacuation" },
                        { name: "FM 200 System", path: "/fm-200-system" },
                        { name: "Kitchen Hood System", path: "/kitchen-hood-system" },
                        { name: "Aerosol System", path: "/aerosol-system" },
                        { name: "Fire Hydrant System", path: "/fire-hydrant-system" },
                        { name: "Fire Pump System", path: "/fire-pump-system" },
                        { name: "Sprinkler System", path: "/sprinkler-system" },
                      ].map((service, index) => (
                        <li key={index} className="py-2 px-4 flex items-center cursor-pointer group">
                          <Link
                            to={service.path}
                            className={`w-full ${location.pathname === service.path ? "text-blue-500 font-semibold" : ""}`}
                          >
                            <span className="text-blue-500 hidden mr-2 group-hover:inline-block opacity-0 group-hover:opacity-100 transition-all duration-300">
                              ➜
                            </span>
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item === "Our Work" && isProjectsOpen && (
                    <ul className="absolute left-0 top-full mt-5 bg-white shadow-lg rounded-lg w-[500px] p-4">
                      {[
                        { name: "Dubai Cricket Stadium", path: "/dubai-cricket-stadium" },
                        { name: "Onyx Tower", path: "/onyx-tower" },
                        { name: "Prism Tower", path: "/prism-tower" },
                        { name: "Jumeirah Heights", path: "/jumeirah-heights" },
                        { name: "Jumeirah Golf Estate", path: "/jumeirah-golf-estate" },
                        { name: "Al Andalus Towers", path: "/al-andalus-towers" },
                        { name: "Crystal Residence", path: "/crystal-residence" },
                        { name: "Astoria Residence", path: "/astoria-residence" },
                        { name: "Grandeur Residence", path: "/grandeur-residence" },
                        { name: "Liwa Heights", path: "/liwa-heights" },
                        { name: "Majestic Tower", path: "/majestic-tower" },
                        { name: "Mikanaz Plaza", path: "/mikanaz-plaza" },
                        { name: "Regal Tower", path: "/regal-tower" },
                        { name: "SHotel", path: "/s-hotel" },
                      ].map((project, index) => (
                        <li key={index} className="py-2 px-4 flex items-center group cursor-pointer">
                          <Link
                            to={project.path}
                            className={`w-full ${location.pathname === project.path ? "text-blue-500 font-semibold" : ""}`}
                          >
                            {project.name}
                          </Link>
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