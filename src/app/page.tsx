"use client"

import HeroSection from "@/components/hero-section";
import SeamlessPayments from "@/components/seamless-payments";
import FeaturesSection from "@/components/features-section";
import WorldSection from "@/components/world-section";
import IntegrationSection from "@/components/integration-section";
import Footer from "@/components/footer";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <main ref={mainRef} className="bg-white overflow-hidden">
      <HeroSection />
      <SeamlessPayments />
      <FeaturesSection />
      <WorldSection />
      <IntegrationSection />
      <Footer />
    </main>
  );
}
