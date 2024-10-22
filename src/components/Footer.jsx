const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 pb-8 border-b border-gray-700">
            {/* Company Column */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">About VISATHing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Media Library</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Business Network</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              </ul>
            </div>
  
            {/* Information Column */}
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Find VISA Requirements</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Embassies and Consulates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Explore Countries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Explore Visa Fees</a></li>
              </ul>
            </div>
  
            {/* Services Column */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Processing in Bangladesh</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">E-Visa Processing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Processing in India</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Document Legalization</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Visa Consultancy</a></li>
              </ul>
            </div>
  
            {/* Tools & Solutions Column */}
            <div>
              <h3 className="font-semibold mb-4">Tools & Solutions</h3>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-white">Checklist Builder</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Itinerary Generator</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Corporate Panel</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Book an Appointment</a></li>
              </ul>
            </div>
          </div>
  
          {/* Contact Information Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center py-8">
            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <p>Contact Us</p>
              <p>Email: <a href="mailto:cr@visathing.com" className="text-green-400">cr@visathing.com</a></p>
              <p>Phone: <a href="tel:+8801967777788" className="text-green-400">(+880) 1967 777 788</a></p>
              <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                {/* Social Media Icons */}
                <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
                <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
                <a href="#"><img src="/icons/whatsapp.svg" alt="WhatsApp" /></a>
                <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
                <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" /></a>
                <a href="#"><img src="/icons/youtube.svg" alt="YouTube" /></a>
                <a href="#"><img src="/icons/tiktok.svg" alt="TikTok" /></a>
                <a href="#"><img src="/icons/pinterest.svg" alt="Pinterest" /></a>
              </div>
            </div>
  
            {/* Office Locations */}
            <div className="mt-8 lg:mt-0 text-center lg:text-left">
              <h3 className="font-semibold">VISATHing Bangladesh</h3>
              <p>1st Floor, Homestead Gulshan Link Tower, DCC TA-99, Gulshan-Badda Link Road, Dhaka-1212</p>
              <a href="#" className="text-green-400">View Location</a>
            </div>
          </div>
  
          {/* Disclaimer Section */}
          <div className="grid lg:grid-cols-4 gap-8 pt-8 border-t border-gray-700">
            {/* Disclaimer */}
            <div className="lg:col-span-3 text-sm">
              <h3 className="font-semibold">Disclaimer</h3>
              <p className="text-gray-400">Due to the periodic changes of information/ requirements, VISATHing doesn't provide any confirmation, guarantee or representation...</p>
            </div>
  
            {/* We Accept Section */}
            <div className="text-center">
              <h3 className="font-semibold">We Accept</h3>
              <img src="/icons/payment-methods.png" alt="We Accept Payment Methods" className="mx-auto mt-4" />
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} VISATHing. All Rights Reserved.</p>
            <div className="space-x-4">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  