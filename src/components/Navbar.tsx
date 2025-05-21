import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import logoPath from '@/assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Check if the current route matches or if a section ID is in view
  const isActive = (path: string) => {
    if (path.startsWith('#') && location === '/') {
      return false; // Let's handle this with scroll detection instead
    }
    return location === path;
  };

  return (
    <header className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
          <img src={logoPath} alt="Leadforgee Logo" className="h-12 md:h-14" />
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-500 text-transparent bg-clip-text">
            Leadforgee
          </span>
        </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`nav-link text-gray-900 hover:text-primary transition-colors font-medium ${isActive('/') ? 'active' : ''}`}>
              Home
            </Link>
            <a href="/#services" className={`nav-link text-gray-900 hover:text-primary transition-colors font-medium`}>
              Services
            </a>
            <Link href="/about" className={`nav-link text-gray-900 hover:text-primary transition-colors font-medium ${isActive('/about') ? 'active' : ''}`}>
              About Us
            </Link>
            <a href="/#testimonials" className={`nav-link text-gray-900 hover:text-primary transition-colors font-medium`}>
              Testimonials
            </a>
            <Link href="/contact" className={`nav-link text-gray-900 hover:text-primary transition-colors font-medium ${isActive('/contact') ? 'active' : ''}`}>
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center">
            <a href="/#book-call" className="hidden md:block">
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-shadow">
                Book a Call
              </Button>
            </a>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-900 hover:text-primary"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-lg absolute w-full transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <Link href="/" className="block text-gray-900 hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>
          <a href="/#services" className="block text-gray-900 hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
            Services
          </a>
          <Link href="/about" className="block text-gray-900 hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
            About Us
          </Link>
          <a href="/#testimonials" className="block text-gray-900 hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
            Testimonials
          </a>
          <Link href="/contact" className="block text-gray-900 hover:text-primary font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
          <a href="/#book-call" className="block" onClick={() => setMobileMenuOpen(false)}>
            <Button className="gradient-bg w-full text-white px-5 py-2 rounded-full font-medium text-center">
              Book a Call
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
