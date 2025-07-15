import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";
import { HeroIllustration } from "./hero-illustration";
import { HeroIllustrationMobile } from "./hero-illustration-mobile";

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.15,
    margin: "0px 0px -200px 0px" // Trigger animation earlier
  });
  
  const mainControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);
  
  const mainVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 40
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000], // Custom easing
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };
  
  const childVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const illustrationVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: 40,
      scale: 0.95,
      rotate: -2
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        duration: 1,
        ease: [0.215, 0.610, 0.355, 1.000],
        delay: 0.2
      }
    }
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  return (
    <section 
      ref={sectionRef} 
      className="relative h-auto md:h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-teal-50/30 to-white pt-6 pb-0 md:py-0"
    >
      <div 
        className="absolute inset-0 -z-10" 
        style={{
          backgroundImage: `linear-gradient(to right, rgb(229 231 235) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(229 231 235) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.02
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Left Column - Content */}
          <motion.div
            variants={mainVariants}
            initial="hidden"
            animate={mainControls}
            className="lg:w-[45%] flex-shrink-0 pt-4 md:pt-0"
          >
            <motion.div variants={childVariants} className="space-y-6">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
                variants={childVariants}
              >
                <span className="text-gray-900">The Payment Infrastructure for</span>
                <br />
                <span className="bg-gradient-to-r from-teal-600 to-teal-400 bg-clip-text text-transparent">
                  Africa&apos;s Future
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-xl text-gray-600 max-w-xl"
                variants={childVariants}
              >
                Connect your business to multiple payment providers across Africa. Process payments, 
                manage transactions, and scale your business with our unified platform.
              </motion.p>

              <motion.div 
                className="flex flex-row gap-3 pt-4"
                variants={childVariants}
              >
                <Button asChild size="default" className="bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-8 group">
                  <Link href="#" className="flex items-center whitespace-nowrap">
                    <span className="hidden sm:inline">Start Integration</span>
                    <span className="sm:hidden">Start Now</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="default"
                  variant="outline" 
                  className="border-teal-600 bg-white/80 backdrop-blur-sm text-teal-600 hover:bg-teal-50 px-4 sm:px-8 group"
                >
                  <Link href="#" className="flex items-center whitespace-nowrap">
                    <span className="hidden sm:inline">View Documentation</span>
                    <span className="sm:hidden">Docs</span>
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div 
            className="lg:w-[55%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] scale-90 sm:scale-100"
            variants={illustrationVariants}
            initial="hidden"
            animate={mainControls}
          >
            <div className="block sm:hidden">
              <HeroIllustrationMobile />
            </div>
            <div className="hidden sm:block">
              <HeroIllustration />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 