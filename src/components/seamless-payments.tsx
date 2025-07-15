import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SeamlessPayments() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8], [0, 1, 0.8]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.8], [60, 0, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.8], [0.8, 1, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0, 0.3, 0.8], [-5, 0, 5]);

  return (
    <section className="py-16 bg-white text-black relative overflow-hidden" ref={containerRef}>
      {/* Decorative elements */}
      <motion.div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-teal-50 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [0.8, 1.2]),
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.5]),
        }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-blue-50 blur-3xl"
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 0.8]),
          opacity: useTransform(scrollYProgress, [0.5, 1], [0.5, 0]),
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            style={{ opacity: textOpacity, y: textY }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Full Integration ship payment Product you need for your business
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              PayUnit brings together everything that is required to build website and apps that accept payment and easy management
            </motion.p>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit group">
                <Link href="#" className="flex items-center">
                  Learn More
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
          <motion.div 
            className="flex justify-center md:justify-end relative"
            style={{
              scale: imageScale,
              rotate: imageRotate,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-50"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <Image
              src="/images/image body 1.png"
              alt="PayUnit Integration"
              width={600}
              height={500}
              className="w-full max-w-lg relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
} 