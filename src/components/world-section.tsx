import Image from "next/image";
import { motion, useInView, useAnimation, useScroll, useTransform, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

export default function WorldSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax and transform effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-2, 0, 2]);
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

  const tagVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      y: 10
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-16 bg-white text-black relative overflow-hidden">
      {/* Background gradient and parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-teal-50/30 opacity-60"
        style={{ y, opacity }}
      />
      
      {/* Decorative elements with parallax */}
      <motion.div 
        className="absolute top-1/3 right-0 w-40 h-40 rounded-full bg-teal-600/5 blur-3xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-teal-600/10 blur-2xl"
        style={{ 
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.7, 0.4])
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-teal-600"
                variants={itemVariants}
              >
              Accross the world
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600"
              variants={itemVariants}
            >
              Pas de barriere pour recevoire vos paiement peut importe la localisation de vos clients grâce à nos payment service provider, collecter les paiement de par le monde dans votre site web ou application mobile
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-3 pt-4"
              variants={containerVariants}
            >
              {["Africa", "Europe", "Asia", "America"].map((region, index) => (
                <motion.span
                  key={region}
                  className="relative px-4 py-2 bg-gradient-to-br from-white to-gray-50/80 rounded-full text-sm text-teal-600 hover:text-teal-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden group"
                  variants={tagVariants}
                  custom={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="relative z-10">{region}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center"
            variants={itemVariants}
            ref={imageRef}
            style={{ scale, rotate }}
          >
            <div className="relative">
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
              <Image
                src="/images/image body 3.png"
                alt="Global Payments"
                width={600}
                height={500}
                  className="w-full max-w-lg rounded-xl shadow-lg"
              />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 rounded-xl"
                  initial={{ x: "-100%", opacity: 0.5 }}
                  animate={{ 
                    x: "100%",
                    opacity: [0.3, 0.5, 0.3],
                    transition: { 
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "linear",
                      repeatDelay: 4
                    }
                  }}
                />
              </motion.div>
              
              {/* Decorative circles */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full"
                style={{ 
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]),
                  opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.4])
                }}
              />
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 bg-teal-500/30 rounded-full"
                style={{ 
                  scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1]),
                  opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.9, 0.5])
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 