
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        scrolled ? 'bg-hollywood-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl font-playfair text-hollywood-gold">
              Hollywood<span className="text-hollywood-red">land</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/roteiros" className="text-white hover:text-hollywood-gold transition-colors">
            Roteiros
          </Link>
          <Link to="/elenco" className="text-white hover:text-hollywood-gold transition-colors">
            Elenco
          </Link>
          <Link to="/blog" className="text-white hover:text-hollywood-gold transition-colors">
            Blog
          </Link>
          <Link to="/contato" className="text-white hover:text-hollywood-gold transition-colors">
            Contato
          </Link>
          <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black">
            Login / Cadastro
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-hollywood-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link to="/roteiros" className="text-white hover:text-hollywood-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Roteiros
          </Link>
          <Link to="/elenco" className="text-white hover:text-hollywood-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Elenco
          </Link>
          <Link to="/blog" className="text-white hover:text-hollywood-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Blog
          </Link>
          <Link to="/contato" className="text-white hover:text-hollywood-gold transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>
            Contato
          </Link>
          <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black w-full">
            Login / Cadastro
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
