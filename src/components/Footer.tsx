import { Link } from 'wouter';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Leadforgee</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in generating high-quality leads that drive business growth and success.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/prakhyat-gupta-b1622a320" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/Leadforgee" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="16"
                  height="16"
                  role="img"
                  aria-label="X social media icon"
                >
                  <path d="M18.901 1.196h3.428L14.475 9.77 22.868 22.8h-7.387L9.96 14.547 3.632 22.8H.204l8.694-11.666L0 1.196h7.525L12.56 7.688l6.341-6.492Zm-2.863 19.543h2.38L6.877 3.42H4.376l11.662 17.319Z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/leadforgee/" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/#services" className="hover:text-white transition-colors">Cold Lead Generation</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Warm Lead Generation</a></li>
              <li>< a href="/#services" className="hover:text-white transition-colors">Combined Approach</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Outreach Automation</a></li>
              <li><a href="/#services" className="hover:text-white transition-colors">Content Creation</a></li>
            </ul>
          </div>

          {/* Company - right aligned */}
          <div className="md:col-start-3">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              {/* <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li> */}
              <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Leadforgee. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
