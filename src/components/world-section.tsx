import Image from "next/image";

export default function WorldSection() {
  return (
    <section className="py-16 bg-white text-black relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-1/3 right-0 w-40 h-40 rounded-full bg-teal-600/5 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 rounded-full bg-teal-600/10 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Accross the world
            </h2>
            <p className="text-lg text-gray-600">
              Pas de barriere pour recevoire vos paiement peut importe la localisation de vos clients grâce à nos payment service provider, collecter les paiement de par le monde dans votre site web ou application mobile
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-teal-600">Africa</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-teal-600">Europe</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-teal-600">Asia</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-teal-600">America</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/images/image body 3.png"
                alt="Global Payments"
                width={600}
                height={500}
                className="w-full max-w-lg relative z-10"
              />
              {/* Éléments décoratifs autour de l'image */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-teal-500/20 rounded-full"></div>
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-teal-500/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 