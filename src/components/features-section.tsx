import Image from "next/image";
import { motion, useInView, useAnimation, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  
  const isInView = useInView(sectionRef, { 
    once: false, 
    amount: 0.2,
    margin: "0px 0px -200px 0px"
  });
  
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.9,
      rotate: -2
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  };

  const decorativeVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white text-black relative overflow-hidden">
      {/* Background gradient and decorative elements */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 opacity-60"
        style={{ y, opacity }}
      />
      
      <motion.div 
        className="absolute top-20 left-10 w-24 h-24 rounded-full bg-teal-600/10 blur-xl"
        variants={decorativeVariants}
        initial="hidden"
        animate={controls}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-600/5 blur-2xl"
        variants={decorativeVariants}
        initial="hidden"
        animate={controls}
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1" 
            variants={imageVariants}
            ref={imageRef}
            style={{ scale }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
              <Image
                src="/images/image body 2.png"
                alt="Software Integration"
                width={600}
                height={500}
                  className="w-full max-w-lg mx-auto rounded-xl shadow-lg"
              />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                  initial={{ x: "-100%", opacity: 0.5 }}
                  animate={{ 
                    x: "100%",
                    opacity: [0.5, 0.7, 0.5],
                    transition: { 
                      repeat: Infinity,
                      duration: 2,
                      ease: "linear",
                      repeatDelay: 3
                    }
                  }}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full"
                variants={{
                  hidden: { scale: 0.8, x: -10, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    x: 0, 
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.3 }
                  }
                }}
              />
              <motion.div 
                className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500/30 rounded-full"
                variants={{
                  hidden: { scale: 0.8, x: 10, opacity: 0 },
                  visible: { 
                    scale: 1, 
                    x: 0, 
                    opacity: 1,
                    transition: { duration: 0.8, delay: 0.4 }
                  }
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6 order-1 md:order-2" 
            variants={itemVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900"
              variants={itemVariants}
            >
              Powerfull and easy API documentation for developers
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              Designer pour permettre au développeur de gagner des semaines en intégration.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
              variants={containerVariants}
            >
              <motion.div 
                className="group space-y-3 bg-gradient-to-br from-white to-gray-50/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -4, 
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block mb-2 transform-gpu"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">Code sample</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Pre-build integration for most used systems like woo-Commerce.
                </p>
              </motion.div>
              
              <motion.div 
                className="group space-y-3 bg-gradient-to-br from-white to-gray-50/80 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -4, 
                  transition: { duration: 0.2 },
                }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="inline-block mb-2 transform-gpu"
                >
                  <span className="text-2xl">🛠️</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-teal-600 transition-colors">Tools for most use stac</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                  Client and server libraries, from PHP to Javascript and Ruby Flutter.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 