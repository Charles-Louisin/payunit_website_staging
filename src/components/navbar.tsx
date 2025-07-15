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
  const dropdownTimerRef = useRef<{ [key: string]: NodeJS.Timeout }>({});
  const mobileButtonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({
    product: null,
    useCases: null,
    learn: null,
    developer: null
  });
  const [isProcessingClick, setIsProcessingClick] = useState(false);

  // Close dropdown when clicking outside (only for mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= 768) return; // Only handle clicks for mobile
      
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

  // Handle hover for desktop dropdowns
  const handleDropdownHover = (dropdown: string | null) => {
    if (window.innerWidth < 768) return; // Only handle hover for desktop

    // Clear any existing timers for this dropdown
    Object.keys(dropdownTimerRef.current).forEach(key => {
      clearTimeout(dropdownTimerRef.current[key]);
      delete dropdownTimerRef.current[key];
    });

    if (dropdown) {
      // Open immediately on hover
      setActiveDropdown(dropdown);
    } else {
      // Add a small delay before closing
      dropdownTimerRef.current['close'] = setTimeout(() => {
        setActiveDropdown(null);
      }, 100); // 100ms delay before closing
    }
  };

  // Handle mouse enter on dropdown content
  const handleDropdownContentHover = () => {
    if (window.innerWidth < 768) return;
    
    // Clear closing timer if it exists
    if (dropdownTimerRef.current['close']) {
      clearTimeout(dropdownTimerRef.current['close']);
      delete dropdownTimerRef.current['close'];
    }
  };

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
      y: -2,
      scale: 0.98,
      transition: { 
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  };

  // Mobile menu animation variants
  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: { 
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1,
      height: "auto",
      transition: { 
        duration: 0.3,
        ease: [0, 0, 0.2, 1]
      }
    }
  };

  // Hover animation for dropdown items
  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: -4,
      transition: { 
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: { 
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.2,
        ease: [0, 0, 0.2, 1]
      }
    }
  };

  // Stagger children animation
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0,
      transition: { 
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const renderProductDropdown = () => (
    <motion.div 
      className="p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="#" className="block mb-4 group">
          <div className="font-medium text-lg text-gray-900 group-hover:text-teal-600 transition-colors">Our Products</div>
          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Discover PayUnit's payment solutions</div>
      </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-2">
        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">💳</span>
              Payment
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Online Payment</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">🛍️</span>
              Checkout
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Pre-built payments page</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">🔗</span>
              Payment Links
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">No-code payment</div>
        </Link>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderUseCasesDropdown = () => (
    <motion.div 
      className="p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="#" className="block mb-4 group">
          <div className="font-medium text-lg text-gray-900 group-hover:text-teal-600 transition-colors">Use Cases</div>
          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Solutions for different business types</div>
      </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-2">
        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">🛒</span>
              Ecommerce
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Online stores and retail</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">⚡</span>
              SaaS
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Software and services</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">🏪</span>
              Marketplaces
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Multi-vendor platforms</div>
        </Link>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderLearnDropdown = () => (
    <motion.div 
      className="p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="#" className="block mb-4 group">
          <div className="font-medium text-lg text-gray-900 group-hover:text-teal-600 transition-colors">Learn</div>
          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Resources to help you get the most from PayUnit</div>
      </Link>
      </motion.div>
      
      <div className="grid grid-cols-1 gap-2">
        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">💡</span>
              Help Center
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Contact us for any issues you have</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Link href="#" className="block px-4 py-3 text-sm rounded-lg hover:bg-teal-50/80 transition-all duration-200 group">
            <div className="font-medium text-gray-900 group-hover:text-teal-600 flex items-center">
              <span className="mr-2">📝</span>
              Blog
            </div>
            <div className="text-xs text-gray-500 group-hover:text-gray-600 ml-6">Read our feed on how to best use PayUnit</div>
        </Link>
        </motion.div>

        <motion.div variants={itemVariants}>
        <div className="px-4 py-2">
            <Link href="#" className="inline-flex items-center px-4 py-2 rounded-lg text-sm bg-teal-600 text-white hover:bg-teal-700 transition-all duration-200 group">
            Go To Learn
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderDeveloperDropdown = () => (
    <motion.div 
      className="p-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href="#" className="block mb-4 group">
          <div className="font-medium text-lg text-gray-900 group-hover:text-teal-600 transition-colors">Documentation</div>
          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors">Start integrating PayUnit's products and tools</div>
      </Link>
      </motion.div>
      
      <div className="grid grid-cols-2 gap-6">
        <motion.div variants={itemVariants}>
          <h4 className="text-gray-900 uppercase text-xs font-semibold mb-3 px-4">Get Started</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">🚀</span>
                Prebuilt checkout
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">📚</span>
                Libraries and SDKs
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">🔌</span>
                Plugins
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">💻</span>
                Code samples
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-gray-900 uppercase text-xs font-semibold mb-3 px-4">Guides</h4>
          <ul className="space-y-1">
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">💳</span>
                Accept online payments
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">➕</span>
                Add More provider
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center text-sm text-gray-600 hover:text-teal-600 rounded-lg px-4 py-2 hover:bg-teal-50/80 transition-all duration-200">
                <span className="mr-2">🔗</span>
                Create a payment link
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto px-4 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="relative group cursor-pointer">
            <Image 
              src="/images/logo payunit.png" 
              alt="PayUnit Logo" 
              width={120} 
              height={40}
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 flex-1 justify-center" ref={dropdownRef}>
          <div 
            className="relative px-2"
            onMouseEnter={() => handleDropdownHover('product')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button 
              className={`
                flex items-center text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 cursor-pointer
                ${activeDropdown === 'product' 
                  ? 'text-teal-700' 
                  : 'text-gray-600 hover:text-teal-600'
                }
              `}
            >
              Products
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'product' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-1 w-[320px] bg-white rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-lg backdrop-saturate-150 bg-white/95"
                  onMouseEnter={handleDropdownContentHover}
                  onMouseLeave={() => handleDropdownHover(null)}
                >
                  {renderProductDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Repeat similar changes for other nav items */}
          <div 
            className="relative px-2"
            onMouseEnter={() => handleDropdownHover('useCases')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button 
              className={`
                flex items-center text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 cursor-pointer
                ${activeDropdown === 'useCases' 
                  ? 'text-teal-700' 
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-100/50'
                }
              `}
            >
              Use Cases
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'useCases' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'useCases' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-1 w-[320px] bg-white rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-lg backdrop-saturate-150 bg-white/95"
                  onMouseEnter={handleDropdownContentHover}
                  onMouseLeave={() => handleDropdownHover(null)}
                >
                  {renderUseCasesDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="relative px-2"
            onMouseEnter={() => handleDropdownHover('learn')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button 
              className={`
                flex items-center text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 cursor-pointer
                ${activeDropdown === 'learn' 
                  ? 'text-teal-700' 
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-100/50'
                }
              `}
            >
              Learn
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'learn' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'learn' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-1 w-[320px] bg-white rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-lg backdrop-saturate-150 bg-white/95"
                  onMouseEnter={handleDropdownContentHover}
                  onMouseLeave={() => handleDropdownHover(null)}
                >
                  {renderLearnDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div 
            className="relative px-2"
            onMouseEnter={() => handleDropdownHover('developer')}
            onMouseLeave={() => handleDropdownHover(null)}
          >
            <button 
              className={`
                flex items-center text-sm font-bold px-3 py-2 rounded-full transition-all duration-200 cursor-pointer
                ${activeDropdown === 'developer' 
                  ? 'text-teal-700' 
                  : 'text-gray-600 hover:text-teal-600 hover:bg-teal-100/50'
                }
              `}
            >
              Developers
              <svg 
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'developer' ? 'rotate-180' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            <AnimatePresence>
            {activeDropdown === 'developer' && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={dropdownVariants}
                  className="absolute top-full left-0 mt-1 w-[480px] bg-white rounded-xl shadow-lg border border-gray-100/50 backdrop-blur-lg backdrop-saturate-150 bg-white/95"
                  onMouseEnter={handleDropdownContentHover}
                  onMouseLeave={() => handleDropdownHover(null)}
                >
                  {renderDeveloperDropdown()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        
        {/* Sign In and Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="/signin" 
            className="group flex items-center text-sm font-medium text-gray-600 hover:text-teal-600 transition-all duration-300 cursor-pointer"
          >
            Sign in
            <LogIn className="w-4 h-4 ml-1 transition-all duration-300 group-hover:ml-2" />
          </Link>
          <Button className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 cursor-pointer flex items-center">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-0 h-4 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-600 hover:text-teal-600 transition-colors duration-200 cursor-pointer"
          >
            {isMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
      </div>
      
        {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
              className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden mobile-menu"
          >
              <div className="px-4 py-2 space-y-1">
                <button 
                  onClick={() => handleMobileMenuClick('product')}
                  className="w-full text-left px-3 py-2 text-sm font-bold text-gray-600 hover:text-teal-600 hover:bg-teal-100/50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Products
                </button>
                {activeMobileDropdown === 'product' && renderProductDropdown()}

                <button 
                  onClick={() => handleMobileMenuClick('useCases')}
                  className="w-full text-left px-3 py-2 text-sm font-bold text-gray-600 hover:text-teal-600 hover:bg-teal-100/50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Use Cases
                </button>
                {activeMobileDropdown === 'useCases' && renderUseCasesDropdown()}

                <button 
                  onClick={() => handleMobileMenuClick('learn')}
                  className="w-full text-left px-3 py-2 text-sm font-bold text-gray-600 hover:text-teal-600 hover:bg-teal-100/50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Learn
                </button>
                {activeMobileDropdown === 'learn' && renderLearnDropdown()}

                <button 
                  onClick={() => handleMobileMenuClick('developer')}
                  className="w-full text-left px-3 py-2 text-sm font-bold text-gray-600 hover:text-teal-600 hover:bg-teal-100/50 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  Developers
                </button>
                {activeMobileDropdown === 'developer' && renderDeveloperDropdown()}

                <div className="pt-4 pb-2 border-t border-gray-100">
                  <Link
                    href="/signin"
                    className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 transition-all duration-300 cursor-pointer"
                  >
                    Sign in
                    <LogIn className="w-4 h-4 ml-1 transition-all duration-300 group-hover:ml-2" />
              </Link>
                  <Button className="group w-full mt-2 bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center">
                    Contact Us
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-0 h-4 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
} 