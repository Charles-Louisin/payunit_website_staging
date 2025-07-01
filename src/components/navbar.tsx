"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import { LogIn } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const mobileButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({
    product: null,
    useCases: null,
    learn: null,
    developer: null
  });
  const [isProcessingClick, setIsProcessingClick] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
      
      // Fermer le menu mobile si on clique en dehors de la navbar
      const navbar = document.querySelector('nav');
      const mobileMenu = document.querySelector('.mobile-menu');
      if (isMenuOpen && 
          navbar && 
          !navbar.contains(event.target as Node) && 
          mobileMenu && 
          !mobileMenu.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setActiveMobileDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  // Fonction simplifiée pour les menus mobiles
  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(activeMobileDropdown === dropdown ? null : dropdown);
  };

  // Fonction modifiée pour gérer les clics sur les menus mobiles avec un délai
  const handleMobileMenuClick = (dropdown: string) => {
    // Si un clic est déjà en cours de traitement, ignorer ce clic
    if (isProcessingClick) return;
    
    // Marquer qu'un clic est en cours de traitement
    setIsProcessingClick(true);
    
    // Logique pour ouvrir/fermer le menu
    if (activeMobileDropdown === dropdown) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(dropdown);
    }
    
    // Réinitialiser après un court délai pour éviter les clics multiples
    setTimeout(() => {
      setIsProcessingClick(false);
    }, 300); // 300ms de délai
  };

  // Animation variants
  const dropdownVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -5,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" as any }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" as any }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants: Variants = {
    hidden: { 
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" as any }
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as any }
    }
  };

  // Shared dropdown content for both desktop and mobile
  const renderProductDropdown = () => (
    <div className="p-4">
      <Link href="#" className="block mb-4">
        <div className="font-medium text-lg">Our Products</div>
        <div className="text-sm text-gray-500">Discover PayUnit's payment solutions</div>
      </Link>
      
      <div className="grid grid-cols-1 gap-2">
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Payment</div>
          <div className="text-xs">Online Payment</div>
        </Link>
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Checkout</div>
          <div className="text-xs">Pre-built payments page</div>
        </Link>
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Payment Links</div>
          <div className="text-xs">No-code payment</div>
        </Link>
      </div>
    </div>
  );

  const renderUseCasesDropdown = () => (
    <div className="p-4">
      <Link href="#" className="block mb-4">
        <div className="font-medium text-lg">Use Cases</div>
        <div className="text-sm text-gray-500">Solutions for different business types</div>
      </Link>
      
      <div className="grid grid-cols-1 gap-2">
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Ecommerce</div>
          <div className="text-xs">Online Payment</div>
        </Link>
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">SaaS</div>
          <div className="text-xs">Pre-built payments page</div>
        </Link>
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Marketplaces</div>
          <div className="text-xs">No-code payment</div>
        </Link>
      </div>
    </div>
  );

  const renderLearnDropdown = () => (
    <div className="p-4">
      <Link href="#" className="block mb-4">
        <div className="font-medium text-lg">Learn</div>
        <div className="text-sm text-gray-500">Resources to help you get the most from PayUnit</div>
      </Link>
      
      <div className="grid grid-cols-1 gap-2">
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Help Center</div>
          <div className="text-xs">Contact us for any isssues you have</div>
        </Link>
        <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors duration-200">
          <div className="font-medium">Blog</div>
          <div className="text-xs">Read our feed on how to best use PayUnit</div>
        </Link>
        <div className="px-4 py-2">
          <Link href="#" className="inline-flex items-center border border-teal-600 hover:bg-white px-4 py-1 rounded-md text-sm bg-teal-600 text-white hover:text-teal-600 transition-colors duration-200">
            Go To Learn
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );

  const renderDeveloperDropdown = () => (
    <div className="p-4">
      <Link href="#" className="block mb-4">
        <div className="font-medium text-lg">Documentation</div>
        <div className="text-sm text-gray-500">Start integrating Payunit's products and tools</div>
      </Link>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="text-gray-900 uppercase text-xs font-semibold mb-2">GET STARTED</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Prebuilt checkout</Link></li>
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Libraries and SDKs</Link></li>
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Plugins</Link></li>
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Code samples</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-gray-900 uppercase text-xs font-semibold mb-2">GUIDES</h4>
          <ul className="space-y-2">
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Accept online payments</Link></li>
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Add More provider</Link></li>
            <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50 transition-colors duration-200">Create an payment link</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <nav className="bg-white border-b border-gray-100 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image 
              src="/images/logo payunit.png" 
              alt="PayUnit Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1 flex-1 justify-center" ref={dropdownRef}>
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('product')}
              className={`flex items-center font-medium transition-colors duration-200 ${activeDropdown === 'product' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Product
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'product' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100"
                >
                  {renderProductDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('useCases')}
              className={`flex items-center font-medium transition-colors duration-200 ${activeDropdown === 'useCases' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Use Cases
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === 'useCases' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'useCases' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100"
                >
                  {renderUseCasesDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('learn')}
              className={`flex items-center font-medium transition-colors duration-200 ${activeDropdown === 'learn' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Learn
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === 'learn' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'learn' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100"
                >
                  {renderLearnDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('developer')}
              className={`flex items-center font-medium transition-colors duration-200 ${activeDropdown === 'developer' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Developer
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1 transition-transform duration-200 ${activeDropdown === 'developer' ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'developer' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100"
                >
                  {renderDeveloperDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="relative px-3">
            <Link href="#" className="text-gray-800 hover:text-teal-600 font-medium transition-colors duration-200">
              Pricing
            </Link>
          </div>
        </div>
        
        {/* Desktop Call to Action Buttons */}
        <div className="hidden md:flex items-center">
          <Button className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 h-auto rounded flex items-center transition-colors duration-200">
            Sign In <LogIn className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden mobile-menu"
          >
            <div className="px-4 py-2 space-y-3">
              {/* Product */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`w-full text-left font-medium py-2 px-3 rounded-md flex justify-between items-center ${activeMobileDropdown === 'product' ? 'bg-teal-50 text-teal-600' : 'bg-white text-gray-800'}`}
                  onClick={() => toggleMobileDropdown('product')}
                >
                  <span>Product</span>
                  {activeMobileDropdown === 'product' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {activeMobileDropdown === 'product' && (
                  <div className="mt-2 pl-2 py-2">
                    {renderProductDropdown()}
                  </div>
                )}
              </div>
              
              {/* Use Cases */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`w-full text-left font-medium py-2 px-3 rounded-md flex justify-between items-center ${activeMobileDropdown === 'useCases' ? 'bg-teal-50 text-teal-600' : 'bg-white text-gray-800'}`}
                  onClick={() => toggleMobileDropdown('useCases')}
                >
                  <span>Use Cases</span>
                  {activeMobileDropdown === 'useCases' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {activeMobileDropdown === 'useCases' && (
                  <div className="mt-2 pl-2 py-2">
                    {renderUseCasesDropdown()}
                  </div>
                )}
              </div>
              
              {/* Learn */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`w-full text-left font-medium py-2 px-3 rounded-md flex justify-between items-center ${activeMobileDropdown === 'learn' ? 'bg-teal-50 text-teal-600' : 'bg-white text-gray-800'}`}
                  onClick={() => toggleMobileDropdown('learn')}
                >
                  <span>Learn</span>
                  {activeMobileDropdown === 'learn' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {activeMobileDropdown === 'learn' && (
                  <div className="mt-2 pl-2 py-2">
                    {renderLearnDropdown()}
                  </div>
                )}
              </div>
              
              {/* Developer */}
              <div className="border-b border-gray-100 pb-2">
                <button 
                  className={`w-full text-left font-medium py-2 px-3 rounded-md flex justify-between items-center ${activeMobileDropdown === 'developer' ? 'bg-teal-50 text-teal-600' : 'bg-white text-gray-800'}`}
                  onClick={() => toggleMobileDropdown('developer')}
                >
                  <span>Developer</span>
                  {activeMobileDropdown === 'developer' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                
                {activeMobileDropdown === 'developer' && (
                  <div className="mt-2 pl-2 py-2">
                    {renderDeveloperDropdown()}
                  </div>
                )}
              </div>
              
              {/* Pricing */}
              <Link href="#" className="block py-2 text-gray-800 hover:text-teal-600 transition-colors duration-200 px-3">
                Pricing
              </Link>
              
              <div className="pt-4 pb-2 border-t border-gray-200">
                <Button className="w-full justify-center bg-teal-600 text-white hover:bg-teal-700 py-2 h-auto rounded flex items-center transition-colors duration-200">
                  Sign In <LogIn className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 