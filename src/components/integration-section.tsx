import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IntegrationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8], [0, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8], [100, 0, -50]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 bg-[#1e3a4aee] text-white relative overflow-hidden" ref={containerRef}>
      {/* Éléments décoratifs */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-600/5 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
          x: useTransform(scrollYProgress, [0, 1], [0, 50]),
        }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-teal-600/10 blur-2xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 0.8]),
          x: useTransform(scrollYProgress, [0, 1], [0, -50]),
        }}
      />
      
      <motion.div 
        className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10"
        style={{ opacity, y }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={cardVariants}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Pret a Integrer PayUnit ?
            </motion.h2>
            <motion.p 
              className="text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Explorer notre documentation ou creer un compte et accepter des aujourd'hui les paiement sur votre site web ou application mobile. Vous pouvez aussi nous contacter pour costomizer nos moyen de paiement pour votre business
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit group">
                <Link href="#" className="flex items-center">
                  Start Now
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-600 bg-transparent text-teal-300 hover:bg-teal-800/30 hover:text-white w-fit group">
                <Link href="#" className="flex items-center">
                  Contact Service
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="space-y-6 md:col-span-2 md:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-[#0a2a36] p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Connaitre nos frais</h3>
                <p className="text-gray-300 mb-4">Frais par transaction, pas de frais cachés.</p>
                <Button asChild variant="outline" className="border-teal-600 bg-transparent text-teal-300 hover:bg-teal-800/30 hover:text-white w-fit group">
                  <Link href="#" className="flex items-center">
                    Découvrir nos frais
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div 
                className="bg-[#0a2a36] p-6 rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                variants={cardVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-2xl font-semibold mb-4">Start integration</h3>
                <p className="text-gray-300 mb-4">En trois étapes intégré un moyen de paiement sur votre site ou application mobile.</p>
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit group">
                  <Link href="#" className="flex items-center">
                    Je commence l'intégration
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </motion.svg>
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 