import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import genesis_logo from "../assets/images/genesis_logo.png";
import location from '../assets/icons/location.svg';
import email from '../assets/icons/Email.svg';
import phone from '../assets/icons/phone.svg';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#001524] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6 ">
            <div className="relative w-[200px] h-[52px]">
              <img
                src={genesis_logo}
                alt="Genesis Technologies Ltd"
                className="object-contain w-full h-auto bg-white"
              />
            </div>
            <p className="text-gray-300 text-[24px] leading-relaxed pt-5">
              Genesis Technologies Ltd. provides trusted fire, safety, and security solutions with 12+ years of
              expertise and ISO 9001:2015 certification, offering complete design, installation, and support services.
            </p>
          </div>

          {/* Navigation */}
          <div className="ml-10">
            <h3 className="text-[34px] font-bold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["Home", "Services", "Project", "News", "About Us", "404"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors text-[24px]">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[34px] font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img src={location} alt="Location Icon" className="w-6 h-6" />
                <p className="text-gray-300 text-[24px]">
                  123 Oak Street Cityville,
                  <br />
                  State 98765 USA
                </p>
              </div>

              <div className="flex items-center space-x-3">
                <img src={email} alt="Email Icon" className="w-6 h-6" />
                <a href="mailto:hello@mate.com" className="text-gray-300 hover:text-white text-[24px]">
                  hello@mate.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <img src={phone} alt="Phone Icon" className="w-6 h-6" />
                <a href="tel:+6281234567" className="text-gray-300 hover:text-white">
                  +62 8123 4567
                </a>
              </div>

            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[34px] font-bold mb-6">Follow us</h3>
            <div className="flex space-x-4">
              {[
                { Icon: FaLinkedin, href: "#" },
                { Icon: FaFacebook, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaInstagram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#00A6FB] hover:bg-[#00A6FB] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#00A6FB]/20 mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-[24px]">© 2024 Genesis All rights reserved.</p>
          <p className="text-gray-400 text-[24px] mt-2 md:mt-0">
            Designed by{" "}
            <a href="#" className="text-[#00A6FB] hover:underline text-[24px]">
              Goinnovoir Limited
            </a>
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;

