import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-white text-black relative overflow-hidden">
      {/* Éléments décoratifs */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-teal-600/10 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-teal-600/5 blur-2xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <Image
                src="/images/image body 2.png"
                alt="Software Integration"
                width={600}
                height={500}
                className="w-full max-w-lg mx-auto relative z-10"
              />
              {/* Éléments décoratifs autour de l'image */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/20 rounded-full"></div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-500/30 rounded-full"></div>
            </div>
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Powerfull and easy API documentation for developers
            </h2>
            <p className="text-lg text-gray-600">
              Designer pour permettre au développeur de gagner des semaines en intégration.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Code sample</h3>
                <p className="text-gray-600">
                  Pre-build integration for most used systems like woo-Commerce.
                </p>
              </div>
              <div className="space-y-3 bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800">Tools for most use stac</h3>
                <p className="text-gray-600">
                  Client and server libraries, from PHP to Javascript and Ruby Flutter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 