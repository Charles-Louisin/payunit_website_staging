import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function SeamlessPayments() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Full Integraation ship payment Product you need for your business
            </h2>
            <p className="text-lg text-gray-600">
              PayUnit brings together everything that is required to build website and apps that accept payment and easy management
            </p>
            <div className="pt-4">
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700 w-fit">
                <Link href="#" className="flex items-center">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/image body 1.png"
              alt="PayUnit Integration"
              width={600}
              height={500}
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 