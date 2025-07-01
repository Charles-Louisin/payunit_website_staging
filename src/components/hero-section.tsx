import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
  
  // Contrôleurs d'animation
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const decorControls = useAnimation();
  
  // Déclencher les animations lorsque la section est visible
  useEffect(() => {
    if (isInView) {
      textControls.start("visible");
      imageControls.start("visible");
      decorControls.start("visible");
    } else {
      textControls.start("hidden");
      imageControls.start("hidden");
      decorControls.start("hidden");
    }
  }, [isInView, textControls, imageControls, decorControls]);
  
  // Animation variants
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      }
    }
  };
  
  const childTextVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.7,
        ease: "easeOut" as const,
        delay: 0.2
      }
    }
  };
  
  const decorVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };
  
  return (
    <section ref={sectionRef} className="bg-teal-50/80 text-gray-800 pt-16 pb-16 relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Éléments décoratifs */}
      <motion.div 
        className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-teal-100/50 blur-3xl"
        initial="hidden"
        animate={decorControls}
        variants={decorVariants}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-teal-100/30 blur-2xl"
        initial="hidden"
        animate={decorControls}
        variants={decorVariants}
      ></motion.div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column - Text Content */}
          <motion.div 
            className="md:w-1/2 md:pr-8"
            initial="hidden"
            animate={textControls}
            variants={textVariants}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              variants={childTextVariants}
            >
              <motion.span 
                className="text-gray-800"
                variants={childTextVariants}
              >
                Seamlessly Accept
              </motion.span>
              <br />
              <motion.span 
                className="text-teal-600"
                variants={childTextVariants}
              >
                Payments
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 mb-8"
              variants={childTextVariants}
            >
              Connect your online businesses with multiple payment providers across Africa.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={childTextVariants}
            >
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit">
                <Link href="#" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-600 bg-transparent text-teal-600 hover:bg-teal-50 w-fit">
                <Link href="#" className="flex items-center">
                  Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            className="md:w-1/2 mt-8 md:mt-0"
            initial="hidden"
            animate={imageControls}
            variants={imageVariants}
          >
            <div className="relative">
              <Image
                src="/images/image hero.png"
                alt="PayUnit Payment Solutions"
                width={720}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" as const }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
} 