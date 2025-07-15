import React from 'react';
import { motion } from 'framer-motion';

export const HeroIllustrationMobile = () => {
  return (
    <div className="flex items-center justify-center w-full h-full overflow-hidden">
      <motion.div
        className="w-[120%] h-[120%]"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <svg
          viewBox="0 0 360 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Background Pattern */}
          <pattern id="grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E5E7EB" strokeWidth="0.5" opacity="0.2"/>
          </pattern>
          <rect width="360" height="400" fill="url(#grid)" opacity="0.3"/>

          {/* Credit Card */}
          <g transform="translate(40, 100)">
            {/* Card Shadow */}
            <rect
              x="5"
              y="5"
              width="200"
              height="120"
              rx="10"
              fill="black"
              fillOpacity="0.2"
              filter="blur(8px)"
            />
            
            {/* Main Card Body */}
            <rect
              x="0"
              y="0"
              width="200"
              height="120"
              rx="10"
              fill="url(#cardGradient)"
            />
            
            {/* Card Shine Effect */}
            <rect
              x="0"
              y="0"
              width="200"
              height="120"
              rx="10"
              fill="url(#cardShine)"
            />

            <defs>
              <linearGradient id="cardGradient" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0D9488" />
                <stop offset="1" stopColor="#14B8A6" />
              </linearGradient>
              <linearGradient id="cardShine" x1="0" y1="0" x2="200" y2="120" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="white" stopOpacity="0.1" />
                <stop offset="20%" stopColor="white" stopOpacity="0.1" />
                <stop offset="40%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            
            {/* EMV Chip */}
            <g transform="translate(20, 20)">
              <rect width="45" height="35" rx="4" fill="#FFD700"/>
              <rect x="5" y="5" width="35" height="25" rx="2" fill="none" stroke="#DAA520" strokeWidth="0.5"/>
              <path d="M5 15 H40 M15 5 V30" stroke="#DAA520" strokeWidth="0.5"/>
            </g>
            
            {/* Card Number */}
            <g transform="translate(20, 70)">
              <rect width="35" height="8" rx="4" fill="#ffffff" fillOpacity="0.3"/>
              <rect x="45" width="35" height="8" rx="4" fill="#ffffff" fillOpacity="0.3"/>
              <rect x="90" width="35" height="8" rx="4" fill="#ffffff" fillOpacity="0.3"/>
              <rect x="135" width="35" height="8" rx="4" fill="#ffffff" fillOpacity="0.3"/>
            </g>
            
            {/* Card Holder & Expiry */}
            <g transform="translate(20, 90)">
              <rect width="80" height="6" rx="3" fill="#ffffff" fillOpacity="0.2"/>
              <rect x="135" width="30" height="6" rx="3" fill="#ffffff" fillOpacity="0.2"/>
            </g>
          </g>

          {/* Mobile Phone */}
          <g transform="translate(180, 60)">
            {/* Phone Shadow */}
            <rect
              x="5"
              y="5"
              width="140"
              height="240"
              rx="20"
              fill="black"
              fillOpacity="0.2"
              filter="blur(8px)"
            />
            
            {/* Phone Frame */}
            <rect
              x="0"
              y="0"
              width="140"
              height="240"
              rx="20"
              fill="#1A1A1A"
            />
            
            {/* Screen */}
            <rect x="4" y="4" width="132" height="232" rx="16" fill="#FFFFFF"/>
            
            {/* Notch */}
            <path
              d="M50 2 H90 C95 2 98 4 98 8 C98 12 95 14 90 14 H50 C45 14 42 12 42 8 C42 4 45 2 50 2"
              fill="#1A1A1A"
            />
            
            {/* App Interface */}
            <g transform="translate(12, 20)">
              {/* Status Bar */}
              <rect x="0" y="0" width="116" height="20" rx="4" fill="#F3F4F6"/>
              <circle cx="98" cy="10" r="4" fill="#10B981"/>
              <rect x="80" y="8" width="12" height="4" rx="1" fill="#374151"/>
              <path d="M70 6 L74 14 L66 14 Z" fill="#374151"/>
              
              {/* App Content */}
              <rect x="8" y="32" width="100" height="16" rx="8" fill="#0D9488" fillOpacity="0.1"/>
              <rect x="8" y="56" width="80" height="8" rx="4" fill="#64748B"/>
              <rect x="8" y="72" width="60" height="8" rx="4" fill="#64748B"/>
              
              {/* Payment Success Section */}
              <circle cx="58" cy="120" r="24" fill="#0D9488" fillOpacity="0.1"/>
              <path
                d="M46 120 L55 129 L70 114"
                stroke="#0D9488"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Bottom Navigation */}
              <rect x="0" y="160" width="116" height="40" rx="8" fill="#F3F4F6"/>
              <rect x="8" y="176" width="24" height="8" rx="4" fill="#64748B"/>
              <rect x="46" y="176" width="24" height="8" rx="4" fill="#64748B"/>
              <rect x="84" y="176" width="24" height="8" rx="4" fill="#64748B"/>
            </g>
          </g>

          {/* Flying Money Icons with Shadow */}
          <g transform="translate(120, 40)">
            <circle cx="2" cy="2" r="15" fill="black" fillOpacity="0.1" filter="blur(2px)"/>
            <circle cx="0" cy="0" r="15" fill="#0D9488" fillOpacity="0.1"/>
            <text x="0" y="5" textAnchor="middle" fill="#0D9488" fontSize="16" fontWeight="bold">$</text>
          </g>
          <g transform="translate(260, 320)">
            <circle cx="2" cy="2" r="15" fill="black" fillOpacity="0.1" filter="blur(2px)"/>
            <circle cx="0" cy="0" r="15" fill="#0D9488" fillOpacity="0.1"/>
            <text x="0" y="5" textAnchor="middle" fill="#0D9488" fontSize="16" fontWeight="bold">€</text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}; 