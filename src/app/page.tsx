"use client"

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import SeamlessPayments from "@/components/seamless-payments";
import FeaturesSection from "@/components/features-section";
import WorldSection from "@/components/world-section";
import IntegrationSection from "@/components/integration-section";
import Footer from "@/components/footer";
import { motion, useInView, useAnimation, Variants } from "framer-motion";
import { useRef, useEffect } from "react";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const seamlessRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const integrationRef = useRef<HTMLDivElement>(null);
  
  // Utiliser un seuil plus bas pour mobile pour une meilleure expérience
  const isSeamlessInView = useInView(seamlessRef, { once: false, amount: 0.15 });
  const isFeaturesInView = useInView(featuresRef, { once: false, amount: 0.15 });
  const isWorldInView = useInView(worldRef, { once: false, amount: 0.15 });
  const isIntegrationInView = useInView(integrationRef, { once: false, amount: 0.15 });

  // Contrôleurs d'animation
  const seamlessControls = useAnimation();
  const featuresControls = useAnimation();
  const worldControls = useAnimation();
  const integrationControls = useAnimation();

  // Déclencher les animations lorsque les éléments sont visibles
  useEffect(() => {
    if (isSeamlessInView) {
      seamlessControls.start("visible");
    } else {
      seamlessControls.start("hidden");
    }
  }, [isSeamlessInView, seamlessControls]);

  useEffect(() => {
    if (isFeaturesInView) {
      featuresControls.start("visible");
    } else {
      featuresControls.start("hidden");
    }
  }, [isFeaturesInView, featuresControls]);

  useEffect(() => {
    if (isWorldInView) {
      worldControls.start("visible");
    } else {
      worldControls.start("hidden");
    }
  }, [isWorldInView, worldControls]);

  useEffect(() => {
    if (isIntegrationInView) {
      integrationControls.start("visible");
    } else {
      integrationControls.start("hidden");
    }
  }, [isIntegrationInView, integrationControls]);

  // Animation variants
  const leftToRightVariant: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      } 
    }
  };

  const rightToLeftVariant: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      } 
    }
  };

  const bottomToTopVariant: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        when: "beforeChildren" as const,
        staggerChildren: 0.1
      } 
    }
  };

  return (
    <main ref={mainRef} className="bg-white overflow-hidden">
      <Navbar />
      <HeroSection />
      
      <motion.div
        ref={seamlessRef}
        initial="hidden"
        animate={seamlessControls}
        variants={leftToRightVariant}
        className="overflow-hidden"
      >
        <SeamlessPayments />
      </motion.div>
      
      <motion.div
        ref={featuresRef}
        initial="hidden"
        animate={featuresControls}
        variants={rightToLeftVariant}
        className="overflow-hidden"
      >
        <FeaturesSection />
      </motion.div>
      
      <motion.div
        ref={worldRef}
        initial="hidden"
        animate={worldControls}
        variants={bottomToTopVariant}
        className="overflow-hidden"
      >
        <WorldSection />
      </motion.div>
      
      <motion.div
        ref={integrationRef}
        initial="hidden"
        animate={integrationControls}
        variants={leftToRightVariant}
        className="overflow-hidden"
      >
        <IntegrationSection />
      </motion.div>
      
      <Footer />
    </main>
  );
}
