"use client"

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect, useRef } from "react";
import { LogIn } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
              className={`flex items-center font-medium ${activeDropdown === 'product' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Product
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'product' && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="p-4">
                  <Link href="#" className="block mb-4">
                    <div className="font-medium text-lg">Our Products</div>
                    <div className="text-sm text-gray-500">Discover PayUnit's payment solutions</div>
                  </Link>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Payment</div>
                      <div className="text-xs">Online Payment</div>
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Checkout</div>
                      <div className="text-xs">Pre-built payments page</div>
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Payment Links</div>
                      <div className="text-xs">No-code payment</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('useCases')}
              className={`flex items-center font-medium ${activeDropdown === 'useCases' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Use Cases
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'useCases' && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="p-4">
                  <Link href="#" className="block mb-4">
                    <div className="font-medium text-lg">Use Cases</div>
                    <div className="text-sm text-gray-500">Solutions for different business types</div>
                  </Link>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Ecommerce</div>
                      <div className="text-xs">Online Payment</div>
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">SaaS</div>
                      <div className="text-xs">Pre-built payments page</div>
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Marketplaces</div>
                      <div className="text-xs">No-code payment</div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('learn')}
              className={`flex items-center font-medium ${activeDropdown === 'learn' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Learn
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'learn' && (
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="p-4">
                  <Link href="#" className="block mb-4">
                    <div className="font-medium text-lg">Learn</div>
                    <div className="text-sm text-gray-500">Resources to help you get the most from PayUnit</div>
                  </Link>
                  
                  <div className="grid grid-cols-1 gap-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Help Center</div>
                      <div className="text-xs">Contact us for any isssues you have</div>
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-600 hover:text-white rounded-md">
                      <div className="font-medium">Blog</div>
                      <div className="text-xs">Read our feed on how to best use PayUnit</div>
                    </Link>
                    <div className="px-4 py-2">
                      <Link href="#" className="inline-flex items-center border hover:border-teal-600 hover:text-teal-600 hover:bg-white px-4 py-1 rounded-md text-sm bg-teal-600 text-white">
                        Go To Learn
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative px-3">
            <button 
              onClick={() => toggleDropdown('developer')}
              className={`flex items-center font-medium ${activeDropdown === 'developer' ? 'text-white bg-teal-600 px-3 py-2 rounded' : 'text-gray-800 hover:text-teal-600'}`}
            >
              Developer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'developer' && (
              <div className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg py-2 z-50">
                <div className="p-4">
                  <Link href="#" className="block mb-4">
                    <div className="font-medium text-lg">Documentation</div>
                    <div className="text-sm text-gray-500">Start integrating Payunit's products and tools</div>
                  </Link>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-gray-900 uppercase text-xs font-semibold mb-2">GET STARTED</h4>
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Prebuilt checkout</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Libraries and SDKs</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Plugins</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Code samples</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-gray-900 uppercase text-xs font-semibold mb-2">GUIDES</h4>
                      <ul className="space-y-2">
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Accept online payments</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Add More provider</Link></li>
                        <li><Link href="#" className="text-sm text-gray-700 hover:text-teal-600 rounded-md block px-2 py-1 hover:bg-gray-50">Create an payment link</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="relative px-3">
            <Link href="#" className="text-gray-800 hover:text-teal-600 font-medium">
              Pricing
            </Link>
          </div>
        </div>
        
        {/* Desktop Call to Action Buttons */}
        <div className="hidden md:flex items-center">
          <Button className="bg-teal-600 text-white hover:bg-teal-700 px-4 py-2 h-auto rounded flex items-center">
            Sign In <LogIn className="ml-1 h-4 w-4" />
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="text-gray-600 hover:text-teal-600"
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
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => toggleDropdown('product')}
              className="flex justify-between items-center w-full py-2 text-gray-800"
            >
              <span>Product</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${activeDropdown === 'product' ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'product' && (
              <div className="pl-4 py-2 space-y-2">
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Payment</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Checkout</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Payment Links</Link>
              </div>
            )}
            
            <button 
              onClick={() => toggleDropdown('useCases')}
              className="flex justify-between items-center w-full py-2 text-gray-800"
            >
              <span>Use Cases</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${activeDropdown === 'useCases' ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'useCases' && (
              <div className="pl-4 py-2 space-y-2">
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Ecommerce</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">SaaS</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Marketplaces</Link>
              </div>
            )}
            
            <button 
              onClick={() => toggleDropdown('learn')}
              className="flex justify-between items-center w-full py-2 text-gray-800"
            >
              <span>Learn</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${activeDropdown === 'learn' ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'learn' && (
              <div className="pl-4 py-2 space-y-2">
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Help Center</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Blog</Link>
              </div>
            )}
            
            <button 
              onClick={() => toggleDropdown('developer')}
              className="flex justify-between items-center w-full py-2 text-gray-800"
            >
              <span>Developer</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform ${activeDropdown === 'developer' ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {activeDropdown === 'developer' && (
              <div className="pl-4 py-2 space-y-2">
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Documentation</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Prebuilt checkout</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Libraries and SDKs</Link>
                <Link href="#" className="block py-1 px-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-gray-50 rounded-md">Plugins</Link>
              </div>
            )}
            
            <Link href="#" className="block py-2 text-gray-800">Pricing</Link>
            
            <div className="pt-4 pb-2 border-t border-gray-200">
              <Button className="w-full justify-center bg-teal-600 text-white hover:bg-teal-700 py-2 h-auto rounded flex items-center">
                Sign In <LogIn className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 