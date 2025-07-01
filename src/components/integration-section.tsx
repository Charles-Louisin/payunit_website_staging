import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function IntegrationSection() {
  return (
    <section className="py-16 bg-[#1e3a4aee] text-white relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-teal-600/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-teal-600/10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Pret a Integrer PayUnit ?
            </h2>
            <p className="text-gray-300">
              Explorer notre documentation ou creer un compte et accepter des aujourd'hui les paiement sur votre site web ou application mobile. Vous pouvez aussi nous contacter pour costomizer nos moyen de paiement pour votre business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit">
                <Link href="#" className="flex items-center">
                  Start Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-600 bg-transparent text-teal-300 hover:bg-teal-800/30 hover:text-white w-fit">
                <Link href="#" className="flex items-center">
                  Contact Service
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6 md:col-span-2 md:pl-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#0a2a36] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Connaitre nos frais</h3>
                <p className="text-gray-300 mb-4">Frais par transaction, pas de frais cachés.</p>
                <Button asChild variant="outline" className="border-teal-600 bg-transparent text-teal-300 hover:bg-teal-800/30 hover:text-white w-fit">
                  <Link href="#" className="flex items-center">
                    Découvrir nos frais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </div>
              
              <div className="bg-[#0a2a36] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Start integration</h3>
                <p className="text-gray-300 mb-4">En trois étapes intégré un moyen de paiement sur votre site ou application mobile.</p>
                <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit">
                  <Link href="#" className="flex items-center">
                    Je commence l'intégration
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 