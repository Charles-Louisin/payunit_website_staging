import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const listVariants = {
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

  const socialIconVariants = {
    hover: { scale: 1.2, rotate: 5 },
  };

  return (
    <footer className="bg-[#1e3a4a] text-white py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 rounded-full bg-teal-600/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={listVariants}
          >
            <h3 className="font-semibold text-lg mb-4">Our Products</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Merchant payments</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Hosted payments</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">POS</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">P2P payments</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={listVariants}
          >
            <h3 className="font-semibold text-lg mb-4">Learn</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Fees</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Blog</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Videos</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Help Center</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={listVariants}
          >
            <h3 className="font-semibold text-lg mb-4">Developer</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Documentation</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Get Started</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Plugins & SDKs</Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
                <Link href="#" className="text-gray-300 hover:text-white">Code Samples</Link>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={3}
            variants={listVariants}
          >
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <motion.address 
              className="not-italic text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p>Afriland First Bank Building,</p>
              <p>Tradex Bonamoussadi, Douala</p>
              <p>Cameroon.</p>
              <p className="mt-2">+ (237) 676 963 697 (CM)</p>
              <p className="mt-2">info@sevengps.net</p>
            </motion.address>
            <motion.div 
              className="flex space-x-4 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"></path>
                </svg>
              </Link>
              </motion.div>
              <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 002.525 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.247 1.363.416 2.427.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0018.55 2.525c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2zm0 1.802c2.67 0 2.986.01 4.04.058.974.045 1.504.207 1.857.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.883.344 1.857.048 1.054.058 1.37.058 4.04 0 2.67-.01 2.986-.058 4.04-.045.974-.207 1.504-.344 1.857a3.1 3.1 0 01-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.883.3-1.857.344-1.054.048-1.37.058-4.04.058-2.67 0-2.986-.01-4.04-.058-.974-.045-1.504-.207-1.857-.344a3.1 3.1 0 01-1.15-.748 3.1 3.1 0 01-.748-1.15c-.137-.353-.3-.883-.344-1.857-.048-1.054-.058-1.37-.058-4.04 0-2.67.01-2.986.058-4.04.045-.974.207-1.504.344-1.857.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.883-.3 1.857-.344 1.054-.048 1.37-.058 4.04-.058zm0 3.063A5.135 5.135 0 006.865 12 5.135 5.135 0 0012 17.135 5.135 5.135 0 0017.135 12 5.135 5.135 0 0012 6.865zm0 8.468A3.333 3.333 0 118.667 12 3.333 3.333 0 0112 15.333zm6.538-8.671a1.2 1.2 0 10-2.4 0 1.2 1.2 0 002.4 0z"></path>
                </svg>
              </Link>
              </motion.div>
              <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
              </motion.div>
              <motion.div whileHover="hover" variants={socialIconVariants}>
              <Link href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
              </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/logo payunit.png"
              alt="PayUnit Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </motion.div>
          <div className="text-sm flex gap-10 text-gray-400">
            <motion.div 
              className="flex space-x-4 mb-2 justify-center md:justify-end"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="#" className="hover:text-white">Terms & Conditions</Link>
              <span>|</span>
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              © 2022 PayUnit. All rights reserved
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 